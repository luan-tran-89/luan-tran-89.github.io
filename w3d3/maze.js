
$(function () {
  const mazeEl = $("#maze");
  const boundaryEls = $("#maze .boundary");
  const startBtn = $("#start");
  const endBtn = $("#end");
  const status = $("#status");

  let isStarted = false;
  let isLost = false;

  mazeEl.mouseover(function(e) {
    const $e = $(e.target);
    if ($e.hasClass("boundary")) {
      boundaryEls.addClass("youlose");
      if (isStarted) {
        lost();
      }
    }
  });

  mazeEl.mouseleave(function(e) {
    if (isStarted) {
      boundaryEls.addClass("youlose");
      lost();
    }
  });

  boundaryEls.mouseleave(function(e) {
    const $e = $(e.target);
    if ($e.hasClass("youlose") && !isLost) {
      boundaryEls.removeClass("youlose");
    }
  });

  endBtn.mouseenter(function(e) {
    if (isStarted) {
      win();
    }
  });

  startBtn.click(function() {
    reset();
    if (isStarted) {
      changeStatus("&nbsp;");
    }
  });

  function reset() {
    changeStatus("Click the \"S\" to begin.");
    isStarted = !isStarted;
    isLost = false;
    boundaryEls.removeClass("youlose");
  }

  function win() {
    // alert("You win! :]");
    changeStatus("You win! :]");
    isStarted = !isStarted;
  }

  function lost() {
    // setTimeout(() => {alert("Sorry, you lost! :[")}, 100);
    changeStatus("Sorry, you lost! :[");
    isStarted = !isStarted;
    isLost = true;
  }

  function changeStatus(value) {
    status.html(value);
  }
});
