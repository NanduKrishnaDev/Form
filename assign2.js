form.addEventListener("submit", (e) => {
      e.preventDefault();
      validate();
      console.log(flag);
      if(!flag){   
      setTimeout(reset1, 2000);
       }
       
})
var flag; //initialised to check for invalidity
function validate()
{
 let text = document.forms["form"]["uname"].value;         // get the username  
 let mail = document.forms["form"]["email"].value;         //  get the mail id
 let pass1 = document.forms["form"]["pass1"].value;        //  get the password value
 let pass2 = document.forms["form"]["pass2"].value;        //  get the confirm password value
 flag=false;

 if( text.length>2 ){   //min 3 characters
       document.getElementById("name").style.borderColor ="green";
       document.getElementById("usernamewarn").innerHTML="";
        }
else {
       document.getElementById("name").style.borderColor ="red";
       document.getElementById("usernamewarn").innerHTML="username must be atleast 3 characters"
       // return false;
       flag=true;
       }

 if( /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(mail) ){   //email id constraints checked
       document.getElementById("mail").style.borderColor ="green";
       document.getElementById("emailwarn").innerHTML="";
       }
 else {
       document.getElementById("mail").style.borderColor ="red";
       document.getElementById("emailwarn").innerHTML="Email is not valid"
       // return false;
       flag=true;
 }

 if( pass1.length>5){ //min 6 characters
       document.getElementById("password1").style.borderColor ="green";
       document.getElementById("passwordwarn").innerHTML="";
       }
 else {
       document.getElementById("password1").style.borderColor ="red";
       document.getElementById("passwordwarn").innerHTML="Password must be atleast 6 characters"
       // return false;
       flag=true;
       }
 
 if( (pass2==pass1)&&(pass2!="")){  //checks weather both password and confirm password has same value
       document.getElementById("password2").style.borderColor ="green";
       document.getElementById("confirmwarn").innerHTML="";
       }
 else {
       document.getElementById("password2").style.borderColor ="red";
       document.getElementById("confirmwarn").innerHTML="Password doesnot match";
       // return false;
       flag=true;
       }
 if(flag){
        //console.log(flag);
       return false;
       }

}
function reset1(){  // resets the css properties
      document.getElementById("name").style.removeProperty("border-color");
      document.getElementById("mail").style.removeProperty("border-color");
      document.getElementById("password1").style.removeProperty("border-color");
      document.getElementById("password2").style.removeProperty("border-color");
      document.getElementById("form").reset();

      
       }
 