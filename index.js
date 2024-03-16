


/*let dateOfBirth;
const settingCog = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterButtonEl = document.getElementById("afterButton");
const doButtonEl = document.getElementById("doButton");
const doInputEl = document.getElementById("doInput");
const containerEl = document.querySelector(".container");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const digitNumber = (number) => {
   return number > 9 ? number : `0${number}`;
}

const toggleDataOfBirth = () => {
    settingContent.classList.toggle('hide');
};

const updateAge = () => {
   const currentDate = new Date();
   const dateD = currentDate - dateOfBirth;
   const year = Math.floor(dateD / (1000 * 60 * 60 * 24 * 365));
   const month = Math.floor(dateD / (1000 * 60 * 60 * 24 * 30) % 12);
   const day = Math.floor(dateD / (1000 * 60 * 60 * 24)) % 30;
   const hour = Math.floor(dateD / (1000 * 60 * 60)) % 24;
   const minute = Math.floor(dateD / (1000 * 60)) % 60;
   const second = Math.floor(dateD / 1000) % 60;

   yearEl.innerHTML = digitNumber(year);
   monthEl.innerHTML = digitNumber(month);
   dayEl.innerHTML = digitNumber(day);
   hourEl.innerHTML = digitNumber(hour);
   minuteEl.innerHTML = digitNumber(minute);
   secondEl.innerHTML = digitNumber(second);
};

const localStorageGet = () => {
   const year = localStorage.getItem('year');
   const month = localStorage.getItem('month');
   const date = localStorage.getItem('date');

   if (year && month && date) {
      dateOfBirth = new Date(year, month, date);
   }
   updateAge();
};
 
const setDobHandler = () => {
   const dateString = doInputEl.value;
   dateOfBirth = dateString ? new Date(dateString) : null;

   if (dateOfBirth) {
      localStorage.setItem('year', dateOfBirth.getFullYear());
      localStorage.setItem('month', dateOfBirth.getMonth());
      localStorage.setItem('date', dateOfBirth.getDate());
      afterButtonEl.classList.remove('hide');
      initialTextEl.classList.add('hide');
      updateAge();
      setInterval(updateAge, 1000);
   } else {
      alert("Please enter a valid date of birth!");
   }
};

localStorageGet();

settingCog.addEventListener("click", toggleDataOfBirth);
doButtonEl.addEventListener("click", setDobHandler);*/



let dateOfBirth;
const settingCog = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterButtonEl = document.getElementById("afterButton");
const doButtonEl = document.getElementById("doButton");
const doInputEl = document.getElementById("doInput");
const containerEl = document.querySelector(".container");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const digitNumber = (number) => {
   return number > 9 ? number : `0${number}`;
}

const toggleDataOfBirth = () => {
    settingContent.classList.toggle('hide');
};

const updateAge = () => {
   const currentDate = new Date();
   const dateD = currentDate - dateOfBirth;
   const year = Math.floor(dateD / (1000 * 60 * 60 * 24 * 365));
   const month = Math.floor(dateD / (1000 * 60 * 60 * 24 * 30) % 12);
   const day = Math.floor(dateD / (1000 * 60 * 60 * 24)) % 30;
   const hour = Math.floor(dateD / (1000 * 60 * 60)) % 24;
   const minute = Math.floor(dateD / (1000 * 60)) % 60;
   const second = Math.floor(dateD / 1000) % 60;

   yearEl.innerHTML = digitNumber(year);
   monthEl.innerHTML = digitNumber(month);
   dayEl.innerHTML = digitNumber(day);
   hourEl.innerHTML = digitNumber(hour);
   minuteEl.innerHTML = digitNumber(minute);
   secondEl.innerHTML = digitNumber(second);
};

const localStorageGet = () => {
   const year = localStorage.getItem('year');
   const month = localStorage.getItem('month');
   const date = localStorage.getItem('date');

   if (year && month && date) {
      dateOfBirth = new Date(year, month, date);
   } else {
      // Ha nincs érvényes életkor érték a localStorage-ban, akkor nullázzuk az életkort
      dateOfBirth = null;
      yearEl.innerHTML = "00";
      monthEl.innerHTML = "00";
      dayEl.innerHTML = "00";
      hourEl.innerHTML = "00";
      minuteEl.innerHTML = "00";
      secondEl.innerHTML = "00";
   }
};
 
const setDobHandler = () => {
   const dateString = doInputEl.value;
   dateOfBirth = dateString ? new Date(dateString) : null;

   if (dateOfBirth) {
      localStorage.setItem('year', dateOfBirth.getFullYear());
      localStorage.setItem('month', dateOfBirth.getMonth());
      localStorage.setItem('date', dateOfBirth.getDate());
      afterButtonEl.classList.remove('hide');
      initialTextEl.classList.add('hide');
      updateAge();
      setInterval(updateAge, 1000);
   } else {
      alert("Please enter a valid date of birth!");
   }
};

localStorageGet();

settingCog.addEventListener("click", toggleDataOfBirth);
doButtonEl.addEventListener("click", setDobHandler);

