
//getMusic push
$(function get_musicData() {
    $.ajax({
        type: 'GET',
        url: 'https://ongeki.gamerch.com/STARTLINER',
        dataType: 'html',
        success: function(data) {
          $(data).find('td').each(function(ippon,form){
          console.log($(this).text());
          }
        }
    });
});
