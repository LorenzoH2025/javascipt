
// <h1>i love dogs</h1> 

document.getElementById("demo09").innerHTML = 23;  //"Lorenzo" + " "  + "houssier";
document.getElementById("demo09").innerHTML = 23;  //"Lorenzo" + " "  + "houssier";
document.getElementById("demo09").innerHTML = 555 + 6.142*(6-8+9/8*2);


function openPageWithMathResult(){
    document.write (555 + 6.142*(6-8^2+7.3/76*8))
}

function alertMessage() {
     console.log('Appel de la fonction caca()')
     alert("Coucou")
   
}

function modifyParagraphDemo(id,text) {
let x, y, z;  // Statement 1
x = -8;        // Statement 2
y = 6 + 9;        // Statement 3
z = x * y;    // Statement 4

document.getElementById(id).innerHTML = text;
//"The value of z is " + z + ".";  
}

function alertResult() {
    alert(1+1)
}

function pythagore(  A,  B) {
    console.log("appel de pythagore")
    var a_int = parseInt(A,10);
    var b_int = parseInt(B,10);
    const result1 = Math.sqrt((a_int * a_int) + (b_int * b_int))
    alert(result1);
}

function PairOuImpaire (number) {
    console.log("appel de PairOuImpaire")
    let result = number % 2
    if (result == 1 ){
     alert('IMPAIRE')
    } 
    else {
        alert('PAIRE')
    }
}