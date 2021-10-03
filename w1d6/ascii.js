window.onload = function () {
    "use strict";
  
    let defaultValue = "";
    let animationMoves = ANIMATIONS["Blank"];
    let idx;
    let running = false;
    let delayTime = 250;
    const slowTime = 250;
    const turboTime = 50;
  
    const textArea = document.getElementById("text-area");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const animation = document.getElementById("animation");
    const sizes = document.getElementById("fontsize");
    const turbo = document.getElementById("turbo");
  
    startBtn.onclick = function () {
      defaultValue = textArea.value;
      stopBtn.disabled = false;
      startBtn.disabled = true;
      animation.disabled = true;
      if (animationMoves) {
        textArea.value = animationMoves[(idx = 0)];
        running = true;
        setTimeout(updateAnimation, delayTime);
      } else textArea.value = "";
    };
  
    stopBtn.onclick = function () {
      clearTimeout();
      running = false;
      stopBtn.disabled = true;
      startBtn.disabled = false;
      animation.disabled = false;
      textArea.value = defaultValue;
    };
  
    animation.onchange = function () {
      animationMoves = ANIMATIONS[animation.value].split("=====\n");
    };
  
    sizes.onchange = function () {
      const sizesMap = {
        Tiny: "7pt",
        Small: "10pt",
        Medium: "12pt",
        Large: "16pt",
        "Extra Large": "24pt",
        XXL: "32pt",
      };
  
      if (textArea.style.fontSize !== sizesMap[sizes.value])
        textArea.style.fontSize = sizesMap[sizes.value];
    };
  
    turbo.onchange = function () {
      delayTime = turbo.checked ? turboTime : slowTime;
    };
  
    function updateAnimation() {
      if (running) {
        textArea.value = animationMoves[idx++];
        idx %= animationMoves.length;
        setTimeout(updateAnimation, delayTime);
      }
    }
  };