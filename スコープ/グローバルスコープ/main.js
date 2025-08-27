let a = 0; //スクリプトスコープ
var b = 0; //グローバルスコープ
function c() {} //グローバルスコープ

// このような書き方はあまりしない。
console.log(window.b);

//　グローバルオブジェクトは省略できる。
console.log(b);

// あまりこのような書き方はしないが、以下のような書き方もできる。
window.d = 1;
let d = 2;
// スコープチェーンによりletが優先される。
console.log(d);
