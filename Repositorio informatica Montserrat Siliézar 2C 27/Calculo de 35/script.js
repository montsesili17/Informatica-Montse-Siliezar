function promedio(){
    let promedio1 = +document.querySelector('#note1').value; 
    let promedio2 = +document.querySelector('#note2').value;
    let promedio3 = +document.querySelector('#note3').value;

    let operacion1 = (promedio1*0.15); 
    let operacion2 = (promedio2*0.10);
    let operacion3 = (promedio3*0.10); 

    let final = (operacion1 + operacion2 + operacion3); 

    document.querySelector('#total').textContent= 'Tu 35% es ' + final; 
   
    
    
}