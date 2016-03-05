var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');
var TodoItem = require('./TodoItem.react');

var MainSection = React.createClass({

  propTypes: {
    allTodos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired
  },

  render: function () {
    var allTodos = this.props.allTodos;
    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }
    console.log(this.todos);
    return (
      <section id="main">
        <ul id="todo-list">{todos}</ul>
      </section>
    );
  }

});

module.exports = TodoItem;
