export const validateForm = (email, name, pwd, confirmPwd) => {
  const errors = [];

  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailCheck) errors.push("Email is not valid");

  if (name !== "") {
    const nameCheck = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(name);
    if (!nameCheck) errors.push("Enter a valid full name");
  }

  const pwdCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pwd);
  if (!pwdCheck) errors.push("Password must be of minimum 8 character long and include atleast one special character, uppercase, lowercase, and number");

  if (confirmPwd !== "" && pwd !== confirmPwd) {
    errors.push("Passwords do not match");
  }

  return errors.length > 0 ? errors.join(", ") : null;
};
