const wrapper_video = document.querySelector (".wrapper-video")
const logo_video = document.querySelector ("#logo-video")
const active_sound = document.querySelector ("#active-sound")
const hero = document.querySelector (".drip-hero-content")

window.onload = async function () {
    // Hide video wrapper when animation is complete
    await sleep (6)
    hero.classList.add ("fade-in")
    await sleep (1)   
    wrapper_video.classList.add ("hide")
    hero.classList.add ("no-logo")
}

window.addEventListener('scroll', function(e) {
    if (is_in_viewport(hero)) {
        hero.classList.add ("fade-in")
    } else {
        hero.classList.remove ("fade-in")
    }
})

function is_in_viewport(element) {
    // Check if element is visible in the page
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -300
    );
}

function sleep(s) {
    // Wait specific seconds
    return new Promise(resolve => setTimeout(resolve, s*1000));
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