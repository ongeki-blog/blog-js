var playerData = {
  player_name:"",
  player_level:"",
  player_trophy:"",
  player_ratingNow:"",
  player_ratingMax:"",
  player_battlePoint:""
  };

$(function(){
  playerData.player_name=$('.name_block span').text();
  playerData.player_level=$('.lv_block span').text();
  playerData.player_trophy=$('.trophy_block span').text();
  playerData.player_ratingNow=$('.rating_field span').text();
  playerData.player_battlePoint=$('.battle_point_10').text();
  console.log(playerData);

});
$(function get_musicData() {
    $.ajax({
        type: 'GET',
        url: 'https://ongeki-net.com/ongeki-mobile/record/musicGenre/search/?genre=99&diff=3',
        dataType: 'html',
        success: function(data) {
            $(data).find('.music_label').each(function(){
        console.log( $(this).text() );  // 'foo', 'bar'と表示
    });
        }
    });
});

