function incrementFactory() {
  let num = 0;
  function increment() {
    num = num + 1;
    console.log(num);
  }

  return increment;
}

const increment = incrementFactory();

increment();

// 動的な関数生成
function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }

  return addNumber;
}

//出力は15になる。
const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);
