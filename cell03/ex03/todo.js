const list = document.getElementById("ft_list");

window.onload = () => {
  const saved = getCookie("todos");
  if (saved) JSON.parse(saved).forEach(text => addTodo(text));
};

function newTodo() {
  let text = prompt("Enter a TO DO:");
  if (text) addTodo(text, true);
}


function addTodo(text, save=false) {
  let div = document.createElement("div");
  div.textContent = text;
  div.onclick = () => removeTodo(div);
  list.prepend(div);

  if (save) saveTodos();
}


function removeTodo(div) {
  if (confirm("Remove this TO DO?")) {
    div.remove();
    saveTodos();
  }
}


function saveTodos() {
  let todos = [];
  document.querySelectorAll("#ft_list div").forEach(d => todos.push(d.textContent));
  document.cookie = "todos=" + JSON.stringify(todos) + ";path=/";
}


function getCookie(name) {
  let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}
