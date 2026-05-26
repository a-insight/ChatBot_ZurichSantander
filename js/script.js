const avatarName = "Zander"

document.querySelectorAll(".avatar-name").forEach(element => {
  element.textContent = avatarName
})

const directorName = "Alejandro Widder"

document.querySelectorAll(".director-name").forEach(element => {
  element.textContent = directorName
})

document.querySelectorAll(".director-n").forEach(element => {
  element.textContent = directorName
})

function showSection(className) {

  const section = document.querySelector(`.${className}`)

  section.classList.add("show")

  setTimeout(() => {

    section.scrollIntoView({
      behavior: "smooth",
      block: "end"
    })

  }, 100)

}

const sec09 = document.querySelector(".sec09")

const ringtone = sec09.querySelector("#ringtone")
const audio1 = sec09.querySelector("#audio1")

document.addEventListener("click", unlockAudio, { once: true })

function unlockAudio() {

  ringtone.muted = true

  ringtone.play()
    .then(() => {
      ringtone.pause()
      ringtone.currentTime = 0
      ringtone.muted = false
    })
    .catch(() => {})

  audio1.muted = true

  audio1.play()
    .then(() => {
      audio1.pause()
      audio1.currentTime = 0
      audio1.muted = false
    })
    .catch(() => {})

}

setTimeout(() => {
  showSection("sec01")
}, 1000)

setTimeout(() => {
  showSection("sec02")
}, 3000)

setTimeout(() => {
  showSection("sec03")
}, 5000)

setTimeout(() => {
  showSection("sec04")
}, 8500)

const btnSec04 = document.querySelector(".sec04 .aceitar")

btnSec04.addEventListener("click", () => {

  showSection("sec05")

  setTimeout(() => {
    showSection("sec06")
  }, 2500)

})

const buttonNome = document.querySelector(".aceitarNome")
const input = document.querySelector(".nomeInput")

buttonNome.addEventListener("click", () => {

  const employeeName = input.value.trim()

  if (employeeName === "") return

  document.querySelectorAll(".employee-name").forEach(element => {
    element.textContent = employeeName
  })

  showSection("sec07")

  setTimeout(() => {

    showSection("sec08")

    setTimeout(() => {

      showSection("sec09")

      ringtone.loop = true

      ringtone.play().catch(() => {
        console.log("Autoplay bloqueado")
      })

    }, 3500)

  }, 3500)

})

const btnAccept = sec09.querySelector(".accept")
const btnReject = sec09.querySelector(".reject")

btnAccept.addEventListener("click", () => {

  ringtone.pause()
  ringtone.currentTime = 0

  audio1.play()

  btnAccept.disabled = true
  btnReject.disabled = true

})

btnReject.addEventListener("click", () => {

  ringtone.pause()
  ringtone.currentTime = 0

  audio1.pause()
  audio1.currentTime = 0

  alert("Ligação encerrada.")

})

audio1.addEventListener("ended", () => {

  showSection("sec10")

  setTimeout(() => {
    showSection("sec11")
  }, 3500)

  setTimeout(() => {
    showSection("sec12")
  }, 5500)

  setTimeout(() => {
    showSection("sec13")
  }, 8500)

  setTimeout(() => {
    showSection("sec14")
  }, 12000)

  setTimeout(() => {

    showSection("sec15")

    setTimeout(() => {
      showSection("sec16")
    }, 3000)

  }, 17000)

})

const btnSec16 = document.querySelector(".sec16 .aceitar")

btnSec16.addEventListener("click", () => {

  showSection("sec17")

  setTimeout(() => {

    showSection("sec18")

    setTimeout(() => {
      showSection("sec19")
    }, 4000)

    setTimeout(() => {
      showSection("sec20")
    }, 7000)

  }, 163000)

})

const btnSec20 = document.querySelector(".sec20 .aceitar")

btnSec20.addEventListener("click", () => {

  const link = document.createElement("a")

  link.href = "./img/guia.pdf"
  link.download = "guia.pdf"

  document.body.appendChild(link)

  link.click()

  document.body.removeChild(link)

  setTimeout(() => {
    showSection("sec21")
  }, 3000)

  setTimeout(() => {
    showSection("sec22")
  }, 6500)

  setTimeout(() => {
    showSection("sec23")
  }, 10000)

  setTimeout(() => {
    showSection("sec24")
  }, 14000)

})