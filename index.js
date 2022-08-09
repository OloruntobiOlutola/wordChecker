exports.isPangram = (string) => {
  let array = [
    ...new Set(
      string
        .toLowerCase()
        .split("")
        .filter((item) => /[a-z]/i.test(item) === true)
    ),
  ];
  if (array.length === 26) return true;
  else return false;
};

exports.anagrams = (str, arr) => {
  str = str.split("").sort().join("");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let myarr = arr[i].split("").sort().join("");
    if (str === myarr) {
      result.push(arr[i]);
    }
  }
  return result;
};
