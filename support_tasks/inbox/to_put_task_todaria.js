let inExecuter;
for (const iterator of [
  ...document.querySelectorAll(".select__text-overflow"),
]) {
  // console.log(iterator);
  if (iterator.innerText === "Дарья Лаппалайнен") {
    inExecuter = iterator;
    break;
  }
}

if (inExecuter !== undefined) {
  //   inExecuter.click();
  console.log("good");
} else {
  console.log("not good");
}
