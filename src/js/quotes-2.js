function fetchQuote() {
  $.ajax({
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
    // type: 'GET',
    dataType: 'jsonp',
    cache: false
  })
  .done(function (data, textStatus, jqXHR) {
    console.log(data);
    console.log(textStatus);
    console.log(jqXHR);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
  });
}

$(document).ready(function () {
  fetchQuote();
});
