const handleSubmit = (e) => {
  // e.preventDefault()
  // if (document.myForm.name.value == "") {
  //   alert("Please provide your name!");
  //   document.myForm.name.focus();
  //   return false;
  // }
  // if (document.myForm.cars.value == "-1") {
  //   alert("Please select your car size!");
  //   return false;
  // }

  // if (document.myForm.space.value == "-1") {
  //   alert("choose your packing space");
  // }
  // window.localStorage.setItem("name", "cars", "space");
  // return true;
  let date = new Date();
  let time = date.getHours() + " :" + date.getMinutes();
  let name, size, space;

  name = document.getElementById("name").value;
  size = document.getElementById("size").value;
  space = document.getElementById("space").value;

  localStorage.setItem("name", name);
  localStorage.setItem("size", size);
  localStorage.setItem("space", space);
  localStorage.setItem("time", time);
};

const book1 = () => {
  document.getElementById("text1").innerHTML = "Booked";
  document.getElementById("my").style.backgroundColor = "lightblue";
};
const book2 = () => {
  document.getElementById("text2").innerHTML = "Booked";
  document.getElementById("my1").style.backgroundColor = "lightblue";
};
const book3 = () => {
  document.getElementById("text3").innerHTML = "Booked";
  document.getElementById("my2").style.backgroundColor = "lightblue";
};
const book4 = () => {
  document.getElementById("text4").innerHTML = "Booked";
  document.getElementById("my3").style.backgroundColor = "lightblue";
};
const book5 = () => {
  document.getElementById("text5").innerHTML = "Booked";
  document.getElementById("my4").style.backgroundColor = "lightblue";
};
const book6 = () => {
  document.getElementById("text6").innerHTML = "Booked";
  document.getElementById("my5").style.backgroundColor = "lightblue";
};
const book7 = () => {
  document.getElementById("text7").innerHTML = "Booked";
  document.getElementById("my6").style.backgroundColor = "lightblue";
};
const book8 = () => {
  document.getElementById("text8").innerHTML = "Booked";
  document.getElementById("my7").style.backgroundColor = "lightblue";
};
const book9 = () => {
  document.getElementById("text9").innerHTML = "Booked";
  document.getElementById("my8").style.backgroundColor = "lightblue";
};
const book10 = () => {
  document.getElementById("text10").innerHTML = "Booked";
  document.getElementById("my9").style.backgroundColor = "lightblue";
};
const book11 = () => {
  document.getElementById("text11").innerHTML = "Booked";
  document.getElementById("my10").style.backgroundColor = "lightblue";
};
const book12 = () => {
  document.getElementById("text12").innerHTML = "Booked";
  document.getElementById("my11").style.backgroundColor = "lightblue";
};
const book13 = () => {
  document.getElementById("text13").innerHTML = "Booked";
  document.getElementById("my12").style.backgroundColor = "lightblue";
};
const book14 = () => {
  document.getElementById("text14").innerHTML = "Booked";
  document.getElementById("my13").style.backgroundColor = "lightblue";
};
const book15 = () => {
  document.getElementById("text15").innerHTML = "Booked";
  document.getElementById("my14").style.backgroundColor = "lightblue";
};
const book16 = () => {
  document.getElementById("text16").innerHTML = "Booked";
  document.getElementById("my15").style.backgroundColor = "lightblue";
};
const book17 = () => {
  document.getElementById("text17").innerHTML = "Booked";
  document.getElementById("my16").style.backgroundColor = "lightblue";
};
const book18 = () => {
  document.getElementById("text18").innerHTML = "Booked";
  document.getElementById("my17").style.backgroundColor = "lightblue";
};
const book19 = () => {
  document.getElementById("text19").innerHTML = "Booked";
  document.getElementById("my18").style.backgroundColor = "lightblue";
};
const book20 = () => {
  document.getElementById("text20").innerHTML = "Booked";
  document.getElementById("my19").style.backgroundColor = "lightblue";
};
