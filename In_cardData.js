function In_cardData(number,skilName,type){
if(type==5){


}else{
for(var i in cardDB){
   if(cardDB[i].number==number){
    items.push(cardDB[i]);
}
 if(cardDB[i].skilName==skilName&&cardDB[i].number!=number){
items1.push( '<div style="text-align: center;"><table><tbody><tr><th>CardName</th><td colspan="2"><a href="'+cardDB[i].URL+'">'+cardDB[i].cardname+'</a></td></tr><tr><td width="200"rowspan="8"><a href="'+cardDB[i].URL+'">'+cardDB[i].picture+'</a></td></tr><tr><th width="200">レアリティ</th><td width="100">'+cardDB[i].rare+'</td></tr><tr><th>属性</th><td>'+cardDB[i].attribute+'</td></tr><tr><th>Max攻撃力</th><td>'+cardDB[i].power5+'</td></tr><tr><th>追加日</th><td>'+cardDB[i].cardDate+'</td></tr><tr><th>カード番号</th><td>'+cardDB[i].number+'</td></tr><tr><th>スキル</th><td>'+cardDB[i].skilDetail1+'</td></tr><tr><th>スキル（超開花後)</th><td>'+cardDB[i].skilDetail2+'</td></tr></tbody></table></div><br>');
}
}
for(var i in CcardDB){
 if(CcardDB[i].skilName==skilName){
items1.push( '<div style="text-align: center;"><table><tbody><tr><th>CardName</th><td colspan="2"><a href="'+CcardDB[i].URL+'">'+CcardDB[i].cardname+'</a></td></tr><tr><td width="200"rowspan="8"><a href="'+CcardDB[i].URL+'">'+CcardDB[i].picture+'</a></td></tr><tr><th width="200">レアリティ</th><td width="100">'+CcardDB[i].rare+'</td></tr><tr><th>属性</th><td>'+CcardDB[i].attribute+'</td></tr><tr><th>Max攻撃力</th><td>'+CcardDB[i].power5+'</td></tr><tr><th>追加日</th><td>'+CcardDB[i].cardDate+'</td></tr><tr><th>カード番号</th><td>'+CcardDB[i].number+'</td></tr><tr><th>スキル</th><td>'+CcardDB[i].skilDetail1+'</td></tr><tr><th>スキル（超開花後)</th><td>'+CcardDB[i].skilDetail2+'</td></tr></tbody></table></div><br>');
}
}

if(items1.length==0){
items1.push("該当キャラなし");
}
document.getElementById('sameE').innerHTML = items1.join("");
document.getElementById('number').innerHTML =  items[0].number;
document.getElementById('cardname1').innerHTML =  items[0].cardname;
document.getElementById('cardname2').innerHTML =  items[0].cardname+"の";
document.getElementById('cardname3').innerHTML =  items[0].cardname;
document.getElementById('cardname4').innerHTML =  items[0].cardname+"の";
document.getElementById('picture').innerHTML =  items[0].picture;
document.getElementById('rare').innerHTML =  items[0].rare;
document.getElementById('attribute').innerHTML =  items[0].attribute;
document.getElementById('maxlevel').innerHTML =  items[0].maxlevel;
document.getElementById('name').innerHTML =  items[0].name;
document.getElementById('cardDate').innerHTML =  items[0].cardDate;
document.getElementById('skilType').innerHTML =  items[0].skilType;
document.getElementById('power1').innerHTML =  items[0].power1;
document.getElementById('power2').innerHTML =  items[0].power2;
document.getElementById('power3').innerHTML =  items[0].power3;
document.getElementById('power4').innerHTML =  items[0].power4;
document.getElementById('power5').innerHTML =  items[0].power5;
document.getElementById('power6').innerHTML =  items[0].power6;
document.getElementById('power7').innerHTML =  items[0].power7;
document.getElementById('power8').innerHTML =  items[0].power8;
document.getElementById('power9').innerHTML =  items[0].power9;
document.getElementById('power10').innerHTML =  items[0].power10;
document.getElementById('skilName').innerHTML =  items[0].skilName;
document.getElementById('skilDetail1').innerHTML =  items[0].skilDetail1;
document.getElementById('skilDetail2').innerHTML =  items[0].skilDetail2;
document.getElementById('HTG').innerHTML =  items[0].HTG;
}
}








}
