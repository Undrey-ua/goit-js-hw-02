function checkForSpam(string) {
  let check =
    string.toLowerCase().includes("sale") ||
    string.toLowerCase().includes("spam");
  return check;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
