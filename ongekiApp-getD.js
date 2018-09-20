var playerDate = {
  player_name:"",
  player_level:"",
  player_trophy:"",
  player_ratingNow:"",
  player_ratingMax:"",
  player_battlePoint:""
  };

$(function(){
  playerDate.player_name=$('.name_block span').html();
  playerDate.player_level=$('.lv_block span').html();
  playerDate.player_trophy=$('.trophy_block span').html();
  playerDate.player_ratingNow=$('.rating_field span').html();
  playerDate.player_battlePoint=$('.battle_point_10').html();
  alert(playerDate);
});
