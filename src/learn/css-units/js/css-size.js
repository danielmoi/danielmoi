var changeText = function(myDiv) {
  var text = '';
  _.times(50, function() {
    text += myDiv.css('font-size') + ' ';
  });
  myDiv.text(text);
};

var $asterisk = $('*');
var $html = $('html');
var $body = $('body');
var $div = $('div');
var $grandparentText = $('.cu-grandparent');
var $parentText = $('.cu-parent');
var $childText = $('.cu-child');


$('#cu-button').on('click', function(event) {
  magic();
});


var magic = function() {

  var valAsterisk = $('input:radio[name="font-asterisk"]:checked').val();
  var valHTML = $('input:radio[name="font-html"]:checked').val();
  var valBody = $('input:radio[name="font-body"]:checked').val();
  var valDiv = $('input:radio[name="font-div"]:checked').val();
  var valGrandparent = $('input:radio[name="font-grandparent"]:checked').val();
  var valParent = $('input:radio[name="font-parent"]:checked').val();
  var valChild = $('input:radio[name="font-child"]:checked').val();

  $asterisk.css('font-size', valAsterisk);
  $html.css('font-size', valHTML);
  $body.css('font-size', valBody);
  $div.css('font-size', valDiv);
  $grandparentText.css('font-size', valGrandparent);
  $parentText.css('font-size', valParent);
  $childText.css('font-size', valChild);

  $('.cu-asterisk').text($('*').css('font-size'));
  $('.cu-html').text($('html').css('font-size'));
  $('.cu-body').text($('body').css('font-size'));
  $('.cu-div').text($('div').css('font-size'));



  var $parentTextCache = $grandparentText.children();
  var $childTextCache = $parentText.children();
  changeText($grandparentText);
  $grandparentText.append($parentTextCache);
  changeText($parentText);
  $parentText.append($childTextCache);
  changeText($childText);

};

$(document).on('ready', function(event) {
  magic();
});
