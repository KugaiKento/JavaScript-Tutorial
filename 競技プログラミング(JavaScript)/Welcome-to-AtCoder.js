function Main(input) {
  input = input.split("\r\n");
  let tmp = input[1].split(" ");

  var a = parseInt(input[0]);
  var b = parseInt(tmp[0]);
  var c = parseInt(tmp[1]);

  var s = input[2];

  console.log(a + b + c, s);
}

Main(require("fs").readFileSync("test.txt", "utf8"));
//  main(require('fs').readFileSync('/dev/stdin', 'utf8'));
