var playerData = {
  player_name:"",
  player_level:"",
  player_trophy:"",
  player_ratingNow:"",
  player_ratingMax:"",
  player_battlePoint:""
  };
var musicName=[];
var musicData_basic=[],musicData_advanse=[],musicData_expert=[],musicData_master=[],musicData_lunatic=[];// over BHS THS
var player_frend=[];

$(function(){
  playerData.player_name=$('.name_block span').text();
  playerData.player_level=$('.lv_block span').text();
  playerData.player_trophy=$('.trophy_block span').text();
  playerData.player_ratingNow=$('.rating_field span').text();
  playerData.player_battlePoint=$('.battle_point_10').text();
  console.log(playerData);

});
//getMusic push
$(function get_musicData() {
    $.ajax({
        type: 'GET',
        url: 'https://ongeki-net.com/ongeki-mobile/record/musicGenre/search/?genre=99&diff=3',
        dataType: 'html',
        success: function(data) {
          $(data).find('form').each(function(ippon,form){
            var simplicityArray =[];
            $(form).find('.music_label').each(function(){
              simplicityArray.push($(this).text());
            });
            if($(form).find('.score_table').length){
              console.log(1);
              $(form).find('.score_table .score_value').each(function(){
                simplicityArray.push($(this).text());
              });
            }else{
              console.log(0);
              simplicityArray.push("0");
              simplicityArray.push("0");
              simplicityArray.push("0");
            }
               musicName.push(simplicityArray);
          });
          console.log(musicName);
        }
    });
});
