// Verificar el primer acertijo
function checkAnswer1() {
    const answer1 = document.getElementById("answer1").value.toLowerCase();
    if (answer1 === "blanco") {
      document.getElementById("gift1").classList.remove("hidden");
      document.getElementById("riddle1").classList.add("hidden");
    } else {
      alert("Respuesta incorrecta, ¡intenta de nuevo!");
    }
  }
  
  // Mostrar el segundo acertijo
  function showRiddle2() {
    document.getElementById("riddle2").classList.remove("hidden");
    document.getElementById("gift1").classList.add("hidden");
  }
  
  // Verificar el segundo acertijo
  function checkAnswer2() {
    const answer2 = document.getElementById("answer2").value.toLowerCase();
    if (answer2.includes("abuelo") && answer2.includes("padre") && answer2.includes("hijo")) {
      document.getElementById("gift2").classList.remove("hidden");
      document.getElementById("riddle2").classList.add("hidden");
      document.getElementById("finalMessage").classList.remove("hidden");
    } else {
      alert("Respuesta incorrecta, ¡intenta de nuevo!");
    }
    
  }
  // Mostrar el segundo regalo

  