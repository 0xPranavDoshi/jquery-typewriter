(function ($) {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  $.fn.typeWrite = function (options) {
    var settings = $.extend(
      {
        speed: 50,
        repeat: false,
        cursor: true,
      },
      options
    );

    return this.each(async function () {
      var inputText = $(this).text();
      letters = inputText.split("");
      $(this).text("");
      var text = letters[0];
      while (settings.repeat == true) {
        for (let i = 0; i < letters.length; i++) {
          if (letters[i + 1] !== undefined) {
            $(this).text(text);
            text = text + letters[i + 1];
            // console.log(text);
            await timer(settings.speed);
          } else {
            $(this).text(text);
            text = text + letters[i];
            await timer(settings.speed);
          }
        }
        console.log("Clearing text");
        $(this).text("");
        text = letters[0];
      }
      for (let i = 0; i < letters.length; i++) {
        if (letters[i + 1] !== undefined) {
          $(this).text(text);
          text = text + letters[i + 1];
          // console.log(text);
          await timer(settings.speed);
        } else {
          $(this).text(text);
          text = text + letters[i];
          await timer(settings.speed);
        }
      }
    });
  };
})(jQuery);
