const wrapper_video = document.querySelector (".wrapper-video")
const logo_video = document.querySelector ("#logo-video")
const active_sound = document.querySelector ("#active-sound")
const hero = document.querySelector (".drip-hero-content")

window.onload = async function () {
    // Hide video wrapper when animation is complete
    await sleep (5.5)
    hero.classList.add ("fade-in")
    await sleep (1)   
    wrapper_video.classList.add ("hide")
    hero.classList.add ("no-logo")
}

// Detect screen orientation
if (window.screen.height > window.screen.width) {
    logo_video.classList.add ("vertical")
}

active_sound.addEventListener("click", function (e) {

    // Activate sound in video
    logo_video.muted = !logo_video.muted

    // Update sound button image
    let img_tag = this.querySelector ("img")
    let img_url
    if (logo_video.muted) {
        img_url = "./images/sound-on.svg"
    } else {
        img_url = "./images/sound-off.svg"
    }
    img_tag.setAttribute("src", img_url)
})