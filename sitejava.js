let red = false
function dostuff() {
    const highlights = document.getElementsByClassName("highlight-test");
    if (red){   
        red = false
        for (i = 0; i < highlights.length; i++) { 
        highlights[i].style.color = "#405fbe" 
        }
    } else {
        red = true;
        for (i = 0; i < highlights.length; i++) { /*for loop: initial; condition ; iterate*/
        highlights[i].style.color = "#bb1484" /*because getElements family only works once otherwise! So it must be looped*/
        }
    }
}
/*JS is hard man*/
