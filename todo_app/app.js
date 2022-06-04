const form = document.querySelector("#todo-form");
const input = document.querySelector("input[name='todo-item']");
const ul = document.querySelector("ul");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

const createLi = (input) => {
  const li = document.createElement("li");
  const p = document.createElement("p");

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerText = "Delete";

  const completed = document.createElement("input");
  completed.type = "checkbox";
  completed.checked = false;
  const label = document.createElement("label");
  label.innerHTML = "Completed?";

  p.innerText = input;
  li.append(p);
  ul.append(li);
  li.append(label);
  li.append(deleteBtn);
  label.append(completed);

  return li;
};

const todosToStorage = () =>
  localStorage.setItem("todos", JSON.stringify(todos));

const createTextDecoration = (item, conditional) =>
  (item.style.textDecoration = conditional ? "line-through" : "none");

const removeItem = (e) => {
  e.target.parentElement.remove();
  const text = e.target.parentElement.firstChild.innerText;
  const todo = todos.find((todo) => todo.input === text);
  const i = todos.indexOf(todo);
  todos.splice(i, 1);

  todosToStorage();
};

if (todos.length > 0)
  todos.forEach((todo) => {
    const li = createLi(todo.input);
    li.firstChild.nextSibling.firstElementChild.checked = todo.checked;
    createTextDecoration(li, todo.checked);
    return li;
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim().length < 1) {
    alert("Input cannot be empty");
    return;
  }

  createLi(input.value);
  todos.push({ input: input.value, checked: false });

  todosToStorage();
  input.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    removeItem(e);
  } else if (e.target.tagName === "INPUT") {
    createTextDecoration(
      e.target.parentElement.parentElement,
      e.target.checked
    );

    const text = e.target.parentElement.previousSibling.innerText;
    todos.forEach((todo) => {
      if (todo.input === text) todo.checked = e.target.checked;
    });

    todosToStorage();
  }
});
