let speedSlider;

let videoTabs;

let speeding = false;

function speedUp(event) {
    if (speeding) {

        let speedUpto = speedSlider.value;
        // console.log(speedUpto);
        for (video of videoTabs) {
            video.playbackRate = speedUpto;
        }
    }

}

function waitingForAngular() {


    console.log("Anshul's Extension Works");
    const target = document.querySelector('video').parentElement;
    videoTabs = document.getElementsByTagName('video');
    // added download option for each video on page
    for (video of videoTabs) {
        video.setAttribute('controlslist', 'download');
    }


    let sliderform = document.createElement('div');
    sliderform.innerHTML =
        `
            <input type="range" min="0.25" max="3.0" value="1.0" step="0.25" id="speedSlider" class="slider"/>    
        `;
    let sliderformclass = document.createAttribute('class');
    sliderformclass.value = 'slidercontainer';
    sliderform.setAttributeNode(sliderformclass);

    target.insertBefore(sliderform, target.firstChild);

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
    });


}

setTimeout(waitingForAngular, 2000);