function getInput() {
    return new Promise((resolve, reject) => {
        let input = parseFloat(prompt("Speed Factor: "));
        // console.log(parseFloat(input));
        // console.log(typeof(parseFloat(input)));
        if (isNaN(input)) {
            alert("Incorrect input for speed");
            reject(new Error("Incorrect input for speed"));
        } else if (input > 3.0) {
            alert("Too high for Speed");
            reject(new Error("Too high for Speed"));
        } else resolve(parseFloat(input));
    });
}

function setSpeed() {
    let t = document.getElementById('extension-slider');
    document.querySelector('video').playbackRate = t.value;
}

function setInputSlider() {
    alert('setinput');
    let t = document.getElementById('extension-slider');
    t.value = this.value;
}

setTimeout(() => {
    console.log("Anshul's Extension Works");
    const target = document.querySelector('video').parentElement;

    let sliderform = document.createElement('div');

    let sliderformclass = document.createAttribute('class');
    sliderformclass.value = 'slidercontainer';
    sliderform.setAttributeNode(sliderformclass);

    let slider = document.createElement('input');

    let slideroninput = document.createAttribute('mousedown');
    slideroninput.value = 'setInputSlider()';
    slider.setAttributeNode(slideroninput);

    let slidertype = document.createAttribute('type');
    slidertype.value = 'range';
    slider.setAttributeNode(slidertype);

    let slidermin = document.createAttribute('min');
    slidermin.value = '0.5';
    slider.setAttributeNode(slidermin);

    let slidermax = document.createAttribute('max');
    slidermax.value = '3.0';
    slider.setAttributeNode(slidermax);

    let sliderdefault = document.createAttribute('value');
    sliderdefault.value = '1.0';
    slider.setAttributeNode(sliderdefault);

    let sliderid = document.createAttribute('id');
    sliderid.value = 'extension-slider';
    slider.setAttributeNode(sliderid);

    let sliderclass = document.createAttribute('class');
    sliderclass.value = 'slider';
    slider.setAttributeNode(sliderclass);


    sliderform.appendChild(slider);



    let speedButton = document.createElement('button');

    let buttonid = document.createAttribute('id');
    buttonid.value = 'click-btn';
    speedButton.setAttributeNode(buttonid);


    let buttonclass = document.createAttribute('class');
    buttonclass.value = 'click-btn-class';
    speedButton.setAttributeNode(buttonclass);

    let buttononclick = document.createAttribute('onclick');
    buttonclass.value = 'setSpeed()';
    speedButton.setAttributeNode(buttononclick);


    sliderform.appendChild(speedButton);

    target.appendChild(sliderform);




}, 2000);