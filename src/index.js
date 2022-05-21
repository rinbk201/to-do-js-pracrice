import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liのタグ生成
  const li = document.createElement("li");
  li.innerText = text;
  //divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  //button(完了)の生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）ごと未完了リストから完了したTO DO Listへ
    console.log(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加
    //TODO内容を取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    console.log(addTarget);
    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    console.log(li);
    //buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（div）を完了リストから削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //divタグ子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //console.log(addTarget);
    document.getElementById("complete-list").appendChild(addTarget);
  });
  //button(削除)の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）ごと未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  console.log(completeButton);
  //divタグの子要素に各要素を設定
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-botton")
  .addEventListener("click", () => onClickAdd());
