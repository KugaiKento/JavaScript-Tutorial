let a = 2;
//レキシカルスコープ
//自身のスコープの外側の変数は参照できる。
function fn1() {
  let b = 1;
  function fn2() {
    let c = 3;
    console.log(b);
  }
  fn2();
}

fn1();
