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

function set_table_title(language){
    // Change table title
    var title = document.getElementById("tableTitle");
    var langTitle = eo_to_lang(topic, language);
    title.innerHTML = langTitle;
    // Update the sidebar
    if (language == "en"){
        document.getElementById("summary-name").innerHTML = "Content";
        document.getElementById("table-title-content").innerHTML = "Terms used in ";
        document.getElementById("st1").innerHTML = "mathematics";
        document.getElementById("st2").innerHTML = "computer science";
        document.getElementById("st3").innerHTML = "electricity";
    }
    else if (language == "es"){
        document.getElementById("summary-name").innerHTML = "Índice";
        document.getElementById("table-title-content").innerHTML = "Términos usados en ";
        document.getElementById("st1").innerHTML = "matemáticas";
        document.getElementById("st2").innerHTML = "informática";
        document.getElementById("st3").innerHTML = "electricidad";
    }
    else if (language == "fr"){
        document.getElementById("summary-name").innerHTML = "Sommaire";
        document.getElementById("table-title-content").innerHTML = "Termes utilisés en ";
        document.getElementById("st1").innerHTML = "mathématiques";
        document.getElementById("st2").innerHTML = "informatique";
        document.getElementById("st3").innerHTML = "électricité";
    }
    fillTable(userLang);
    selectSectionInView();
}