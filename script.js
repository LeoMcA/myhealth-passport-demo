document.querySelector(".commands button").addEventListener("click", () => {
  document.querySelector(".phone .screen").contentWindow.postMessage("hi", "*")
})

window.addEventListener("message", e => {
  document.querySelector(".commands button").innerText += " " + e.data
})
