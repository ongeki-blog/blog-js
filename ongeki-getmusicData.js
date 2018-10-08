
var simplicityArray=[];
$(function(){
  $('a').each(function(ippon,form){
    simplicityArray.push($(this).attr('href'));
  });
  console.log(simplicityArray);
});

