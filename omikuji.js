var username;
var userresult;
username = prompt("お名前を教えて下さい。");
/promptは、入力ダイアログを表示させる命令/

if (username == "") {
  username = "名無し";
}

document.getElementById("name").innerHTML = username;
/"name"というidを持つタグに囲まれている文字列を、usernameという箱に入っている値で上書きする、という命令/  

var rand = Math.floor( Math.random() * 5) ;
/「Math.floor( Math.random() * 5)」が実行されると、ランダムで0,1,2,3,4の数値のどれかが取得できる/ 

if (rand == 0) {
    userresult = "大吉";
}
if (rand == 1) {
    userresult = "中吉";
}
  if (rand == 2) {
    userresult = "小吉";
}
  if (rand == 3) {
    userresult = "吉";
}
  if (rand == 4) {
    userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;

