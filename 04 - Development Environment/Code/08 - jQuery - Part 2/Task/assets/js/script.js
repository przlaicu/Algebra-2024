$(document).ready(function () {
  $.ajax({
    url: 'https://api.edu.skuflic.com/users',
    dataType: 'json',
    success: function (data) {
      const template = document.getElementById('template').innerHTML;
      const compiled_template = Handlebars.compile(template);
      const rendered = compiled_template({ user: data });
      document.getElementById('users').innerHTML = rendered;
      addStripes();
      afterRender();
      $('td').hover(hover(),notHover())
    },
  });

  function addStripes() {
    $('table tr:nth-child(even)').addClass('striped');
  }

  function afterRender() {
    $('[data-toggle="popover"]').popover(); // Initialize popovers
    $('table th').css('color', 'darkBlue');
  }

  function hover() {
    $("td").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "white");
      });
  }

});
