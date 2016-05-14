var colorArray = ['rgb(71, 255, 145)', 'rgb(51, 204, 255)', 'rgb(255, 99, 71)', 'rgb(0, 187, 49)'];

var options = {
  strings: ['Hello'],
  typeSpeed: 50,
  backDelay: 500
};

function fetchQuote() {
  var quoteContainer = $('#quote-container');
  var authorContainer = $('#author');
  $.getJSON({
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
      dataType: 'jsonp',
      cache: false // Thanks to Marie at CodePen
    })
    .done(function (data) {
      console.log(data);

      var arrQuotes = data.map(function(element) {
        return $('<div>').html(element.content).text();
      });
      console.log(arrQuotes);
      options.strings = arrQuotes;
      $('#typed').typed(options);

      var rawQuote = data[0].content;
      var rawAuthor = data[0].title;
      quoteContainer.html(rawQuote);
      authorContainer.html(rawAuthor);
      quoteContainer.children().addClass('quote');
      var quote = $('.quote').text();
      var quoteURI = encodeURI(quote);
      var authorURI = encodeURI(rawAuthor);
      $('.tweet').attr('href', 'https://twitter.com/intent/tweet?&text=' + quoteURI + ' - ' + authorURI + '&hashtags=quotes,freecodecamp');
      $('.tweet').attr('target', '_blank');

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    });

  var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  $('button').css('color', randomColor);
  $('.container').css('background-color', randomColor);
  $('.button-container').css('background-color', randomColor);
}

$(document).ready(function () {
  $('#quote-container').children().addClass('quote');
  $('#new-quote').on('click', fetchQuote);
  var rawQuote = $('.quote').text();
  var quoteURI = encodeURI(rawQuote);
  var rawAuthor = $('#author').text();
  var authorURI = encodeURI(rawAuthor);
  $('.tweet').attr('href', 'https://twitter.com/intent/tweet?&text=' + quoteURI + ' - ' + authorURI + '&hashtags=quotes,freecodecamp');
  $('.tweet').attr('target', '_blank');

  fetchQuote();

});
