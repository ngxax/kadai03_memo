// $("main").slideDown(500);

// //1.Save クリックイベント
// $("#save").on("click",function(){
//     const v = $("#text-area01").val();
//     localStorage.setItem("memo",v)
//     alert("保存しました");
// });

// //2.clear クリックイベント

// $("#clear").on("click",function(){
//     localStorage.removeItem("memo");
//     alert("削除しました");
//     $("text-area").val("");
// });


// //3.ページ読み込み：保存データ取得表示
// if(localStorage.getItem("memo")){
//     const v = localStorage.getItem("memo");
//     $("#text-area01").val(v);

// }