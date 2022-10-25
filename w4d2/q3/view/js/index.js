$(function() {
  $('#product').submit(() => {
    const name = $("#name").val();
    const data = {
      name: name
    };

    $.post({
      url: "/addToCart",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8"
    }).done((res) => {
      $("#count").text(res.data)
    });
    return false;
  });
});