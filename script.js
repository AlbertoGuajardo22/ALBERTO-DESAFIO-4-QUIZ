
var time = 25 
var start = false 
var timer = document.getElementById('timer')
var usuarios = []

var currentQuestion = [
    {pregunta:"¿Quien es el ultimo campeon de la liga Mx", respuesta1: 'Atlas', respuesta2:'America', respuesta3: 'Tigres', respuesta4: 'Leon'},
    {pregunta:"¿En que mundial fue lo de la mano de dios?", respuesta1: 'Africa 2010', respuesta2:'Rusia 2018', respuesta3: 'USA 1994', respuesta4: 'Mexico 1986'},
    {pregunta:"¿Quien es el maximo goleador del Real Madrid?", respuesta1: 'Leonel Messi', respuesta2:'Karim Benzema', respuesta3: 'Hugo Sanchez', respuesta4: 'Cristiano Ronaldo'},
    {pregunta:"¿Quien es el ultimo campeon de la NBA?", respuesta1: 'Lakers', respuesta2:'Celtics', respuesta3: 'Warriors', respuesta4: 'Rockets'}
]
var question = 0
timer.innerHTML = 'Time :' + time 
document.getElementById('start').addEventListener('click', Start)


SetAnswers()

document.getElementById("currentQuestion").innerHTML = currentQuestion[question].pregunta
function Start() { 
    document.getElementById('start-quiz').className="row"
    document.getElementById('start').className="hidden"
    if(start === true) return 
    start = true 
    setInterval(()=> {
        if(time === 0 || start === false) return
        document.getElementById('timer')
        time--
        timer.innerHTML = 'Time :' + time 
    }, 1000)
}


function Answer(respuesta){
    if(question === 0 ) {       
      
        if(respuesta === 0) {
            SetTime(10)
        }else{
            SetTime(-10)
            
        }
    }
    
    else if(question === 1 ) {       
         if(respuesta === 3) {
            SetTime(10)
         }else{
            SetTime(-10)
        }
    }
     
    else if(question === 2 ) {       
        if(respuesta === 3) {
            SetTime(10)
        }else{
            SetTime(-10)
        }
    }
     
     else if(question === 3 ) {       
        if(respuesta === 2) {
            SetTime(10)
        }else{
            SetTime(-10)
        }
    }
    
}

function SetTime(added){
    
    time = time + added
    
    if(time <= 0) {
        SetDefault()
    }
    if(added > 0) {
        if((question + 1) < currentQuestion.length){
            question += 1
            document.getElementById("currentQuestion").innerHTML = currentQuestion[question].pregunta
            SetAnswers()
            
        } else{
            document.getElementById('complete').className=""
            document.getElementById('main-quiz').className="hidden"
            document.getElementById('puntos').value = time
        }
    }
    document.getElementById('timer')
    timer.innerHTML = 'Time :' + time 
}

function SetAnswers(){
    document.getElementById('button-1').innerHTML = currentQuestion[question].respuesta1
    document.getElementById('button-2').innerHTML = currentQuestion[question].respuesta2
    document.getElementById('button-3').innerHTML = currentQuestion[question].respuesta3
    document.getElementById('button-4').innerHTML = currentQuestion[question].respuesta4
}

function SetDefault(){
    time = 25 
    start = false 
    timer.innerHTML = 'Time :' + time 
    question = 0
    document.getElementById("currentQuestion").innerHTML = currentQuestion[question].pregunta
    document.getElementById('start-quiz').className="row hidden"
    document.getElementById('start').className="btn btn-primary"
    document.getElementById('complete').className="hidden"
    document.getElementById('main-quiz').className=""
    SetAnswers()
}
document.getElementById('formulario').addEventListener('submit', Save)
function Save(e){
    var usuario = {
        iniciales : e.target.iniciales.value,
        puntos: e.target.puntos.value
    }
    usuarios.push(usuario)
    SetDefault()
    e.preventDefault()
}

function ViewScores(){
    var scores = ""
    if(usuarios.length<=0){
        alert("No se tienen registrados puntos")
        return
    }
    usuarios.forEach(element=> {
        scores += "Iniciales: "+ element.iniciales + " Puntos: " + element.puntos + "\n"
    })
    alert(scores)
}