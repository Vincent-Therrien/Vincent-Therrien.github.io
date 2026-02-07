# AI VS Aliens | Reinforcement Learning Walkthrough

This game is entirely controlled by a machine learning model. I've let it play the game multiple
times and it ended up learning how to score points by itself. We call this approach reinforcement
learning, and we'll go through all the steps to make a model that can play this game, or even other
games.


## Environment

I'll first explain the problem that we will solve. Reinforcement learning comprises two main
components: the *environment*, in this case a 2D game, and the *agent*, here, a spaceship in that
game. The agent interacts with the environment by moving around and firing projectiles. It obtains
*rewards* that indicate how good its actions are. If the agent collects a point or hits an enemy,
it obtains a positive reward. If it gets blasted by an enemy, it obtains a negative reward. Our goal
is to maximize the rewards to make the agent as good at playing as possible.

By the way, you can try that game out if you want. Open up the project on Github, clone the
repository on your machine, install the dependencies, and run the game. Let's now have a look a
models that we can use.


## Q-Tables

A basic model for reinforcement learning is the Q-table. "Q" stands for "quality", which is an
estimation of the future rewards an agent can obtain for a given state and action. A Q-table looks
like this. The rows represent all possible states of the environment, and the columns represent the
possible actions that an agent can perform. Each cell contains a Q-value.

Actions that are more likely to lead to rewards are given a higher Q-value. For instance, in this
state, moving towards the collectible is more likely to result in a future reward than moving away
from it, so moving in this direction corresponds to a higher Q-value. When playing the game, the
agent can look up the Q-table to perform the action with the best quality given some state of the
environment.

Q-tables are easy to understand, but often impractical. Before using them, they have to be filled by
performing each action in all possible states of the environment and determining the corresponding
Q-values.

That works for simple environments, but for more complex problems, we may have to try
millions of states and actions to fill a Q-table. This approach would not work well in these cases,
but we can improve it. Instead of using a large table, we can *approximate* it with a machine
learning model. This is called Deep Q-learning. The model will not memorize all possible states and
actions like a Q-table, but will rather learn patterns from interactions with the game to estimate
which actions are more likely to result in rewards. This is more scalable than a Q-Table because it
can generalize to unseen states, making it more suitable for complex environments.


## Artificial Neurons

We will use an artificial neural network for this approximation model. As the name tells, neural
networks are made individual neurons, like this one. It's a mathematical model that takes one or
multiple values as inputs, multiplies each input by a weight, sums the weighted inputs along with a
bias term, and applies a mathematical operation to the result.

This operation is called the activation function, and it's used to make the neuron model more
complex patterns. An example of a simple but widely used activation function is the rectified
linear unit, which cancels negative values.

The training process modifies the parameters of the neuron - that is, its weights and bias,
to make it learn how to play the game. A single neuron is pretty limited, but we can create more
complex models by connecting neurons into a *neural network*.


### Artificial Neural Networks

These networks are often organized into layers of neurons that take the information from the
previous layer and transmit it to the next layer. In our case, the first layer of the network, the
*input layer*, receives footage of the game. The final layer, the *output layer*, decides which
button to push. This is used to control the agent on the screen.

Between these, we can add hidden layers, which help the network learn complex patterns from the
input. We can change the number of hidden layers, the number of neurons in each layer, and the way
that neurons are connected. All of these changes are examples of *hyperparameters*, which are
settings that define the architecture of the model.

*In theory*, we could simply flatten the input image into a 1D vector and feed it to a layer
of neurons. This model is called a multilayer perceptron. It's a good approach for many problems,
but multilayer perceptrons often struggle with images because they lack spatial awareness.

They treat the pixels of the image as unrelated, separate entities, which is not effective. In
practice, if you want to understand an image, you have to look at collections of pixels to recognize
particular features, like shapes or edges. We can do that with convolution, a mathematical operation
where a small grid - the kernel - slides across the image to detect features. For instance, a Sobel
operator is a type of convolution that highlights edges. In our model, the convolutional layer will
extract relevant features to recognize collectibles and enemies from the input.

The next stage is a fully connected layer. The features extracted by the convolutional layer are
flattened into a one-dimensional vector and fed to all neurons of that layer. During training, the
parameters of the neurons will be adjusted to decide which actions must be performed depending on
the detected features. Finally, we can plug the fully connected layer to the output. This neural
network can be written with the following PyTorch code.

The network will probably not be good at playing because it is pretty shallow - meaning that it
doesn't have many layers. Research has shown that increasing the depth of a neural network, that is,
increasing its number of layers, can improve its performances. But we have to be careful not to
add too many layers because we then run the risk of overfitting the model, which means that it will
memorize specific examples seen during training instead of developing a general understanding of
the game.

Let's summarize: we want to train a reinforcement learning agent that will learn to play the game.
We can do that by filling a Q-table and letting the agent look up the best action to take for any
state. That table would be large and impractical, so we instead approximate it. This approach is
known as Deep Q-learning, and the neural network that we use is called a Deep Q-Network. The
next step is to train this network.


## Training

For now, its parameters are left at their default values. Here's what happens when
the untrained model plays. As expected, it performs poorly because it still hasn't learned the
rules of the game. Here's how we'll train it:

- We create an environment and make the agent play. This is called an *episode*.
- Episodes are split in discrete *steps*, which are game frames. On each step, the model observes
  a 2D image from the game and predicts a Q-value for all actions. In other words, it tries to
  guess the propensity of each action to lead to rewards. The agent then performs the action with
  the best Q-value, which modifies the environment and may result in a reward.
  The agent collects the reward and observes the new state of the environment.

- The model then predicts the Q-values for this new state and selects the highest Q-value. This
  represents the future reward that the agent expects to obtain by performing this action in a
  subsequent step.

- We now add up the reward that the agent just collected with the future reward that it expects to
  obtain. This is called the Bellman equation. It estimates the quality of an action not just from
  the immediate reward, but also from the future rewards that it expects to get. Our goal is to make
  the model estimate the Bellman equation as well as possible to identify the actions that lead to
  the highest rewards.

- To do that, we want to minimize the difference between the Q-value predicted before the action,
  and the Q-value calculated after performing the action and taking the reward into account. We call
  this difference the *loss*.

- The loss is propagated in the network in the inverse direction to compute *gradients*, which are,
  roughly speaking, values that indicate how the parameters need to be adjusted to minimize the
  loss. The process that computes gradients is called *backpropagation*.

- We then use the gradients retrieved during backpropagation to adjust the parameters of the network
  with a process called *gradient descent*. This makes the model slightly better at approximating
  the Bellman equation.
- Steps are repeated until the episode ends, either by losing or reaching the maximum number of
  steps. Once the episode ends, a new one begins, and the process continues until the model
  approximates the Bellman equation to our satisfaction.

This graph shows the performances of the model over its training. The X-axis shows the
number of episodes and the Y-axis shows the average score obtained by the agent when we evaluate it
between episodes. The model gradually improves, but its performances are very unstable. We can
improve the training process to stabilize and enhance the performances of the model. Here are the
5 main improvements I've added:


### 1. Exploration and Exploitation

First improvement: Add randomness during training. This is called *exploration* - we choose
actions that the neural network would not have otherwise selected on its own. That way, the model
experiments a wider variety of actions and it becomes better at approximating the Q-table.
Exploration contrasts with *exploitation*, which is when we use the action selected by the network
instead of picking a random one. We start by relying mostly on exploration, and as the network
becomes better at selecting the right actions, we gradually use more and more exploitation.


### 2. Reduce the Size of the Image

Second improvement: Downsize the input. Raw game footage looks pretty small for a human,
but it still contains more than 65 thousand pixels for each frame. The neural network needs a lot
of parameters to process them, so we can simply downsize the image. The network now needs fewer
parameters and becomes easier to train.


### 3. Combine Frames

Third improvement: Combine frames. The current model looks at a single frame to decide which
action to perform, so it has a hard time understanding the motion of objects. We can instead give
it multiple frames. That way, it will be able to figure out the direction of projectiles and
collectibles.


### 4. Increase Depth

Fourth improvement: Increase depth. As we've seen, adding hidden layers in the neural network
makes it better at processing data - provided that you don't add too many. I've added two
convolutional layers - that will improve performances without leading to overfitting.


### 5. Experience Replay

Fifth improvement: Experience replay. Right now, the model is trained on consecutive steps, which
are highly correlated. This is not ideal because the network might overfit to these observations.
Instead, we can store the observations in an experience buffer and let the model sample random
observations from the buffer when performing backpropagation and gradient descent. That way, it is
exposed to a varied set of experiences, which improves its ability to generalize.


## Evaluation

Let's recap: we trained a reinforcement learning model to play a game by itself. The model is a deep
Q network that predicts which actions are more likely to result in rewards, and the agent uses the
predictions to score points. We improved our initial model by using exploration, modifying the input
data, increasing depth, and using experience replay. These improvements stabilize the training
process and result in a more efficient model.

The training process is not perfect, though, and in some cases, the network does not learn how to
play well. For instance, it may end up learning to just hide in a corner and spam the fire button.
This is called a local optimum. It's not the best strategy overall, but if the network is not
exposed to a varied set of experiences during its training, and it may learn this strategy at some
point and then stick to it instead of exploring other potentially better solutions. To further
improve the model and avoid local optima, we could, for instance:
- Use a more advanced model, like a Dueling Q-Network or recurrent neural network,
- Optimize the rewards obtained by the agent to prioritize long-term goals and penalize repetitive
  actions, or
- Adjust the hyperparameters of the model to improve training.

There's a lot more to reinforcement learning than what I've laid out in this video, so let me know
if you'd like to see more.

## References

Also, I encourage you to read these papers if you want more information on reinforcement learning.
- [1] "Playing Atari with Deep Reinforcement Learning" covers the architecture of deep Q networks
  and their training process https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf.
- [2] "Deep Learning" goes over the fundamentals of neural networks, including backpropagation and
  gradient descent https://hal.science/hal-04206682/file/Lecun2015.pdf
- [3] "ImageNet Classification with Deep Convolutional Neural Networks" presents a deep learning
  model for image classification and explains convolutional layers.
  https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf

Everything required to play the game and replicate the training is in my Github repository. Training
the model might take some time, especially if you don't have a compatible GPU, but I've also made a
simpler game that takes much less time to train, so you can try it even on less powerful systems.
Don't hesitate to check it out.


# Credits

- [1] Mnih et al (2015). "Playing Atari with Deep Reinforcement Learning" https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf.
- [2] Krizhevsky, Sutskever, and Hinton (2012). "ImageNet Classification with Deep Convolutional Neural Networks" https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf
- [3] Krizhevsky, Sutskever, and Hinton (2015). "Deep Learning" https://hal.science/hal-04206682/file/Lecun2015.pdf
- [4] Householder, Alston S. (1941). "A theory of steady-state activity in nerve-fiber networks: I. Definitions and preliminary lemmas". The Bulletin of Mathematical Biophysics. 3 (2): 63–69. doi:10.1007/BF02478220. ISSN 0007-4985.
- [5] Ramachandran, Prajit; Barret, Zoph; Quoc, V. Le (October 16, 2017). "Searching for Activation Functions". arXiv:1710.05941
