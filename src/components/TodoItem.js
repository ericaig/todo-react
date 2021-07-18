import { useContext } from "react";
import styled from "styled-components";
import TodoItemInterface from "../types/todoItem";
import { TodoActionSheetContext } from "../contexts/TodoActionSheetContext";

const TodoItemStyles = styled.div`
    border: 1px solid #f4f4f4;
    padding: 1em;
    border-radius: .5em;
    cursor: pointer;
    transition: color 200ms ease-in-out, text-decoration 50ms ease-in-out;
    text-decoration: ${props => props.done ? "line-through" : "none"};
    color: ${props => props.done ? "#b4b4b4" : "black"};

    &:not(:last-child) {
        margin-bottom: 1em;
    }
`

function TodoItem({ item }) {
    const isDone = item.checked

    const { showActionSheet } = useContext(TodoActionSheetContext)

    return <TodoItemStyles done={isDone} className={isDone ? 'done' : ''} onClick={() => showActionSheet(item)}>
        {item.title}
    </TodoItemStyles>
}

TodoItem.propTypes = {
    item: TodoItemInterface
}

export default TodoItem