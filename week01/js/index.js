let todo_input = document.getElementById("todo_input");
let todo_ul = document.getElementById("todo_ul");
let done_ul = document.getElementById("done_ul");

todo_input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const doLi = document.createElement("li");
    const doDiv = document.createElement("div");
    const doSpan = document.createElement("span");
    const dpBtn = document.createElement("button");

    doLi.appendChild(doDiv);
    doDiv.appendChild(doSpan);
    doDiv.appendChild(dpBtn);

    doLi.setAttribute("id", "todo_li");
    doDiv.setAttribute("id", "todo_div");
    dpBtn.setAttribute("id", "done_btn");

    dpBtn.textContent = "완료";
    doSpan.textContent = todo_input.value;

    todo_ul.appendChild(doLi);
    todo_input.value = "";

    dpBtn.addEventListener("click", function () {
      todo_ul.removeChild(doLi);

      const doneLi = document.createElement("li");
      const doneDiv = document.createElement("div");
      const doneSpan = document.createElement("span");
      const doneBtn = document.createElement("button");

      doneLi.appendChild(doneDiv);
      doneDiv.appendChild(doneSpan);
      doneDiv.appendChild(doneBtn);

      doneLi.setAttribute("id", "done_li");
      doneDiv.setAttribute("id", "done_div");
      doneBtn.setAttribute("id", "delete_btn");

      doneBtn.textContent = "삭제";
      doneSpan.textContent = doSpan.innerText;

      done_ul.appendChild(doneLi);

      doneBtn.addEventListener("click", function () {
        done_ul.removeChild(doneLi);
      });
    });
  }
});
