function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);

  const regex = /^[A-Za-z]+$/;
  if (!regex.test(inputText)) {
    alert("Please enter a valid name containing only alphabetic characters.");
    return false;
  }

  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  if (names.includes(inputText)) {
    alert("Welcome, Captain!");
    return true;
  } else {
    alert("Enter a valid captain name");
    return false;
  }
}

export { checkForName };
