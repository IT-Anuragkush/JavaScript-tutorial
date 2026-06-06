function formValidation() {
  let uname = document.myForm.uname;
  let email = document.myForm.email;
  let phone = document.myForm.phone;
  let pass = document.myForm.password;
  let cpass = document.myForm.conPassword;

  // alert(uname.value)

  if (unameValidation(uname)) {
    if (emailValidation(email)) {
      if (phoneValidation(phone)) {
        if (passValidation(pass)) {
          if (conPasswordValidation(cpass)) 
          {
            return true;
          } 
          else {
            return false;
          }
        } 
        else {
          return false;
        }
      } 
      else {
        return false;
      }
    } 
    else {
      return false;
    }
  } 
  else {
    return false;
  }
}

function unameValidation(uname) {
  let onlyspace = /^[\s]+$/;
  if (uname.value.match(onlyspace)) {
    document.getElementById("nameError").innerHTML =
      "name is compulsary to fill";
    uname.focus();
    return false;
  } else {
    let alphabet = /^[A-Za-z\s]+$/;
    if (uname.value.match(alphabet)) {
      // alert("successfull");
      document.getElementById("nameError").innerHTML = "";
      return true;
    } else {
      document.getElementById("nameError").innerHTML =
        "Username should contain only letters";
      uname.focus();
      return false;
    }
  }
}

function emailValidation(email) {
  let onlyspace = /^[\s]+$/;
  if (email.value.match(onlyspace)) {
    document.getElementById("emailError").innerHTML =
      "email is compulsary to fill";
    email.focus();
    return false;
  } else {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.match(emailPattern)) {
      document.getElementById("emailError").innerHTML = "";
      return true;
    } else {
      document.getElementById("emailError").innerHTML = "fill valid mail";
      email.focus();
      return false;
    }
  }
}

function phoneValidation(phone) {
  let onlyspace = /^[\s]+$/;
  if (phone.value.match(onlyspace)) {
    document.getElementById("phoneError").innerHTML =
      "phone number is compulsary to fill";
    phone.focus();
    return false;
  } else {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (phone.value.match(mobileRegex)) {
      document.getElementById("phoneError").innerHTML = "";
      return true;
    } else {
      document.getElementById("phoneError").innerHTML =
        "mobile number must be 10 digit and start from 6-9";
      phone.focus();
      return false;
    }
  }
}

function passValidation(pass) {
  let onlyspace = /^[\s]+$/;
  if (pass.value.match(onlyspace)) {
    document.getElementById("passwordError").innerHTML =
      "password is compulsary to fill";
    pass.focus();
    return false;
  } else {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pass.value.match(passwordRegex)) {
      document.getElementById("passwordError").innerHTML = "";
      return true;
    } else {
      document.getElementById("passwordError").innerHTML =
        "fill strong password";
      pass.focus();
      return false;
    }
  }
}

function conPasswordValidation(cpass) {
  let pass = document.myForm.password;

  let onlyspace = /^[\s]+$/;
  if (cpass.value.match(onlyspace)) {
    document.getElementById("conPasswordError").innerHTML =
      "password is compulsary to fill";
    cpass.focus();
    return false;
  } else if (pass.value !== cpass.value) {
    document.getElementById("conPasswordError").innerHTML =
      "please enter same password";
    return false;
  } else {
    document.getElementById("conPasswordError").innerHTML = "";
    return true;
  }
}

