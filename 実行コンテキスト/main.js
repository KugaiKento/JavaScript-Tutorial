// JavaScriptファイルの直下に書かれたものはグローバルコンテキストになる。
let a = 0;

function b() {
  // この中は関数コンテキスト
  // 関数の外の変数は外部変数という
  console.log(this, arguments, a);
}

console.log(a);
b();
