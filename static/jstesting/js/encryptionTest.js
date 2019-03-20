function encrypt(prime1, prime2, input) {
    var prime1 = prime1;
    var prime2 = prime2;
    var prime3 = 97;
    var prime4 = 139;
    var input = input;
    var inputArray = new Array();
    var output = "";
    for (var char in input) {
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
    for (var char in inputArray) {
      inputArray[char] = inputArray[char] * prime1 * prime2 * prime3 * prime4;
    }
    for (var char in inputArray) {
      output += inputArray[char] + "|";
    }
    output = output.substring(0, output.length - 1);
  
    var x = output;
    console.log(output);
  }
  
  function decrypt(prime1,prime2,input) {
    var prime1 = prime1;
    var prime2 = prime2;
    var prime3 = 97;
    var prime4 = 139;
    var input = input;
    input += "|";
    var inputArray = new Array();
    var output = "";
  
    var input2Array = input.split("|");
  
    for (var char in input2Array) {
      inputArray[char] = input2Array[char];
    }
    for (var char in inputArray) {
      inputArray[char] = inputArray[char] / prime1 / prime2 / prime3 / prime4;
    }
    inputArray.pop(-1);
    for (var char in inputArray) {
      output += String.fromCharCode(inputArray[char]);
    }
  
    var x = output;
    console.log(output);
  }
  
  encrypt(319,102,"Hello World!!");