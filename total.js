const tickets= 200;

function mostrar(){
    let cantidad=document.getElementById("cantidad").value;
    let categoria=document.getElementById("categoria").value;
    let valor
    if(cantidad<0){ 
        window.alert("Valor fuera de rango...");
        document.getElementById("cantidad").value="";
        
     } 
    else{    
    if(categoria==1){
        valor=(tickets-tickets*0.80)*cantidad;
       } if (categoria==2){
        valor=(tickets-tickets*0.50)*cantidad;

    } else {valor=(tickets-tickets*0.15)*cantidad;}
let valor1="Total a Pagar $: " + valor
document.getElementById("pagar").innerHTML=valor1;
}
}

//console.log("cantidad",cantidad)
//console.log("categoria",categoria)
//console.log("total", valor)
