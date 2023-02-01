// ------------------------------------------------------------------------------------------------------------

document.getElementById("img-2").disabled = true;
document.getElementById("img-3").disabled = true;
document.getElementById("img-4").disabled = true;

// Image Click Function
let image1_box = document.querySelector("#image1_div");
let userForm = document.querySelector(".form");
let user_Data = document.querySelector(".user-data");
let diceGame = document.querySelector(".diceGame");
let user_Coupon = document.querySelector(".userCoupon");
let couponG = document.querySelector("#coupon_12");

let count = 0,
  iRandomNumber,
  sum = 0,
  attempt = 2,
  remaining = 3;
let diceNum = document.getElementById("randomNumber");

// onclick function on image 1
function image1() {
  userForm.classList.remove("hide");
}

// onclick function on image 2
function image2() {
  userForm.classList.add("hide");
  user_Data.classList.remove("hide");
  userData();
  document.getElementById("img-3").disabled = false;
  document.getElementById("img-2").disabled = true;
}

// onclick function on image 3
function image3() {
  attempt--;
  document.getElementById("attemptsLeft").innerText = attempt;
  user_Data.classList.add("hide");
  diceGame.classList.remove("hide");
  document.getElementById("img-3").disabled = true;
}

// onclick function on image 4
function image4() {
  diceGame.classList.add("hide");
  user_Coupon.classList.remove("hide");

  let capital_digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small_digit = "abcdefghijklmnopqrstuvwxyz";

  let characters = capital_digit + small_digit;

  let coupon = "";
  for (let i = 0; i < 12; i++) {
    let random = Math.floor(Math.random() * characters.length); // 4
    coupon = coupon + characters[random];
    // console.log(coupon);
  }
  console.log(coupon);

  couponG.innerText = coupon;
  document.getElementById("img-4").disabled = true;
  alert(`Congratulations Successfully coupon generated. Coupon code is ${coupon}`);
  document.getElementById("congrats").classList.remove("hide");
}

// ------------------------------------------------------------------------------------

// User-Input and value stored in local storage

let signup_form = document.querySelector(".signup");

let input_name = document.querySelector("#name");
let input_email = document.querySelector("#email");
let input_username = document.querySelector("#username");
let error = document.querySelector(".error");

let array = [];

signup_form.addEventListener("submit", validateForm);
function validateForm(e) {
  e.preventDefault();
  let name = input_name.value;
  let email = input_email.value;
  let username = input_username.value;

  if (checkNumberofWords(name) < 2) {
    error.innerHTML = "Name must be at least 2 words";
  } else if (email.indexOf("@") == -1) {
    error.innerHTML = "Email must contain @";
  } else if (checkEmail(email) == false) {
    error.innerHTML = "Email already exists";
  } else if (username == "") {
    error.innerHTML = "Username must contain some value";
  } else {
    alert("Form Submitted Successfully");

    let obj = { name, email, username };
    array.push(obj);
    console.log(array);
    input_name.value = "";
    input_email.value = "";
    input_username.value = "";
    //  local stroage
    localStorage.setItem("data", JSON.stringify(array));
    userForm.classList.add("hide");
    document.getElementById("img-2").disabled = false;
    document.getElementById("img-1").disabled = true;
  }
}

function checkNumberofWords(name) {
  name = name.trim();

  let arr = name.split(" ");

  return arr.length;
}

function checkEmail(email) {
  for (t of array) {
    if (t.email == email) {
      return false;
    }
  }
  return true;
}

// -----------------------------------------------------------------------------------------------------

// UserData shown in new block

// let userData = JSON.parse(localStorage.getItem('data'));
function userData() {
  const dataStr = localStorage.getItem("data");
  const udata = JSON.parse(dataStr);
  console.log("UserData is", udata);
  document.getElementById("valName").innerHTML = udata[0].name;
  document.getElementById("valUserName").innerHTML = udata[0].username;
}

// ----------------------------------------------------------------------------------------------------

function image_Dice() {
  remaining--;
  document.getElementById("diceClicks").innerText = remaining;
  let randomNo = Math.floor(Math.random() * 6) + 1;
  sum += randomNo;
  document.getElementById("score").innerText = sum;
  if (remaining === 0) {
    document.getElementById("dice-Image").disabled = true;
    document.getElementById("score").innerText = sum;
    if (sum > 10) {
      alert(`Congratulations  Your total score is ${sum}.`);
      document.getElementById("diceWthScore").classList.add("hide");
      document.getElementById("img-4").disabled = false;
    } else {
      if (attempt != 0) {
        // document.getElementById('score').innerText = sum;
        alert(`Your total score is ${sum}. Try once again!!`);
        document.getElementById("img-3").disabled = false;
        remaining = 3;
        sum = 0;
        document.getElementById("dice-Image").disabled = false;
        document.getElementById("diceWthScore").classList.add("hide");
        console.log(`remaining = ${remaining}`);
        console.log(`sum = ${sum}`);
      } else {
        document.getElementById("score").innerText = sum;
        alert(`Sorry Bad luck 🥹🥹🥹!!! Your total score is ${sum}!`);
        document.getElementById("diceWthScore").classList.add("hide");
      }
    }
  }
}
