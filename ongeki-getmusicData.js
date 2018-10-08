
var simplicityArray=[];
var simplicityArrayq=[];
$(function(){
  $('th').each(function(ippon,form){
    simplicityArray.push($(this).text().replace(/↵/g, ''));
  });
  $('td').each(function(ippon,form){
    simplicityArrayq.push($(this).text().replace(/↵/g, ''));
  });
  console.log(simplicityArray);
  console.log(simplicityArrayq);
});

