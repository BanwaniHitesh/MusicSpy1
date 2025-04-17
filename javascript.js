function login(){
    var x=document.getElementById("username").value;
    var y=document.getElementById("pass").value;
    if(x=="HiteshBanwani" && y=="BANWANI"){
        return true
    } 
    else{
        alert("Invalid Username or Password");
        return false;
    }
}
function checkpassword(){
    var x=document.getElementById("pass").value;
    var y=document.getElementById("cpass").value;
    if(x==y){
        return true;
    }else{
        alert("Password and Confirm Password is different");
        return false;
    }
}
function showpassword(){
    var x=document.getElementById("pass");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}
function showcpassword(){
    var x=document.getElementById("cpass");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}

function playsong(songid, textid){
    const audio=document.getElementById(songid);
    var songarr=['TBMAUJ','DKSong','Husn','Tu_Mera_Hero','Haaye_Oye']
    var textarr=['TBMAUJ_name','DKSong_name','Husn_name','Tu_Mera_Hero_name','Haaye_Oye_name']
    if(audio.paused){
        audio.play();
        for(i=0;i<songarr.length;i++){
            if(songarr[i]==songid){
                document.getElementById(textid).style.backgroundColor="#3CB043";
                continue;
            }
            else{
            document.getElementById(songarr[i]).pause();
            document.getElementById(textarr[i]).style.backgroundColor="#141414";
            
        }
    }
    }
    else{
        audio.pause();
        document.getElementById(textid).style.backgroundColor="#141414";
    }

}
