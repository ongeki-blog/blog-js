
var simplicityArray=[];
var simplicityArrayq=[];
$(function(){
  $('a').each(function(ippon,form){
    simplicityArray.push($(this).attr('href'));
  });
  $('td').each(function(ippon,form){
    simplicityArrayq.push($(this).text());
  });
  console.log(simplicityArray);
  console.log(simplicityArrayq);
});

