import { nanoid } from "nanoid"
import styled from "styled-components"
import TodoItem from "./TodoItem"

const TodoListStyles = styled.div`
    padding: 1em;
`

export default function TodoList() {
    const visibleItems = 3

    const titles = [
        "Officia elit laborum do enim magna mollit irure.",
        "Occaecat pariatur id eu ad proident labore laborum in cupidatat in.",
        "Labore dolor reprehenderit enim ad elit qui reprehenderit proident voluptate.",
        "Consectetur excepteur in aute nisi ad.",
        "Aliqua labore id id excepteur excepteur in anim cillum labore non nostrud anim.",
        "Culpa sint eu voluptate veniam ea officia aliqua occaecat magna reprehenderit ipsum.",
        "Eu sint pariatur aute ipsum mollit amet ex mollit amet duis magna labore.",
        "Ipsum quis consectetur sunt occaecat culpa mollit deserunt in adipisicing sint nulla excepteur ea.",
        "Culpa amet deserunt mollit Lorem aliquip consequat id consequat irure ipsum.",
        "Labore amet ipsum sit ea labore enim.",
        "Ad fugiat culpa esse nostrud ut officia ut ut aliqua.",
        "Dolor deserunt ad dolore culpa irure enim exercitation mollit ea.",
        "Veniam aliqua anim deserunt mollit.",
        "In consequat occaecat laboris esse.",
        "Sit nostrud labore enim sit ea do occaecat do aliqua nisi adipisicing nisi.",
        "Id do est magna elit id ad esse aliqua deserunt aute non.",
        "Veniam ipsum Lorem duis anim duis Lorem fugiat ipsum.",
        "Commodo ad in consectetur veniam est voluptate sit ut.",
        "Minim nisi commodo ea veniam.",
    ]

    const items = titles.map((title, i) => (
        { id: nanoid(), title, checked: i === 4, order: i }
    ))

    return <TodoListStyles>
        {items.map((item, i) => {

            return <TodoItem key={i} item={item} />
        })}
    </TodoListStyles>
}