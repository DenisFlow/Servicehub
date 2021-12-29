///////////////////////////////////
// support\.srvhub\.ru.+page
///////////////////////////////////
// Make color tasks in support
try {
  setInterval(function () {
    var table = document.querySelectorAll(".el-tooltip span span");
    // var isMakeColoredPlusOne = false;
    var color = null;
    for (let index = 0; index < table.length; index++) {
      const element = table[index];

      // if (isMakeColoredPlusOne) {
      //   isMakeColoredPlusOne = false;
      //   // element.style.background = color;
      // }

      //   " Неприсвоенный "
      if (element.textContent == " Неприсвоенный ") {
        //   console.log(element);
        color = "red";
        // element.style.background = color;
        element.parentElement.parentElement.parentElement.parentElement.style.background =
          color;
        document.querySelector(".metro-padding").style.background = color;
        // isMakeColoredPlusOne = true;
      } else if (element.textContent == " Павел Погиба ") {
        color = "#FEE1DB";
        // element.style.background = color;
        element.parentElement.parentElement.parentElement.parentElement.style.background =
          color;
        // isMakeColoredPlusOne = true;
      } else if (element.textContent == " Денис Давыденко ") {
        // color = "#98F951";
        color = "#DCFEC2";
        // element.style.background = color;
        element.parentElement.parentElement.parentElement.parentElement.style.background =
          color;
        // isMakeColoredPlusOne = true;
        // } else if (element.textContent == " Марина Александрова ") {
        //   color = "#FAAD60";
        //   // element.style.background = color;
        //   element.parentElement.parentElement.parentElement.parentElement.style.background =
        //     color;
        //   isMakeColoredPlusOne = true;
        // } else {
        //   isMakeColoredPlusOne = false;
      }
    }
  }, 1000);
} catch (error) {}

try {
  setInterval(function () {
    location.reload();
  }, 10000);
} catch (error) {}
