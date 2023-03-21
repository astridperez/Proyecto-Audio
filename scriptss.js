var pregunta1 = document.getElementById("p1");
var pregunta2 = document.getElementById("p2");
var pregunta3 = document.getElementById("p3");

var botonGrabacion = document.getElementById("click_to_record");
var salidaTexto = document.getElementById("convert_text");

var respinicio = ["sí", "claro", "por supuesto"]
var respuno =["pacífico", "Pacífico"]
var respdos = ['1939']
var resptres = ["Italia"];

var preguntaActual = 0;

botonGrabacion.addEventListener('click', function() {
  var speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

    document.getElementById("convert_text").innerHTML = 'Su respuesta fue: ' + "'" + transcript + "'";
    console.log(transcript);

    if(preguntaActual == 0 && respinicio.includes(transcript)){ 
        preguntaActual++;
        document.getElementById("inicio").style.display = 'none';
        pregunta1.style.display = 'inline';

        var msg = new SpeechSynthesisUtterance();
        msg.text = pregunta1.toString();
        msg.lang = 'es';
        window.speechSynthesis.speak(msg);
      }

    if(preguntaActual == 1 && respuno.includes(transcript)){
        preguntaActual++;
        pregunta1.style.display = 'none';
        pregunta2.style.display = 'inline';

        var msg = new SpeechSynthesisUtterance();
        msg.text = pregunta2.toString();
        msg.lang = 'es';
        window.speechSynthesis.speak(msg);
      }

    if(preguntaActual == 2 && respdos.includes(transcript)){
        preguntaActual++;
        pregunta2.style.display = 'none';
        pregunta3.style.display = 'inline';

        var msg = new SpeechSynthesisUtterance();
        msg.text = pregunta3.toString();
        msg.lang = 'es';
        window.speechSynthesis.speak(msg);
      }

    if(preguntaActual == 3 && resptres.includes(transcript)){
        document.getElementById("win").style.display = 'inline';
        pregunta3.style.display = 'none';
        document.getElementById("convert_text").style.display = 'none';
        botonGrabacion.style.display = 'none'
    }

  });
  
  if(speech == true){
    recognition.start();
  }

});
