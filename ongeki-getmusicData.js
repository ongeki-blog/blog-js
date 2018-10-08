
var simplicityArray=[];
var simplicityArrayq=[];
$(function(){
  $('th').each(function(ippon,form){
    simplicityArray.push($(this).text().replace(/¥n/g, ''));
  });
  $('td').each(function(ippon,form){
    simplicityArrayq.push($(this).text().replace(/\u002f/g, '.'));
  });
  console.log(simplicityArray);
  console.log(simplicityArrayq);
  alert(",{musicName: '"+$('h2').text+"',BPM:'',musicTime:'',class:'',chapter:'「」',URL:'',Vscha:'(Lv.1)',banMethod:'チャプター:',picture:'',musicDate:'"+simplicityArrayq[1]+"',genre:'"+simplicityArrayq[3]"',artist: '"+simplicityArrayq[5]+"',basicArray:['"+simplicityArray[9]+"','','','','','','','','',''],advancedArray:['"+simplicityArray[10]+"','','','','','','','','',''],expertArray:['"+simplicityArray[11]+"','"+simplicityArray[23]+"','','','','','','"+simplicityArray[35]+"','',''],masterArray:['"+simplicityArray[12]+"','"+simplicityArray[48]+"','','','','','','"+simplicityArray[60]+"','"+simplicityArrayq[4]+"',''],"});
});



  
  
  
  
  
  
  
  
  
  
