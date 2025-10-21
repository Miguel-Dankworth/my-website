const backT2TopBtn = document.getElementById('scroll2Top');
const firstSection = document.getElementById("header");
const triggerPoint = firstSection.offsetHeight;

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollPosition > triggerPoint) {
        scroll2Top.classList.add("show");
    } else {
        scroll2Top.classList.remove("show");
    }
}


scroll2Top.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}