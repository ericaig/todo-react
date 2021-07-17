import { useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

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

    /* &:not(.done):hover{
        text-decoration: line-through;
        color: #b4b4b4;
    } */
`

function TodoItem({item}) {
    const [isDone, setIsDone] = useState(item.checked)

    const handleItemClick = () => {
        const _isDone = !isDone
        item.checked = _isDone

        setIsDone(_isDone)

        console.log(item);
    }

    return <TodoItemStyles done={isDone} className={isDone ? 'done' : ''} onClick={handleItemClick}>
        {item.title}
    </TodoItemStyles>
}

TodoItem.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        order: PropTypes.number.isRequired,
    })
}

export default TodoItem