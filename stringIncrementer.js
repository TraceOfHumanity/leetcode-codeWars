function incrementString(strng) {
  let match = strng.match(/\d+$/);
  console.log((match = strng.match(/\d+$/)));
  if (match) {
    let num = match[0];
    console.log(num);
    let len = num.length;
    console.log(len);
    let newNum = (parseInt(num) + 1).toString();
    console.log(newNum);
    if (newNum.length < len) {
      newNum = "0".repeat(len - newNum.length) + newNum;
    }
    return strng.slice(0, -len) + newNum;
  } else {
    return strng + "1";
  }
}

console.log(incrementString("foobar000"));
