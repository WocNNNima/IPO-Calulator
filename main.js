document.getElementById("btn").addEventListener("click",btnClicked)

function btnClicked( ){

    let x1 = +document.getElementById("x1-in").value
    let x2 = +document.getElementById("x2-in").value
    let y1 = +document.getElementById("y1-in").value
    let y2 = +document.getElementById("y2-in").value
    let total = Math.sqrt(((x2)-(x1))**2+((y2)-(y1))**2)
    document.getElementById("output").innerHTML = total
} 
document.getElementById("btn2").addEventListener("click",btnClicked1)

function btnClicked1( ){

    let x12 = +document.getElementById("x12-in").value
    let x22 = +document.getElementById("x22-in").value
    let y12 = +document.getElementById("y12-in").value
    let y22 = +document.getElementById("y22-in").value
    let total2 = (((y22)-(y12))/((x22)-(x12)))
    document.getElementById("output2").innerHTML = total2
} 
document.getElementById("btn3").addEventListener("click",btnClicked2)

function btnClicked2( ){

    let a = +document.getElementById("a-in").value
    let b = +document.getElementById("b-in").value
    let c = +document.getElementById("c-in").value
    let s = (((a)+(b)+(c))/2)
    let total3 = Math.sqrt((s)*((s)-(a))*((s)-(b))*((s)-(c)))
    document.getElementById("output3").innerHTML = total3
} 
document.getElementById("btn4").addEventListener("click",btnClicked3)
function btnClicked3( ){

    let a2 = +document.getElementById("a2-in").value
    let b2 = +document.getElementById("b2-in").value
    let h = +document.getElementById("h-in").value
    let total4 = (1/2*((a2)+(b2))*(h))
    document.getElementById("output4").innerHTML = total4
} 
document.getElementById("btn5").addEventListener("click",btnClicked4)
function btnClicked4( ){

    let x13 = +document.getElementById("x13-in").value
    let y13 = +document.getElementById("y13-in").value
    let total5 = (((x13)+(y13))/2)
    document.getElementById("output5").innerHTML = total5
} 
document.getElementById("btn6").addEventListener("click",btnClicked5)
function btnClicked5( ){

    let y23 = +document.getElementById("y23-in").value
    let x23 = +document.getElementById("x23-in").value
    let total6 = (((x23)+(y23))/2)
    document.getElementById("output6").innerHTML = total6
    
} 
document.getElementById("btn7").addEventListener("click",btnClicked6)
function btnClicked6( ){

    let r = +document.getElementById("r-in").value
    let h2 = +document.getElementById("h2-in").value
    let total7 = (3.14159265358979323*(r)**2*(h2))
    document.getElementById("output7").innerHTML = total7
} 
document.getElementById("btn8").addEventListener("click",btnClicked7)
function btnClicked7( ){

    let r = +document.getElementById("r-in").value
    let h2 = +document.getElementById("h2-in").value
    let total8 = (2*3.14159265358979323*(r)**2+2*3.14159265358979323*(r)*(h2))
    document.getElementById("output8").innerHTML = total8
    
} 
document.getElementById("btn9").addEventListener("click",btnClicked8)
function btnClicked8( ){

    let p = +document.getElementById("p-in").value
    let i = +document.getElementById("i-in").value
    let n = +document.getElementById("n-in").value
    let total9 = ((p)*(1+(i))**(n))
    document.getElementById("output9").innerHTML = total9
    
} 
document.getElementById("btn10").addEventListener("click",btnClicked9)
function btnClicked9( ){

    let c = +document.getElementById("c-in").value
    let f = +document.getElementById("f-in").value
    let total10 = (((f)-32)*5/9)
    document.getElementById("output10").innerHTML = total10
} 
document.getElementById("btn11").addEventListener("click",btnClicked10)
function btnClicked10( ){

    let c = +document.getElementById("c-in").value
    let f = +document.getElementById("f-in").value
    let total11 = (((c)*9/5)+32)
    document.getElementById("output11").innerHTML = total11
}
document.getElementById("btn12").addEventListener("click",btnClicked11)
function btnClicked11( ){

    let BA = +document.getElementById("BA-in").value
    let TP = +document.getElementById("TP-in").value
    let AT = ((BA)*(TP))
    let GST = ((BA)*0.05)
    let total12 = ((BA)+(AT)+(GST))
    let output0 = `your amount to tip is ${AT} your GST is ${GST} your Total Bill Amount is ${total12} `
    document.getElementById("output12").innerHTML = output0 
}
document.getElementById("btn13").addEventListener("click",btnClicked12)
function btnClicked12( ){

    let NR = +document.getElementById("NR-in").value
    let NO= +document.getElementById("NO-in").value
    let RP= +document.getElementById("RP-in").value
    let total13 = (((NR)+(NO))*(RP))
    document.getElementById("output13").innerHTML = total13
}
document.getElementById("btn14").addEventListener("click",btnClicked13)
function btnClicked13( ){

    let a3 = +document.getElementById("a3-in").value
    let b3= +document.getElementById("b3-in").value
    let total14 = Math.sqrt((a3)**2+(b3)**2)
    document.getElementById("output14").innerHTML = total14
}