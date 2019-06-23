let speedSlider;
let videoTabs;
let speedDisplay;
let speeding = false;
let target;

let hash = [];


function speedUp(event) {
    if (speeding) {

        let speedUpto = speedSlider.value;
        console.log(speedUpto);

        for (var video of videoTabs) {
            video.playbackRate = speedUpto;
        }

        speedDisplay.innerHTML = speedUpto;
    }

}


function scriptEntry() {

    console.log('script entered......');

    videoTabs = document.getElementsByTagName('video');
    target = document.querySelector('video').parentElement;
    console.log(target);
    if (target.childNodes[0].classList[0] === "slidercontainer") {
        return;
    }
    // added download option for each video on page

    for (var video of videoTabs) {
        video.setAttribute('controlslist', 'download');
    }


    let sliderform = document.createElement('div');
    sliderform.innerHTML =
        ` 
            <h5>Speed Factor x<span id="speedDisplay">1</span> (Drag to change)</h5>
            <input type="range" min="0.25" max="3.0" value="1.0" step="0.25" id="speedSlider" class="slider"/>    
        `;
    let sliderformclass = document.createAttribute('class');
    sliderformclass.value = 'slidercontainer';
    sliderform.setAttributeNode(sliderformclass);

    target.insertBefore(sliderform, target.firstChild);
    speedDisplay = document.getElementById('speedDisplay');
    speedSlider = document.getElementById('speedSlider');

    speedSlider.addEventListener('mousedown', function(event) {
        speeding = true;
        speedUp(event);
    });

    speedSlider.addEventListener('mousemove', function(event) {
        speedUp(event);
    });

    speedSlider.addEventListener('mouseup', function() {
        setTimeout(() => {
            speeding = false;
        }, 100);
        // speedDisplay.innerHTML = speedUpto;
    });
}


function unrun() {
    console.log('unrun runs........');
    const navs = document.querySelectorAll('.classroom-nav a');
    console.log(navs);
    for (var nav of navs) {
        console.log(nav);
        nav.addEventListener('click', function() {
            scriptEntry();

        });
    }

}



function waitingForAngular() {

    console.log("Anshul's Extension Works");
    unrun();

}

setTimeout(waitingForAngular, 2000);