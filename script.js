// Referencias a los elementos del DOM
const cordWrapper = document.getElementById("cordWrapper");
const ribbon = document.getElementById("ribbon");
const mainText = document.getElementById("mainText");
const cardVideo = document.getElementById("cardVideo");
const videoSource = document.getElementById("videoSource");
const siButton = document.getElementById("siButton");
const buttonContainer = document.getElementById("buttonContainer");
const bgMusic = document.getElementById("bgMusic");

// Animación GSAP al cargar la página (desvanece las cintas)
gsap.to([cordWrapper, ribbon], {
  opacity: 0,
  duration: 0.5,
  onComplete: () => {
    cordWrapper.style.display = "none";
    ribbon.style.display = "none";
  }
});

// Función que se ejecuta al presionar "Sí"
function onYesClick() {
  // 1. Inicia la reproducción de la música
  bgMusic.play();

  // 2. Cambia el texto del título
  mainText.textContent = "¡aqui tienes MUCHOS abachiooooo mi corazoncito!";

  // 3. Cambia el video al del gato mandando un beso
  videoSource.src = "nico.mp4";
  cardVideo.load();
  

  // 4. Quita el botón y muestra la confirmación "¡Sí!"

}