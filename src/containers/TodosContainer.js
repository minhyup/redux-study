import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';
function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onCreate = (text) => dispatch(addTodo(text));
  // const onToggle = (id) => dispatch(toggleTodo(id));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
  return (
    <div>
      <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    </div>
  );
}

export default TodosContainer;
