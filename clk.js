function myFunc(){
    var ele=document.body;
    ele.classList.toggle("dark-mode");
}





const time=setInterval(function time(){
 var today= new Date();
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();
 h=h<10?'0'+h:h;
 m=m<10?'0'+m:m;
 s=s<10?'0'+s:s;
 document.getElementById('hour').innerHTML= h;                                                                                       
 document.getElementById('min').innerHTML= m;                                                                                       
 document.getElementById('sec').innerHTML= s;                                                                                       


})