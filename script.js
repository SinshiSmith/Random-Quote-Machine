var getQuote = function (){
  $.getJSON("https://talaikis.com/api/quotes/random/ ", json => {
  $("#qoutes").html(json.quote);
  $("#author").html("-" + json.author);
  $("#tweet").attr("href", "https://twitter.com/intent/tweet?text="+ "\"" +   json.quote + "\"" + " -" + json.author);
});
 };
$("document").ready(function(){
  getQuote();
  $("#next").on( "click", function(){
  getQuote();
  });
})