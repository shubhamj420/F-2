let imageFirst = document.querySelector(`.img1`)
let signup_form  = document.querySelector('.signup');
imageFirst.addEventListener(`click`,loginform);
function loginform(e){
    // console.log(e);
   imageFirst.classList.add(`hide`);
   signup_form.classList.remove(`hide`);
}
let input_name = document.querySelector('#name');
let input_email = document.querySelector('#Email"');
let input_UserName = document.querySelector('#UserName');
// let input_confirm_password = document.querySelector('#confirm-password');
// let error = document.querySelector('.error');



signup_form.addEventListener('submit', validateForm)

let arr = []
let id = 1

function validateForm(e) {
     e.preventDefault();
        let name = input_name.value;
        let email = input_email.value;
        let username = input_UserName.value;
        // let password = input_password.value;
        // let confirm_password = input_confirm_password.value;

        if(checkNumberofWords(name) <2){
           error.innerHTML = 'Name must be at least 2 words';
        }
        else if(email.indexOf('@') == -1){
            error.innerHTML = 'Email must contain @';
        }
       else if(checkEmail(email) == false){
            error.innerHTML = 'Email already exists';
        }
      else{
            error.innerHTML = 'Form Submitted Successfully'; 

            
            input_name.value = '';
            input_email.value = '';
            input_UserName = ``;
            // input_password.value = '';
            // input_confirm_password.value = '';
            // local stroage
            localStorage.setItem("data" , JSON.stringify(arr))
            window.location.href = "/login.html"
            
      }

    
 }


 function checkNumberofWords(name){

      name = name.trim();

      let arr = name.split(' ');

      return arr.length
 }


//  function checkPassword(password, name, email){ // "A$bhi123"
//     let cl = 0 , sl = 0, n=0, sc=0
//     for(let t of password){ //  A
//        if(t>="A" && t<="Z"){
//          cl= cl+1 // capital letter
//        }
//        else if(t>="a" && t<="z"){
//          sl++ // small letter
//        }
//        else if(t>="0" && t<="9"){
//             n++ // number
//          }
//          else{
//             sc++ // special character
//          }
//     }
//     if(cl>=1 && sl>=1 && n>=1 && sc>=1 && password !=name && password !=email){
//         return true
//     }
//     else{
//         return false
//     }
//  }


 function checkEmail(email){
     for( t of arr){
            if(t.email == email){
                return false
            }
     }
        return true
 }