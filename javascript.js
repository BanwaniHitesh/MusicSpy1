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
    var songarr=['TBMAUJ','DKSong','Husn','Tu_Mera_Hero','Haaye_Oye','TBMAUJ1','DKSong1','Husn1','Tu_Mera_Hero1','Haaye_Oye1']
    var textarr=['TBMAUJ_name','DKSong_name','Husn_name','Tu_Mera_Hero_name','Haaye_Oye_name','TBMAUJ_name1','DKSong_name1','Husn_name1','Tu_Mera_Hero_name1','Haaye_Oye_name1']
    if(audio.paused){
        audio.play();
        for(i=0;i<songarr.length;i++){
            if(songarr[i]==songid){
                document.getElementById(textid).style.color="limegreen";
                document.getElementById(songarr[i]).style.opacity=1;
                continue;
            }
            else{
                document.getElementById(songarr[i]).pause();
                document.getElementById(songarr[i]).style.opacity=0;
            document.getElementById(textarr[i]).style.color="#ffffff";
            
        }
    }
}
else{
    audio.pause();
    document.getElementById(songarr[i]).style.opacity=0;
        document.getElementById(textid).style.color="#ffffff";
    }

}
