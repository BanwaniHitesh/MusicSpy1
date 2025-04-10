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