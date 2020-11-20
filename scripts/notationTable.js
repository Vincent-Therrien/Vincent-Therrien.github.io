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
    if (key == "regloj_fr"){return regloj_fr;}
    if (key == "regloj_en"){return regloj_en;}
    if (key == "regloj_es"){return regloj_es;}
}

function fillTable(){
    // Change table content
    var table = document.getElementById("notation_table");
    // Remove elements
    var tableRows = table.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    for (var x=rowCount-1; x>0; x--) {
       table.deleteRow(x);
    }
    // Write sections
    var topic1 = getTopic("regloj", 1);
    var topic2 = getTopic("regloj", 2);
    addTableContent(table, topic1, topic2);
}
function addTableContent(table, lang1, lang2){
    for (meaning_id in lang1){
        addRow(table, lang1[meaning_id], lang2[meaning_id]);
    }
}
function addRow(table, lang1, lang2){
    var row = table.insertRow();
    var n_theme = "c";
    var cellc1 = getCell(lang1);
    var cellc2 = getCell(lang2);
    var cell1 = "<td class='" + n_theme +"'> " + cellc1 + "</td>";
    var cell2 = "<td class='" + n_theme +"'> " + cellc2 + "</td>";
    row.innerHTML = cell1 + cell2;
}
function getCell(content){
    cell = "";
    // Title
    cell += content["titolo"];
    cell += "</br> </br>";
    for(explanation in content["klarigo"]){
        cell += content["klarigo"][explanation];
        if (content["klarigo"][explanation].length > 0){
            cell += "</br>";
        }
    }
    cell += "</br><i>"
    for(example in content["ekzemplo"]){
        cell += content["ekzemplo"][example];
        cell += "</br>";
    }
    cell += "</i>";
    return cell;
}
