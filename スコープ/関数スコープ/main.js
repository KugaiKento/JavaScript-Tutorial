function a() {
  // 関数の波カッコの中に囲まれたものを関数スコープと呼ぶ。
  let b = 0;
  console.log(b);
}
a();

{
  //この中はブロックスコープ
  //if文ではvar二十日はない方がいいのかな？
  let c = 1;
  console.log(c);
}
