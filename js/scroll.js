const shoes_elems = document.querySelectorAll ("ul.drip-timeline li div.img")

window.addEventListener('scroll', function(e) {

    // animate "hero" from "video.js"
    if (is_in_viewport(hero)) {
        hero.classList.add ("fade-in")
    } else {
        hero.classList.remove ("fade-in")
    }

    // animate "shoes_elems" from
    for (const shoes_elem of shoes_elems) {
        if (is_in_viewport (shoes_elem, is_hero=false)) {
            shoes_elem.classList.add ("rotate")
        } else {
            shoes_elem.classList.remove ("rotate")
        }
    }
    


})