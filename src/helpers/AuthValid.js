const isValid = (a) => a.some((element) => element);

const nameValid = (name, helper = "") => {
  if (helper === "") {
    const ch = "abcdefghijkelmnopqrstuvwxyz";
    for (const item of name.toLowerCase()) if (!ch.includes(item)) return false;
    return true;
  } else {
    for (const item of name.toLowerCase())
      if (helper.includes(item)) return true;
    return false;
  }
};

const emailValid = (email) => {
  const emailTypes = [
    "gmail.com",
    "email.com",
    "mail.ru",
    "yandex.ru",
    "kaznu.kz",
  ];

  if (email === "") return "Email пустой!!!";

  const emailSplit = email.split("@");
  return isValid(emailTypes.map((emailType) => emailType === emailSplit[1]));
};

const passwordValid = (password) => {
  const passwordType = {
    symbol: "!@#$%^&*()_+",
    number: "1234567890",
    char: "abcdefghijkelmnopqrstuvwxyz",
    length: 8,
  };

  const charIsValid = nameValid(password, passwordType.char);
  const symbolIsValid = nameValid(password, passwordType.symbol);
  const numberIsValid = nameValid(password, passwordType.number);
  const passwordLengthIsValid = password.length >= passwordType.length;

  return charIsValid && symbolIsValid && numberIsValid && passwordLengthIsValid;
};

const ageValid = (age) => {
  return +age === age * 1 && +age > 0 && +age < 100;
};

export const authValid = (email, password, name = "a", age = "1") => {
  if (name === "") {
    alert("Error! Empty name!!!");
    return false;
  }
  if (!nameValid(name)) {
    alert("Не валидный имя! Должен быть только A-Z и a-z.");
    return false;
  }

  if (email === "") {
    alert("Error! Empty email!!!");
    return false;
  }
  if (!emailValid(email)) {
    alert("Не валидный email!");
    return false;
  }

  if (password === "") {
    alert("Error! Empty password!!!");
    return false;
  }
  if (!passwordValid(password)) {
    alert("Не валидный password!");
    return false;
  }

  if (age === "") {
    alert("Error! Empty age!!!");
    return false;
  }
  if (!ageValid(age)) {
    alert("Не валидный age! Должен быть между 0-100.");
    return false;
  }
  return true;
};

export const isThereSuch = (email) => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users === null) {
    return false;
  }

  const result = isValid(users.map((user) => user.email === email));
  if (result) {
    alert("This email is already registered!");
    return true;
  }
  return false;
};

export const loginIsValidFunc = (data) => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (!(users === null)) {
    for (const user of users)
      if (user.email === data.email && user.password === data.password)
        return { loginIsValid: true, user };
  }

  return { loginIsValid: false, user: {} };
};
