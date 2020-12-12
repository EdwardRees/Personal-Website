const encrypt = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let inputValue = document.getElementById("input").value;
  let output = encryptHelper(num1, num2, inputValue);
  document.getElementById("output").innerHTML = `<span>${output}</span>`;
};

const encryptHelper = (num1, num2, inputValue) => {
  let prime1 = num1;
  let prime2 = num2;
  let prime3 = 97;
  let prime4 = 139;
  let input = inputValue;
  console.group("Encrypt");
  console.info(input);
  let inputArray = new Array();
  let output = "";
  for (let char in input) {
    switch (input.charAt(char)) {
      case "1":
        inputArray[char] = 49;
        break;
      case "2":
        inputArray[char] = 50;
        break;
      case "3":
        inputArray[char] = 51;
        break;
      case "4":
        inputArray[char] = 52;
        break;
      case "5":
        inputArray[char] = 53;
        break;
      case "6":
        inputArray[char] = 54;
        break;
      case "7":
        inputArray[char] = 55;
        break;
      case "8":
        inputArray[char] = 56;
        break;
      case "9":
        inputArray[char] = 57;
        break;
      default:
        inputArray[char] = input.charAt(char).charCodeAt(input.charAt(char));
    }
  }
  for (let char in inputArray) {
    inputArray[char] = inputArray[char] * prime1 * prime2 * prime3 * prime4;
  }
  output += `${prime1} ${prime2}|`;
  for (let char in inputArray) {
    output += inputArray[char] + "|";
  }
  output = output.substring(0, output.length - 1);
  console.info(output);

  console.groupEnd();
  return output;
};

const decrypt = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let inputValue = document.getElementById("input").value;
  let output = decryptHelper(num1, num2, inputValue);
  document.getElementById("output").innerHTML = `<span>${output}</span>`;
};

const decryptHelper = (num1, num2, inputValue) => {
  let prime1 = num1;
  let prime2 = num2;
  let prime3 = 97;
  let prime4 = 139;
  console.group("Decrypt");
  let input = inputValue;
  console.info(input);
  input += "|";
  let inputArray = new Array();
  let output = "";

  let input2Array = input.split("|");

  let pulledprimes = input2Array[0];
  if (pulledprimes.includes(" ")) {
    console.group("Decrypt Includes");
    input2Array.splice(0, 1);
    console.info(pulledprimes);
    console.groupEnd();
    let primes = pulledprimes.split(" ");
    prime1 = primes[0];
    prime2 = primes[1];
  }
  console.info(input2Array);

  for (let char in input2Array) {
    inputArray[char] = input2Array[char];
  }
  for (let char in inputArray) {
    inputArray[char] = inputArray[char] / prime1 / prime2 / prime3 / prime4;
  }
  inputArray.pop(-1);
  for (let char in inputArray) {
    output += String.fromCharCode(inputArray[char]);
  }
  console.info(output);
  console.groupEnd();

  return output;
};

const copyText = async (text) => {
  console.group("Copy Text");
  try {
    await navigator.clipboard.writeText(text);
    console.info("written!");
    alert("Copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy!");
  }
  console.groupEnd();
};

const copy = () => {
  console.group("copy");
  let code = document.getElementById("output").innerText;
  console.info(code);

  if (!navigator.clipboard) {
    console.error("Navigator clipboard failed!");
    alert("Failed to copy to clipboard!");
  }
  copyText(code);
  console.groupEnd();
};
