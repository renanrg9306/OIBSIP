var temp = document.getElementById('degree');

var conver = document.getElementById('temptype');
console.log(conver.value);


function tempConvertida(conversion,temperatura){
    var temp = 0;

    switch(conversion){
        case 'celsius':
            temp = 5/9(temperatura-32);
            console.log(temp);
            break;

        case 'farhenheit':
            break;

        case 'celsiustokelvin':
            break;

        case 'farhenheittokelvin':
            break;
    
        default:
            console.log('Conversion Invalida');
    }
}


var calcularTemp = document.getElementById('btnCalcular');
calcularTemp.addEventListener('click',tempConvertida(conver,temp));

