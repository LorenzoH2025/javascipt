
// <h1>i love dogs</h1> 

document.getElementById("demo09").innerHTML = 23;  //"Lorenzo" + " "  + "houssier";
document.getElementById("demo09").innerHTML = 23;  //"Lorenzo" + " "  + "houssier";
document.getElementById("demo09").innerHTML = 555 + 6.142*(6-8+9/8*2);

function caca() {
     console.log('Appel de la fonction caca()')
     alert("Coucou")
   
}
function bob() {
    alert(1+1)
}

function pythagore(  A,  B) {
    console.log("appel de pythagore")
    var a_int = parseInt(A,10);
    var b_int = parseInt(B,10);
    const result1 = Math.sqrt((a_int * a_int) + (b_int * b_int))
    alert(result1);
}

var x2 = 9;
var y2 = 3;
var z2 = x2 + y2;


let x3 = 12;
let y3 = -4;
let z3 = x3 +y3;

x1 = 3+2;
y1 = 999;
z1 = x1 + y1;


// This function will modify the paragraph named "paragraph_resultat" with the result of a sum
function modify_paragraph_with_sum() {
    const a4 = 13;
    const b4 = 8-2;
    const somme = a4+b4
    console.log("appel de math")
let resultat = somme;
document.getElementById("paragraph_resulat").innerHTML = resultat;

}
