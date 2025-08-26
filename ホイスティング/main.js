//実行前にメモリに存在するため実行される。
a();

function a() {
  console.log(c);
  var c = 1;

  d();
  function d() {
    console.log("d is called");
  }
}

//undefiendになる。JSが持っている特殊な値。値が未定義という意味
console.log(b);
var b = 0;

/*
エラーになる
letやconstではundefindによる初期化が行われない。
varとlet,constでは挙動が異なってくるためvarは非推奨とされている。
*/

console.log(e);
let e = 0;

/*
関数と関数式では初期化時に挙動が異なる。関数式ではエラーになる。
*/

// ReferenceError
console.log(f);

const f = function () {
  console.log("関数式が呼ばれました");
};
