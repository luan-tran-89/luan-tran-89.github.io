const FONT_SIZE = {
  "Tiny": "tiny",
  "Small": "small",
  "Medium": "medium",
  "Large": "large",
  "Extra Large": "extra-large",
  "XXL": "xxl"
}

window.onload = function(){
  "use strict";
  // put all of your code here
  const textArea = document.getElementById("text-area");
  const playBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const animation = document.getElementById("animation");
  const fontSize = document.getElementById("fontsize");
  const turbo = document.getElementById("turbo");

  let interval = getIntervalTime();
  let animationType = animation.value;
  let myInterval = null;
  let isPlayed = false;
  let steps = {};

  function displayLayout() {
    const parts = ANIMATIONS[animationType].split("=====\n");
    if (!steps[animationType]) {
      steps[animationType] = 0;
    }
    const currentStep = steps[animationType];
    textArea.value = parts[currentStep];

    if (currentStep >= parts.length - 1) {
      steps[animationType] = 0;
    } else {
      steps[animationType]++;
    }
  }

  function play() {
    myInterval = setInterval(function() {
      displayLayout();
    }, interval);
    isPlayed= true;
    animation.disabled = true;
  }

  function stop() {
    isPlayed= false;
    animation.disabled = false;
    clearInterval(myInterval);
    if (!myInterval) {
      myInterval = null;
    }
  }

  function getIntervalTime() {
    return turbo.checked ? 50 : 250;
  }

  function triggerChange() {
    if (isPlayed) {
      stop();
      play();
    } else {
      displayLayout();
    }
  }

  playBtn.onclick = function () {
    playBtn.disabled = true;
    stopBtn.disabled = false;
    play();
  }; 

  stopBtn.onclick = function () {
    playBtn.disabled = false;
    stopBtn.disabled = true;
    stop();
  };
  
  animation.onchange = function() {
    animationType = animation.value;
    triggerChange();
  }

  fontSize.onchange = function() {
    textArea.className = FONT_SIZE[fontSize.value];
  }

  turbo.onchange = function() {
    interval = getIntervalTime();
    triggerChange();
  }
}