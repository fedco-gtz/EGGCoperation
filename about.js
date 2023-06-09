// Opcional: Si deseas agregar un efecto de despliegue suave, puedes utilizar el siguiente código JavaScript junto con jQuery:

$(document).ready(function() {
    $(".image-wrapper").hover(function() {
      $(this).find(".image-description").slideDown(200);
    }, function() {
      $(this).find(".image-description").slideUp(200);
    });
  });
  