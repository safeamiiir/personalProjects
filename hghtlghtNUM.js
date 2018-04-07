/**
 * Created by amir on 4/5/18.
 */

var numKnown = 0;

function tableCreator() {
    let rndom = 0;
    let table = document.getElementById("myTable");
    for(let i = 0; i < 10; i++){
        let row  = table.insertRow(i);
        for(let j = 9; j >= 0; j--){
            rndom = Math.floor(Math.random() * 10) + 1;
            let cell = row.insertCell(0);
            cell.innerHTML =  rndom;
        }
    }
}
tableCreator();

function sameChecker() {
    let table = document.getElementById("myTable");
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            for(let k = 0; k < 10; k++){
                for(let l = 0; l < 10; l++){
                    if( table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                        && table.rows[i].cells[j].innerHTML == 1 ){
                        numKnown = 1;
                        hightLighter(i,j);
                    }
                    if( table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                        && table.rows[i].cells[j].innerHTML == 2 ){
                        numKnown = 2;
                        hightLighter(i,j);
                    }
                    if( table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                        && table.rows[i].cells[j].innerHTML == 3 ){
                        numKnown = 3;
                        hightLighter(i,j);
                    }
                    if( table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                        && table.rows[i].cells[j].innerHTML == 4 ){
                        numKnown = 4;
                        hightLighter(i,j);
                    }
                    if( table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                        && table.rows[i].cells[j].innerHTML == 5 ){
                        numKnown = 5;
                        hightLighter(i,j);
                    }
                    if( table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                        && table.rows[i].cells[j].innerHTML == 6 ){
                        numKnown = 6;
                        hightLighter(i,j);
                    }
                    if( table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                        && table.rows[i].cells[j].innerHTML == 7 ){
                        numKnown = 7;
                        hightLighter(i,j);
                    }
                    if( table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                        && table.rows[i].cells[j].innerHTML == 8 ){
                        numKnown = 8;
                        hightLighter(i,j);
                    }
                    if( table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                        && table.rows[i].cells[j].innerHTML == 9 ){
                        numKnown = 9;
                        hightLighter(i,j);
                    }
                    if( table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                        && table.rows[i].cells[j].innerHTML == 10 ){
                        numKnown = 10;
                        hightLighter(i,j);
                    }
                }
            }
        }
    }
}


function hightLighter(i,j) {
    let table = document.getElementById("myTable");

    table.rows[i].cells[j].addEventListener("mouseenter" ,function() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                for (let k = 0; k < 10; k++) {
                    for (let l = 0; l < 10; l++) {
                        if (table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                            && table.rows[i].cells[j].innerHTML == numKnown) {
                            table.rows[i].cells[j].style.backgroundColor = "darkblue";
                        }
                    }
                }
            }
        }

    });

    table.rows[i].cells[j].addEventListener("mouseleave" ,function() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                for (let k = 0; k < 10; k++) {
                    for (let l = 0; l < 10; l++) {
                        if (table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                            && table.rows[i].cells[j].innerHTML == numKnown) {
                            table.rows[i].cells[j].style.backgroundColor = "deepskyblue";
                        }
                    }
                }
            }
        }

    });
}

sameChecker();