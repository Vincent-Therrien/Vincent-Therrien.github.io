# Why GPUs Are so Fast for 3D Graphics

Computers generate 3D images by projecting shapes onto a plane, converting them into pixels, and
adjusting their textures and shades. Let's learn how this works and why GPUs are so good at this.


## Geometry

We'll start with vertices: our goal is to take this 3D point cloud and project it onto a 2D surface.
One way to do that is to imitate the way pinhole cameras work in real life: light enters through the
aperture of the camera and gets projected onto a sensor that interprets the signal as an image.

Let's place our simulated camera at the origin of the coordinate system, at the intersection of
three axes: X, Y, and Z. The camera is looking in the Z direction, where the point cloud is located.
To obtain the projected 2D image, we calculate how light would reach the sensor for each vertex.

Light travels in straight lines, so if we look sideways, along the ZY-plane, we see that the
trajectory of a light ray traces similar triangles, which lets us calculate the position of the
projected point along the Y-axis. We do the same thing looking the other way to find the position
along the X-axis. Doing this for all points, we obtain a projection of the point cloud. The image is
inverted because that's how optics work, our brains or cameras just flip the image afterwards. But
we don't have to do this for 3D graphics, we can modify the equation to project the vertices on an
**image plane** instead of a simulated sensor, and we get an upright image right way.

The equation we got is very simple because I lined up the camera with the coordinate system. If,
say, we rotate the camera and translate it at a different position, the equation we had before falls
apart because it no longer describes how light reaches the camera. But here's a trick: we could
bring the camera back to its original position and apply that same inverse transformation to the
object. This does not change where the object is located relative to the camera, but it recenters
the camera back at the origin of the coordinate system. This would bring us back to the situation we
had before, and we could reuse the same equation to project vertices.

And for that, we'll use homogeneous coordinates. So far, we've represented vertices in cartesian
coordinates, which use 3 elements, one for each axis. Homogeneous coordinates use 4 elements, the
first three are the same and the last one is set to 1 for vertices. Granted, this doesn't seem
useful, but homogeneous coordinates actually simplify transformations. For instance, we can
represent translations and rotations with matrix multiplications. This is a translation matrix. It's
a 4 by 4 array that we multiply with homogeneous coordinates to obtain a translated position. We can
also use a rotation matrix to change the orientation of objects. Even better, we can chain matrices
and multiply them to obtain a new matrix that describes a full transformation. Another cool property
of transformation matrices is that we can easily compute their inverse, which gives the opposite
transformation. That way, we undo transformations and bring objects back to their previous
configuration.

We'll use matrix multiplications to project vertices. First, a model matrix configures the position
and orientation of the object. Then, a view matrix transposes the object into the coordinate system
of the camera. The view matrix is the inverse of the matrix that describes the configuration of the
camera. Now, we are back at our initial situation and can reuse the previous equation to project the
vertices. But this equation is just one special case of projection, there are multiple ways to
project images.

**Perspective projections** imitate how eyes perceive objects, so the ones far from the camera
appear smaller than the ones close to it. The field of view is a parameter that controls how wide
the camera sees. When it's around 60 degrees, the projection looks natural because it roughly
matches how our eyes work. A wider field gives kind of a fisheye effect while using a narrower field
looks more flat. We can play around with the field of view to create cool effects. You know, there's
this shot in Jaws when the camera moves towards the actor while the field of view increases; this is
called a dolly zoom. It gives the impression that the background recedes while the character
approaches the camera. It doesn't look realistic, but it creates an artistic effect. Apart from the
field of view, we can parametrize perspective projection with the near and far planes, that is, the
boudaries of the space that will be rendered onto the screen, as well as the aspect ratio of the
camera. These parameters can be plugged in a projection matrix, which we can add to our chain of
matrices. To obtain the 2D projection, we need to multiply all these matrices with the coordinates
of the vertex that we want to project. Finally, we divide the first three elements of the
homogeneous coordinates by the last one; this is called perspective division.

Another type of projection is called **parallel**. It does not distort the propertion of objects
while projecting them; as a result, objects far from the camera appear as big as the ones close to
it. One type of parallel projection is called orthographic, and it's like using a perspective camera
with an infinitely small field of view. The result does not look realistic, but it make it easier to
compare the size of objects, which makes it useful in architecture and engineering, where you want
to measure dimensions easily.

So, we can obtain 2D images from 3D vertices by multiplying their coordinates with model, view, and
projection matrices, and then doing the perspective division. One thing I'll point out is that these
calculations are easy to parallelize because each vertex in this scene is multiplied by the same
matrix. This is a form of data parallelism: we perform the same calculations on different input
data, so they can run independently. GPUs were made to run data parallelism efficiently, so they can
split matrix multiplications at a much higher scale than CPUs and achieve higher performance.

Point clouds, like this one, are used in many applications, like that's what we obtain when scanning
environments with lidars, but in 3D graphics, most of the time, we don't want to see gaps between
vertices.


## Rasterization

Instead, we use polygons to depict solid surfaces, and you can make complex objects by combining
multiple ones. For simplicity, we break the polygons up into triangles and project their verticles
onto the screen with matrix multiplication and perspective division. We now need to convert these 2D
coordinates into pixels, this is called rasterization.

We first restrict the computations to a bounding box around the vertices because we know that pixels
outside of that area are not part of the triangle. Then, we define three equations, one for each
side of the triangle, and apply this condition to find which pixels are inside of it. That is also
easy to parallelize on GPUs because it's a form of data parallelism: we compute the same equation on
different input data, in that case, on different pixels. And that's how we project triangles onto a
screen.

This is the basic procedure to rasterize triangles, but modern graphics pipelines implement a bunch
of optimization techniques on top of that to accelerate rendering. For instance, they use a Z-buffer
to keep track of the apparent depth of each pixel. That way, a triangle behind another one will not
be drawn over a triangle that is closer to the camera. We can also use backface culling to ignore
triangles that are facing away from the camera. That's why, when a character goes out of bound, the
walls seem to disappear; they are still there, but the graphics engine renders them on one side only
to reduce computations. Graphics pipelines also clip triangles that are out of the camera scope to
avoids rendering them. Those are just a few simple optimization techniques; there's more of them.


## Texturing

Now, we know which area of the screen is occupied by projected triangles, and we need to find the
color of each pixel. That depends on the surface: if it's a uniform color, we can just apply it to
all of its pixels. You can create cool objects with flat colors, but you'll probably agree they are
a bit limited. To add detail, we can paste textures onto surfaces. And of course, we cannot just
superimpose textures onto projected triangles because, then, the textures would have the wrong
perspective, it's not realistic. We need to map the pixels of projected triangles to texture
coordinates in a way that follows the projection.

For that, we compute barycentric coordinates. They specify where each pixel of the triangle is
located relative to the center of the triangle. Afterwards, we use these equations to determine UV
coordinates, which indicate the corresponding location of each pixel on the texture. That way, we
can map pixels of the triangle to pixels on the texture and display it in 3D.

That works well when the texture is high definition, but if the texture is too small or if the
triangle is too big, hum, this happens: we get sharp boundaries that correspond to different pixels.
That generally looks bad, so we interpolate colors between pixels to obtain smoother transitions.
Interpolation used to be more obvious in older video games because they relied on low-res pictures,
but they have become less common in modern games. Barycentric coordinates and color interpolation,
by the way, are also trivially parallelized on GPUs because they can be computed independently.

So far, we've succeeded in replicating the look of 3D games from the early 90s. The projection looks
right, the textures are displayed with the proper perspective, but it looks really simple and
unrealistic. A big reason for that is the lack of shades. Light modifies how environments look,
we don't notice it all the time, but when lightning it too uniform, things look a bit uncanny.


## Shaders

Realizing this, people invented a new type of program called shaders, which originally modified the
color of projected pixels.

This is useful to simulate the ways in which light gets reflected. When it encounters a smooth
surface like still water, it gets reflected in a mirror-like way; this is called specular
reflection. When it bounces off a rough surface like unfinished wood, it gets scattered around; this
is called diffuse reflection. Shaders can simulate both specular and diffuse reflection from the
position of a light source, the position of a camera, the geometry of an object and the properties
of a material to increase realism. Shaders can do many other things. A famous one is cel-shading,
which applies a threshold to colors to give the resulting image a cartoony appearance. Shaders can
also inverse colors, simulate the glow of metals, modify lightning, and so on.

The original purpose of shaders what to create visual effects, but they have become more and more
versatile over time. For instance, matrix multiplications used for projection were performed by
fixed instructions in the graphics pipeline, but modern graphics frameworks now use vertex shaders
for that, and we can customize them.

Whenever you wonder why GPUs are good at something, it's almost always because of parallelization.
Both devices perform the same arithmetic operations, but GPUs are made to do those simultaneously,
which makes them really good for data parallelism. And the operations in a graphics pipeline,
projecting vertices onto a screen, rasterizing polygons, adding textures, and applying shaders, all
those operations happen to be easy to parallelize. There are more operations in a typical graphics
pipeline, I've presented the main ones but a modern framework lets us fine-tune even more stuff.


## Video Ideas

I talked about the principles behind 3D graphics but not how to program it. We usually do that with
graphics frameworks like OpenGL or Vulkan which handle complex operations for us. I'll probably do a
video to explain how to use them, and there are other applications I wanna talk about, like how GPUs
can accelerate neural networks or physics engines. Besides, there are some interesting geopolitical
developments between the US and China regarding semiconductors [8], sounds like a cool topic to
cover. And if you have other ideas, you can always -

```
/\\\              /\\\\\\\\\\\\\\\     /\\\\\\\\\     /\\\        /\\\  /\\\\\\\\\\\\\\\               /\\\\\\\\\                     /\\\\\\\\\       /\\\\\       /\\\\            /\\\\  /\\\\            /\\\\  /\\\\\\\\\\\\\\\  /\\\\\     /\\\  /\\\\\\\\\\\\\\\
\/\\\             \/\\\///////////    /\\\\\\\\\\\\\  \/\\\       \/\\\ \/\\\///////////              /\\\\\\\\\\\\\                /\\\////////      /\\\///\\\    \/\\\\\\        /\\\\\\ \/\\\\\\        /\\\\\\ \/\\\///////////  \/\\\\\\   \/\\\ \///////\\\/////
 \/\\\             \/\\\              /\\\/////////\\\ \//\\\      /\\\  \/\\\                        /\\\/////////\\\             /\\\/             /\\\/  \///\\\  \/\\\//\\\    /\\\//\\\ \/\\\//\\\    /\\\//\\\ \/\\\             \/\\\/\\\  \/\\\       \/\\\
  \/\\\             \/\\\\\\\\\\\     \/\\\       \/\\\  \//\\\    /\\\   \/\\\\\\\\\\\               \/\\\       \/\\\            /\\\              /\\\      \//\\\ \/\\\\///\\\/\\\/ \/\\\ \/\\\\///\\\/\\\/ \/\\\ \/\\\\\\\\\\\     \/\\\//\\\ \/\\\       \/\\\
   \/\\\             \/\\\///////      \/\\\\\\\\\\\\\\\   \//\\\  /\\\    \/\\\///////                \/\\\\\\\\\\\\\\\           \/\\\             \/\\\       \/\\\ \/\\\  \///\\\/   \/\\\ \/\\\  \///\\\/   \/\\\ \/\\\///////      \/\\\\//\\\\/\\\       \/\\\
    \/\\\             \/\\\             \/\\\/////////\\\    \//\\\/\\\     \/\\\                       \/\\\/////////\\\           \//\\\            \//\\\      /\\\  \/\\\    \///     \/\\\ \/\\\    \///     \/\\\ \/\\\             \/\\\ \//\\\/\\\       \/\\\
     \/\\\             \/\\\             \/\\\       \/\\\     \//\\\\\      \/\\\                       \/\\\       \/\\\            \///\\\           \///\\\  /\\\    \/\\\             \/\\\ \/\\\             \/\\\ \/\\\             \/\\\  \//\\\\\\       \/\\\
      \/\\\\\\\\\\\\\\\ \/\\\\\\\\\\\\\\\ \/\\\       \/\\\      \//\\\       \/\\\\\\\\\\\\\\\           \/\\\       \/\\\              \////\\\\\\\\\    \///\\\\\/     \/\\\             \/\\\ \/\\\             \/\\\ \/\\\\\\\\\\\\\\\ \/\\\   \//\\\\\       \/\\\
       \///////////////  \///////////////  \///        \///        \///        \///////////////            \///        \///                  \/////////       \/////       \///              \///  \///              \///  \///////////////  \///     \/////        \///
```


# Further Reading Material

- [1] Matrix multiplication: https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/1.-vectors-and-matrices/part-b-matrices-and-systems-of-equations/session-9-matrix-multiplication/
- [2] Transformation matrices: https://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/
- [3] Tutorial on OpenGL camera: https://songho.ca/opengl/gl_camera.html
- [4] Animations for model-view-projection matrices https://jsantell.com/model-view-projection/
- [5] Explanation of rasterization https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/rasterization-stage.html
- [6] Explanation of barycentric and UV coordinates: https://medium.com/nerd-for-tech/texture-mapping-using-barycentric-weights-c0395058eaab
- [7] Basic explanation of shaders in OpenGL: https://learnopengl.com/getting-started/shaders
- [8] Luke James. "Nvidia prepares shipment of 82,000 AI GPUs to China as chip war lines blur — H200 shipments with 25% tax to begin as US loosens restrictions" (2025). tom's Hardware. https://www.tomshardware.com/tech-industry/semiconductors/nvidia-prepares-h200-shipments-to-china-as-chip-war-lines-blur


# Resources

- Image of a point cloud taken with a Lidar: https://lidar.gov.bc.ca/pages/program
- Image of a printed circuit board: https://www.iqsdirectory.com/articles/printed-circuit-boards.html
- Image of architectural plans: https://www.archdaily.com/catalog/us/products/18805/best-practices-orthographic-views-enscape/206357?ad_source=neufert&ad_medium=gallery&ad_name=open-gallery
- 3D model: "TeaScroll Clubhouse - Teapot Prop" (https://skfb.ly/6D8nL) by Anaïs Faure is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
- 3D model: "England Tea Cup" (https://skfb.ly/6WZNH) by chung_the_artist is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
- 3D model: "Table" (https://skfb.ly/6BYHM) by yryabchenko is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
