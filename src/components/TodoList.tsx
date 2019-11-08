import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

export interface TodoItem {
  id: number;
  text: string;
  checked: boolean;
}

interface Props {
  todos: TodoItem[];
  onRemove(id: number): void;
  onToggle(id: number): void;
}

function TodoList({ todos, onRemove, onToggle }: Props) {

  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todos[index];

    return (
      <TodoListItem 
        todo={todo}
        key={key}
        onRemove={onRemove}
        onToggle={onToggle}
        style={style}
      />
    )
  }, [onRemove, onToggle, todos]);

  return (
    // <div className="TodoList">
    //   {todos.map((todo: TodoItem) => (
    //     <TodoListItem 
    //       key={todo.id} 
    //       todo={todo} 
    //       onRemove={onRemove}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </div>
    <List 
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
}

export default React.memo(TodoList);
