$(function() {
  $('#8ball').submit(() => {
    $.get("/8ball").done((res) => {
      $('#question').val(res.data);
    });
    return false;
  });
});