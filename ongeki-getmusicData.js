

var simplicityArray=[];
//getMusic push
function get_musicData(URL) {
  var simplicityArray=[];
    $.ajax({
        type: 'GET',
        url: URL,
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
window.confirm('スマートフォン向けサイトに移動しますか？')
