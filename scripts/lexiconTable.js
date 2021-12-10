function unrollTs(){
    var menu = document.getElementById("tsStyle");
    menu.style = "display: block;";
}
function rollTs(){
    var menu = document.getElementById("tsStyle");
    menu.style = "display: none;";
}

function getLanguage(number){
    var cell;
    if (number == 1){
        cell = document.getElementById("L1");
    }
    if (number == 2){
        cell = document.getElementById("L2");
    }
    var cellStr = cell.innerHTML;
    return cellStr.substring(cellStr.length-3, cellStr.length);
}
function getTopic(topicName, columnNumber){
    var key = topicName + "_" + getLanguage(columnNumber);
    key = key.trim();
    if (key == "matematiko_fr"){return matematiko_fr;}
    if (key == "matematiko_en"){return matematiko_en;}
    if (key == "matematiko_es"){return matematiko_es;}
    if (key == "komputiko_fr"){return komputiko_fr;}
    if (key == "komputiko_en"){return komputiko_en;}
    if (key == "komputiko_es"){return komputiko_es;}
    if (key == "elektro_fr"){return elektro_fr;}
    if (key == "elektro_en"){return elektro_en;}
    if (key == "elektro_es"){return elektro_es;}
}
function setTopic(topicName){
    topic = topicName;
}

function fillTable(userLang){
    var topic1 = getTopic(topic, 1);
    var topic2 = getTopic(topic, 2);
    // Change table title
    var title = document.getElementById("tableTitle");
    var langTitle = eo_to_lang(topic, userLang);
    title.innerHTML = langTitle;
    // Update the sidebar
    var sidebarTitle = document.getElementById('s-b-title');
    sidebarTitle.innerHTML = langTitle;
    var sidebarSections = document.getElementById('s-b-sections');
    sidebarSections.innerHTML = "<ul id='sections'></ul>";
    // Change table content
    var table = document.getElementById("lexicon_table");
    // Remove elements
    var tableRows = table.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    for (var x=rowCount-1; x>0; x--) {
       table.deleteRow(x);
    }
    // Write sections
    var use_theme_1 = true;
    for (var category in topic1){
        if (category != "meta"){
            addTableSection(table, category,
                topic1, topic2, use_theme_1, userLang);
            use_theme_1 = !use_theme_1;
        }
    }
    var t = document.getElementById('lexicon_table');
}

function addTableSection(table, category, lang1, lang2, theme, userLang){
    // Title
    var language1 = lang1["meta"].slice(-2);
    var language2 = lang2["meta"].slice(-2);
    var l_1_title = eo_to_lang(category, language1)
    var l_2_title = eo_to_lang(category, language2)
    addSectionTitle(table, l_1_title, l_2_title, eo_to_lang(category, userLang));
    // Section content
    addSectionContent(table, lang1[category], lang2[category], theme);
}

// Add a section title
function eo_to_lang(term, lang){
    return kategorioj[term][lang];
}
function addSectionTitle(table, title1, title2, metaLang){
    var subtitle = table.insertRow();
    subtitle.innerHTML =
        "<td class='s' style='text-align: center' id='" + title1 + "'>"
        + title1 + "</td><td class='s' style='text-align: center'>" + title2 + "</td>";
    // Update sidebar
    var ul = document.getElementById("sections");
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.innerHTML = metaLang;
    a.href = "#" + title1;
    a.id = title1 + "-a";
    li.appendChild(a);
    ul.appendChild(li);
}

// Add section content
function addSectionContent(table, lang1, lang2, theme){
    for (meaning_id in lang1){
        addRow(table, lang1[meaning_id], lang2[meaning_id], theme);
    }
}
function addRow(table, lang1, lang2, theme){
    var row = table.insertRow();
    var n_theme = "c";
    if (theme == false){n_theme = "c1";}
    var cellc1;
    if (getLanguage(1).trim() == "fr"){cellc1 = getFrCell(lang1);}
    if (getLanguage(1).trim() == "en"){cellc1 = getEnCell(lang1);}
    if (getLanguage(1).trim() == "es"){cellc1 = getEsCell(lang1);}
    var cellc2;
    if (getLanguage(2).trim() == "fr"){cellc2 = getFrCell(lang2);}
    if (getLanguage(2).trim() == "en"){cellc2 = getEnCell(lang2);}
    if (getLanguage(2).trim() == "es"){cellc2 = getEsCell(lang2);}
    var cell1 = "<td class='" + n_theme +"'> " + cellc1 + "</td>";
    var cell2 = "<td class='" + n_theme +"'> " + cellc2 + "</td>";
    row.innerHTML = cell1 + cell2;
}
function getFrCell(term_list){
    words = "";
    // Words (on or several)
    for (term in term_list){
        var attributes = term_list[term];
        words += attributes["termino"];
        if (attributes["klaso"] != ""){
            words += " (" + attributes["klaso"];
            if (attributes["genero"] != ""){
                words += ", " + attributes["genero"].toUpperCase();
            }
            words += ")";
        }
        if (attributes["genero"] != "" && attributes["klaso"] == ""){
            words += " (" + attributes["genero"].toUpperCase() + ")";
        }
        words += "<br/>";
    }
    // Abbreviation & symbol
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["mallongigo"] != ""){
            words += "abréviation : " + attributes["mallongigo"];
            words += "<br/>";
        }
    }
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["simbolo"] != ""){
            words += "symbole : " + attributes["simbolo"];
            words += "<br/>";
        }
    }
    // Explanation (only one)
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["ekspliko"] != ""){
            words += "<br/>";
            words += attributes["ekspliko"];
            words += "<br/>";
        }
    }
    // Example(s)
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["ekzemplo"] != ""){
            words += "<br/> <i>";
            words += attributes["ekzemplo"] + "</i>";
        }
    }
    return words;
}
function getEsCell(term_list){
    words = "";
    // Words (on or several)
    for (term in term_list){
        var attributes = term_list[term];
        words += attributes["termino"];
        if (attributes["klaso"] != ""){
            words += " (" + attributes["klaso"];
            if (attributes["genero"] != ""){
                words += ", " + attributes["genero"].toUpperCase();
            }
            words += ")";
        }
        if (attributes["genero"] != "" && attributes["klaso"] == ""){
            words += " (" + attributes["genero"].toUpperCase() + ")";
        }
        words += "<br/>";
    }
    // Abbreviation & symbol
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["mallongigo"] != ""){
            words += "abreviatura : " + attributes["mallongigo"];
            words += "<br/>";
        }
    }
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["simbolo"] != ""){
            words += "símbolo : " + attributes["simbolo"];
            words += "<br/>";
        }
    }
    // Explanation (only one)
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["ekspliko"] != ""){
            words += "<br/>";
            words += attributes["ekspliko"];
            words += "<br/>";
        }
    }
    // Example(s)
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["ekzemplo"] != ""){
            words += "<br/> <i>";
            words += attributes["ekzemplo"] + "</i>";
        }
    }
    return words;
}
function getEnCell(term_list){
    words = "";
    // word(s)
    for (term in term_list){
        var attributes = term_list[term];
        words += attributes["termino"];
        if (attributes["klaso"] != ""){
            words += " (" + attributes["klaso"] + ")";
        }
        words += "<br/>";
    }
    // Abbreviation & symbol
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["mallongigo"] != ""){
            words += "abbreviation : " + attributes["mallongigo"];
            words += "<br/>";
        }
    }
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["simbolo"] != ""){
            words += "symbol : " + attributes["simbolo"];
            words += "<br/>";
        }
    }
    // Explanation (only one)
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["ekspliko"] != ""){
            words += "<br/>";
            words += attributes["ekspliko"];
            words += "<br/>";
        }
    }
    // Example(s)
    for (term in term_list){
        var attributes = term_list[term];
        if (attributes["ekzemplo"] != ""){
            words += "<br/> <i>";
            words += attributes["ekzemplo"] + "</i>";
        }
    }
    return words;
}
