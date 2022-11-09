//variables
let body = document.querySelector('body')

let trabajo = document.getElementById('trabajo')
let descanso = document.getElementById('descanso')

let tiempoTrabajo = 25
let tiempoDescanso = 5

let esDescanso = false

let segundos = "00"

let negro = "100"
let morado = "100"


//cuando la pagina cargue StartSite

window.onload = () => {
    document.getElementById('minutos').innerHTML = tiempoTrabajo;
    document.getElementById('segundos').innerHTML = segundos;
}

function comenzar() {
    document.getElementById('comenzar').style.width = "0"

    segundos = 59

    let minutosTrabajo = tiempoTrabajo -1;
    let breakMinutos = tiempoDescanso -1;

    let tiempo = () => {
        document.getElementById('minutos').innerHTML = minutosTrabajo;
        document.getElementById('segundos').innerHTML = segundos;

        segundos -= 1; //segundos -1
        if (segundos === 0){
            segundos = 59
            minutosTrabajo -= 1; //minutostrabajo -1
            if(minutosTrabajo === -1) {
                if(esDescanso == false){
                    esDescanso = true
                    minutosTrabajo = breakMinutos  

                    trabajo.classList.add('luego')
                    trabajo.classList.remove('ahora')
                    trabajo.classList.add('ahora')
                    trabajo.classList.remove('luego')
                    } else{
                        esDescanso = false
                        minutosTrabajo = tiempoTrabajo -1

                        trabajo.classList.remove('luego')
                        trabajo.classList.add('ahora')
                        trabajo.classList.remove('ahora')
                        trabajo.classList.add('luego')
                    }
            }
        }

    }
    setInterval(tiempo, 1000) //1000= 1s

}