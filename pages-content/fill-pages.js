function fill_page(content, language){
    document.getElementById("content").innerHTML = content[language];
    if (language == "en"){
        document.getElementById("language-name").innerHTML = "English - en";
        document.getElementById("name-website").innerHTML = "Scientific Glossaries";
        document.getElementById("name-home").innerHTML = "Home";
        document.getElementById("name-glossary").innerHTML = "Glossary";
        document.getElementById("name-notation").innerHTML = "Notations";
        document.getElementById("name-references").innerHTML = "References";
        document.getElementById("name-back-to-top").innerHTML = "Back to Top";
    }
    else if (language == "es"){
        document.getElementById("language-name").innerHTML = "Español - es";
        document.getElementById("name-website").innerHTML = "Glosarios científicos";
        document.getElementById("name-home").innerHTML = "Inicio";
        document.getElementById("name-glossary").innerHTML = "Glosario";
        document.getElementById("name-notation").innerHTML = "Notaciones";
        document.getElementById("name-references").innerHTML = "Referencias";
        document.getElementById("name-back-to-top").innerHTML = "Arriba";
    }
    else if (language == "fr"){
        document.getElementById("language-name").innerHTML = "Français - fr";
        document.getElementById("name-website").innerHTML = "Glossaires scientifiques";
        document.getElementById("name-home").innerHTML = "Accueil";
        document.getElementById("name-glossary").innerHTML = "Glossaire";
        document.getElementById("name-notation").innerHTML = "Notations";
        document.getElementById("name-references").innerHTML = "Références";
        document.getElementById("name-back-to-top").innerHTML = "Haut de la page";
    }
}