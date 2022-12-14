
$(function() {
  let isStarted = false;
  let interval;
  const content = $("#content");
  const startBtn = $("#start");
  const circleDiv = '<div></div>';
  const growthAmount = parseInt($("#growth-amount").val());

  function generateColor() {
    return '#'+ Math.round(0xffffff * Math.random()).toString(16);
  }

  function generateCircles(numberOfCircles) {
    let width = parseInt($("#width").val());
    const contentWidth = content.width();

    for (let i = 0; i < numberOfCircles; i++) {
      const posx = (Math.random() * contentWidth).toFixed();
      const posy = ((Math.random() * 30) + 100).toFixed();

      $(circleDiv, {
        'class': "circle",
        'css': {
          'background-color': generateColor(),
          'width': `${width}px`,
          'left': `${posx}px`,
          'top': `${posy}px`,
        },
        'click' : removeCircle
      }).appendTo("#content");
    }
  }

  function addAnimateCircle(width) {
    const contentWidth = content.width();

    $("#content .circle").each(function(e) {
      $(this).stop();
      $(this).animate({
        width: `${width}px`,
        'left': `-=${growthAmount/2}px`,
        'top': `-=${growthAmount/2}px`,
      });
    });
  }

  function removeCircle(e) {
      $(this).remove();
      if (content.html() == '') {
        startBtn.text("Start");
        clearInterval(interval);
        if (interval) {
          interval = null;
        }
        isStarted = false;
      }
  }

  startBtn.on("click", function(e) {
    let width = parseInt($("#width").val());
    const intervalTime = parseInt($("#interval").val());
    const numberOfCircles = parseInt($("#number-circles").val());

    if (!isStarted) {
      startBtn.text("Stop");
      generateCircles(numberOfCircles);

      interval = setInterval(function() {
        width += growthAmount;
        addAnimateCircle(width);
      }, intervalTime);
    } else {
      startBtn.text("Start");
      content.empty();
      clearInterval(interval);
      if (interval) {
        interval = null;
      }
    }

    isStarted = !isStarted;
  });
});

