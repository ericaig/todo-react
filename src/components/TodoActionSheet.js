import styled from "styled-components";
import TodoItemInterface from "../types/todoItem";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoActionSheetStyles = styled.div`
    background-color: white;
    position: absolute;
    bottom: 0;
    padding: 1em;
    width: calc(100% - 2em);
    display: ${props => props.show ? 'block' : 'none'};
`

const TodoActionSheetTitleStyles = styled.h4`
    font-weight: 500;

    // https://css-tricks.com/almanac/properties/l/line-clamp/
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;

    text-decoration: ${props => props.done ? 'line-through' : 'none'};
`

const TodoActionSheetActionsStyles = styled.ol`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const TodoActionSheetActionStyles = styled.li`
    margin-bottom: .5em;
    padding: .5em;
    cursor: pointer;
    background-color: ${props => props.delete ? '#ff4545' : 'whitesmoke'};
    color: ${props => props.delete ? 'white' : 'black'};
    border-radius: 0.2em;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1em;
    
    &:hover {
        background-color: ${props => props.delete ? '#ff6666' : '#e4e4e4'};
    }
`

function TodoActionSheet({ show, item, hideActionSheet }) {
    const { removeTodo, unMarkTodoAsDone, markTodoAsDone, editTodo } = useContext(TodoListContext)

    if (!item || !show) return <></>

    return <TodoActionSheetStyles show={show}>
        <TodoActionSheetTitleStyles done={item.checked}>{item.title}</TodoActionSheetTitleStyles>
        <TodoActionSheetActionsStyles>
            {!item.checked && <TodoActionSheetActionStyles onClick={() => {
                markTodoAsDone(item.id)
                hideActionSheet()
            }}>
                <div className="icon">✅</div>
                <div className="title">Mark as done</div>
            </TodoActionSheetActionStyles>}

            {item.checked && <TodoActionSheetActionStyles onClick={() => {
                unMarkTodoAsDone(item.id)
                hideActionSheet()
            }}>
                <div className="icon">🔄</div>
                <div className="title">Unmark as done</div>
            </TodoActionSheetActionStyles>}

            <TodoActionSheetActionStyles onClick={() => {
                editTodo(item)
                hideActionSheet()
            }}>
                <div className="icon">✍🏽</div>
                <div className="title">Edit</div>
            </TodoActionSheetActionStyles>

            <TodoActionSheetActionStyles onClick={() => {
                removeTodo(item.id)
                hideActionSheet()
            }} delete>
                <div className="icon">❌</div>
                <div className="title">Delete</div>
            </TodoActionSheetActionStyles>

            <TodoActionSheetActionStyles onClick={hideActionSheet} close>
                <div className="icon">⏹</div>
                <div className="title">Close</div>
            </TodoActionSheetActionStyles>
        </TodoActionSheetActionsStyles>
    </TodoActionSheetStyles>
}

TodoActionSheet.propTypes = {
    item: TodoItemInterface,
    show: PropTypes.bool.isRequired,
}

export default TodoActionSheet