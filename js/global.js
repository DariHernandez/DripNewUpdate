function is_in_viewport(element, is_hero=true) {
    // Check if element is visible in the page
    const rect = element.getBoundingClientRect();

    if (is_hero) {
        return (
            rect.top >= -300
        )
    } else {
        return (
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

function sleep(s) {
    // Wait specific seconds
    return new Promise(resolve => setTimeout(resolve, s*1000));
}