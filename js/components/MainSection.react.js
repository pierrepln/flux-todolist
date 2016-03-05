var allTodos = this.props.allTodos;

for (var key in allTodos) {
  todos.push(<TodoItem key={key} todo={allTodos[key]} />);
}

return (
  <section id="main">
    <ul id="todo-list">{todos}</ul>
  </section>
);
