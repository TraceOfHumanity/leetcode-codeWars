const a = (value) => {
  return value.split("").map((char) => {
    const binary = char.charCodeAt(0);
    return binary.toString(2).padStart(8, "0");
  })
};

console.log(a("hello"));
