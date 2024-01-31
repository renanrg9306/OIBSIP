
let resultinput = document.getElementById('tempresult');


function tempConvertida(){
    try{
        let result = 0;
        let temp = parseInt(document.getElementById('degrees').value); 
        let conver = document.getElementById('temptype').value; 

        if (isNaN(temp)){
            throw new Error("El dato ingresado no fue un numeor valido.");

        }
    
        switch(conver){
            case 'celsius':
                result = 5/9*(temp-32);
                resultinput.value = result.toFixed(1);
                break;
    
            case 'farhenheit':
                result = 9/5*temp + 32;
                resultinput.value = result.toFixed(1);
               
                break;
    
            case 'celsiustokelvin':
                result =  temp + 273.15;
                resultinput.value = result.toFixed(1);
                break;
    
            case 'farhenheittokelvin':
                result = (temp - 32)/1.8 + 273.15;
                resultinput.value = result.toFixed(1);
                break;
        
            default:
                console.log('Conversion Invalida');
        }

    }catch(error){
        console.log(`Se produjo el siguiente error ${error}`);
        alert(error);
    }
   
}




var calcularTemp = document.getElementById('btnCalcular');
calcularTemp.addEventListener('click',tempConvertida);

