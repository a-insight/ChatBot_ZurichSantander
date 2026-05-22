const avatarName = "Zander"

document.querySelectorAll(".avatar-name").forEach(element => {
  element.textContent = avatarName
})

const buttonNome = document.querySelector(".aceitarNome")
const input = document.querySelector(".nomeInput")

buttonNome.addEventListener("click", () => {

  const employeeName = input.value.trim()

  if(employeeName === "") return

  document.querySelectorAll(".employee-name").forEach(element => {
    element.textContent = employeeName
  })

})


const directorName = "Alejandro Widder";
document.querySelectorAll(".director-name").forEach(element => {
  element.textContent = directorName
})

document.querySelectorAll(".director-n").forEach(element => {
  element.textContent = directorName
})


const sec09 = document.querySelector(".sec09")

const ringtone = sec09.querySelector("#ringtone")
const audio1 = sec09.querySelector("#audio1")
const btnAccept = sec09.querySelector(".accept")
const btnReject = sec09.querySelector(".reject")

  ringtone.loop = true;
  ringtone.play().catch(() => {});

  btnAccept.addEventListener("click", () => {
    ringtone.pause();
    ringtone.currentTime = 0;
    audio1.play().catch(() => {});
    audio1.addEventListener("ended", () => {
      textSec7();
    });
  });

  btnReject.addEventListener("click", () => {
    ringtone.pause();
    ringtone.currentTime = 0;
    audio1.pause();
    audio1.currentTime = 0;
    alert("Ligação encerrada.");
  });