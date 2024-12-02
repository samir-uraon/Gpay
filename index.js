var dt=new Date()
function monthname(d){
    var month=""
    
    
    switch (d) {
        
        case 0:
          
            month="January"
            break;
            case 1:
                month="February"
                break;
                case 2:
            month="March"
            break;
            case 3:
            month="April"
            break;
            case 4:
            month="May"
            break;
            case 5:
            month="June"
            break;
            case 6:
            month="July"
            break;
            case 7:
            month="Auguest"
            break;
            case 8:
            month="September"
            break;
            case 9:
            month="October"
            break;
            case 10:
            month="November"
            break;
            case 11:
            month="December"
            break;

        }
        return month
}
function minutenum(w){
    var dt1=new Date()
    var s=dt1.toLocaleTimeString().substring(0,dt.toLocaleTimeString().lastIndexOf(":"))
    var s2=s.substring(s.indexOf(":")+1,s.length)
    var s3=s.substring(s.indexOf(":")+1,s.length)
   

    if(s2!="00"){
        s2=String((Number(s2)-Number(w))) 
        
    }
    if(s2.length==1){
        s2="0"+s2
    }
    
    if(!s2.includes("-")){
        s=s.replace(s3,s2)
    }else{
     s=dt1.toLocaleTimeString().substring(0,dt.toLocaleTimeString().lastIndexOf(":"))
}
    return s
}

var curtime=dt.getDate()+" "+monthname(dt.getMonth())+" "+dt.getFullYear()+", "+minutenum(0)+dt.toLocaleTimeString().substring(dt.toLocaleTimeString().lastIndexOf(" "),dt.toLocaleTimeString().length);


const username=document.querySelector(".usname")
const reciver=document.querySelector(".reciverupiid")
const sender=document.querySelector(".senderupiid")
const amount=document.querySelector(".amount")
const time=document.querySelector(".time")
const tone=document.querySelector("audio")




document.querySelector("#upi").addEventListener("click",()=>{
    var usname=prompt("Enter reciver Name (Blank for no update)")
    var reciupiid=prompt("Enter reciver UPI ID (Blank for no update)")
    var seupiid=prompt("Enter sender UPI ID (Blank for no update)")
   var amo=prompt("Enter Amount (Blank for no update)")
   var ti=prompt("Enter Delay Time (Blank for current time)")



// One way to set condition ----(not good)
if(reciupiid =="" && seupiid=="" && amo=="" && usname==""){
    time.innerHTML=curtime
}
else if(reciupiid =="" && seupiid=="" && usname==""){
    amount.innerHTML=amo
    time.innerHTML=curtime
}
else if(seupiid =="" && amo=="" && usname==""){
    reciver.innerHTML=reciupiid
    time.innerHTML=curtime
}
else if(reciupiid =="" && amo=="" && usname==""){
    sender.innerHTML=seupiid
    time.innerHTML=curtime
}
else if(reciupiid =="" && amo=="" && seupiid==""){
    username.innerHTML=usname
    time.innerHTML=curtime
}

else if(seupiid=="" && usname==""){
    amount.innerHTML=amo
    reciver.innerHTML=reciupiid 
    time.innerHTML=curtime
}
else if(seupiid =="" && amo==""){
    reciver.innerHTML=reciupiid
    amount.innerHTML=usname
    time.innerHTML=curtime
}
else if(seupiid=="" && reciupiid==""){
    amount.innerHTML=amo
    username.innerHTML=usname 
    time.innerHTML=curtime
}

else if(amo=="" && usname==""){
    sender.innerHTML=seupiid
    reciver.innerHTML=reciupiid
    time.innerHTML=curtime
}
else if(reciupiid =="" && amo==""){
    username.innerHTML=usname
    sender.innerHTML=seupiid
    time.innerHTML=curtime
}
else if(seupiid=="" && amo==""){
    username.innerHTML=usname
    reciver.innerHTML=reciupiid 
    time.innerHTML=curtime
}
else if(seupiid==""){
    username.innerHTML=usname
    reciver.innerHTML=reciupiid 
    amount.innerHTML=amo
    time.innerHTML=curtime
}
else if(reciupiid==""){
    username.innerHTML=usname
    sender.innerHTML=seupiid
    amount.innerHTML=amo
    time.innerHTML=curtime
}
else if(amo==""){
    username.innerHTML=usname
    reciver.innerHTML=reciupiid 
    sender.innerHTML=seupiid
    time.innerHTML=curtime
}
else if(usname==""){
    reciver.innerHTML=reciupiid 
    amount.innerHTML=amo
    sender.innerHTML=seupiid
    time.innerHTML=curtime
}
else{
    reciver.innerHTML=reciupiid
    sender.innerHTML=seupiid
    amount.innerHTML=amo
    username.innerHTML=usname
    time.innerHTML=curtime
}

// another way to set condition----(good)
// if(seupiid!=""){
//     sender.innerHTML=seupiid
//     time.innerHTML=curtime
// }
// if(reciupiid!=""){
//     reciver.innerHTML=reciupiid 
//     time.innerHTML=curtime
// }


// if(amo!=""){
//     amount.innerHTML=amo
//     time.innerHTML=curtime
// }

// if(usname!=""){
//     username.innerHTML=usname
//     time.innerHTML=curtime
// }



if(ti!=""){
    curtime=dt.getDate()+" "+monthname(dt.getMonth())+" "+dt.getFullYear()+", "+minutenum(ti)+dt.toLocaleTimeString().substring(dt.toLocaleTimeString().lastIndexOf(" "),dt.toLocaleTimeString().length);
    time.innerHTML=curtime
  }
  else{
      curtime=dt.getDate()+" "+monthname(dt.getMonth())+" "+dt.getFullYear()+", "+minutenum(0)+dt.toLocaleTimeString().substring(dt.toLocaleTimeString().lastIndexOf(" "),dt.toLocaleTimeString().length);
      time.innerHTML=curtime
      
  }


})




time.innerHTML=curtime
document.querySelector("#img").addEventListener("click",()=>{
    tone.play()
})
document.querySelector("button").addEventListener("click",()=>{
   window.location.reload()
})