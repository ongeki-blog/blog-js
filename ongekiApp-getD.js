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
              simplicityArray.push($(this).text().replace('”', "").replace('“', ""));
            });
            if($(form).find('.score_table').length){
              $(form).find('.score_table .score_value').each(function(){
                simplicityArray.push($(this).text());
              });
            }else{
              simplicityArray.push("0");
              simplicityArray.push("0");
              simplicityArray.push("0");
            }
            if($(form).find('.music_score_icon_area').children('img').length){
              $(form).find('.music_score_icon_area').children('img').each(function(){
                if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_tr_a.png?ver=1.01"){
                  simplicityArray.push("A");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_tr_aa.png?ver=1.01"){
                  simplicityArray.push("AA");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_tr_aaa.png?ver=1.01"){
                  simplicityArray.push("AAA");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_tr_bbb.png?ver=1.01"){
                  simplicityArray.push("BBB");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_tr_s.png?ver=1.01"){
                  simplicityArray.push("S");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_tr_ss.png?ver=1.01"){
                  simplicityArray.push("SS");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_tr_sss.png?ver=1.01"){
                  simplicityArray.push("SSS");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_tr_sssplus.png?ver=1.01"){
                  simplicityArray.push("SSS+");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_fc.png?ver=1.01"){
                  simplicityArray.push("FC");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_fb.png?ver=1.01"){
                  simplicityArray.push("FB");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_ab.png?ver=1.01"){
                  simplicityArray.push("AB");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_br_usually.png?ver=1.01"){
                  simplicityArray.push("可");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_br_unbelievable.png?ver=1.01"){
                  simplicityArray.push("極");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_br_great.png?ver=1.01"){
                  simplicityArray.push("優");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_br_good.png?ver=1.01"){
                  simplicityArray.push("良");
                }else if($(this).attr('src')=="https://ongeki-net.com/ongeki-mobile/img/music_icon_br_excellent.png?ver=1.01"){
                  simplicityArray.push("秀");                  
                }else{
                  simplicityArray.push("Not get");
                }
              });
            }else{
              simplicityArray.push("0");
              simplicityArray.push("0");
              simplicityArray.push("0");
              simplicityArray.push("0");
            }
               musicName.push(simplicityArray);
          });
          console.log(musicName);
          $('.t_r').html(10345);
          
        }
    });
});
window.confirm('スマートフォン向けサイトに移動しますか？')
