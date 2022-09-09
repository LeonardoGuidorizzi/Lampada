const turnON = document.getElementById ('turnOn')
const turnOnOff = document.getElementById ('turnOnOff') 
const turnOff = document.getElementById ('turnOff')
const lamp = document.getElementById ('lamp')

function IsLampbroken(){
    // essa fucao vai retornar booleano // vdd/falso 1/0
    return lamp.src.indexOf('quebrada') >-1
}

function lampOnOff (){
   
}

function lampOn () {
    if(!IsLampbroken()){
            lamp.src = './img/ligada.jpg'
        }
    }

function lampOff(){
    if(!IsLampbroken()){
            lamp.src = './img/desligada.jpg'
        }
    }

function lampBroken(){

    lamp.src = './img/quebrada.jpg'
}
turnOnOff.addEventListener('click',lampOnOff)
turnON.addEventListener ('click', lampOn)
turnOff.addEventListener ('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)