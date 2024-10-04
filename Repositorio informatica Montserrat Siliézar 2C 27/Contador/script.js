function contar(){
    let segundos= +document.querySelector('#segundos').value; 
    setTimeout(finalizar, segundos * 1000); 

}

function finalizar(){
    document.querySelector('#salida').textContent = 'ON'; 
    let audio = document.querySelector('#alerta');
    audio.play(); 
    
}

function reset(){
    location.reload(); 
}