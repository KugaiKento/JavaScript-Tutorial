function a() {
  console.log("called");
}

a();

let c = (function () {
  console.log("called");

  function publicFn() {
    console.log("publicFn is called");
  }

  //オブジェクトリテラル。外から呼び出せるようになる。
  return {
    publicFn,
  };
})();

c.publicFn();
console.log(c);
