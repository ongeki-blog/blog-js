
var simplicityArray=[];
//getMusic push
function get_musicData(urls) {
  var simplicityArray=[];
    $.ajax({
        type: 'GET',
        url: urls,
        dataType: 'html',
        success: function(data) {
          $(data).find('form').each(function(ippon,form){
            $(form).find('a').each(function(){
              simplicityArray.push($(this).attr('href'));
            });
          });
         }
          
    });
  console.log(simplicityArray);
}
$(function(){
get_musicData("http://ongeki-club.bingoworlds.com/music/all");
});

