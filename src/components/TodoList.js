import { useContext } from "react"
import styled from "styled-components"
import { TodoListContext } from "../contexts/TodoListContext"
import TodoItem from "./TodoItem"

const TodoListStyles = styled.div`
    padding: 1em;
`

export default function TodoList() {
    const { items } = useContext(TodoListContext)
    // const visibleItems = 3

    // const titles = []

    // const items = titles.map((title, i) => (
    //     { id: nanoid(), title, checked: i === 4, order: i }
    // ))

    return <TodoListStyles>
        {items.map((item, i) => {

            return <TodoItem key={i} item={item} />
        })}
    </TodoListStyles>
}