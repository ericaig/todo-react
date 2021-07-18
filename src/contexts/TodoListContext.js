import { nanoid } from "nanoid";
import { createContext, useState } from "react";

export const TodoListContext = createContext();

export default function TodoListProvider({ children }) {
    const _defaultItems = [
        {
            id: nanoid(),
            title: "Aute officia elit aute Lorem sit nostrud incididunt anim nulla anim.",
            checked: false,
            order: 0,
        },
        {
            id: nanoid(),
            title: "Eu aliquip elit laboris Lorem nulla id.",
            checked: true,
            order: 0,
        },
        {
            id: nanoid(),
            title: "In dolore aliquip ex laborum cillum qui laboris.",
            checked: false,
            order: 0,
        },
    ]

    const [_state, setState] = useState({ items: _defaultItems, itemToUpdate: undefined })

    const addTodo = (_title) => {
        const title = (_title || "").trim()

        if (!title) return alert("Please provide a title")

        const todo = { id: nanoid(), title, checked: false, order: 0 }

        setState({ items: [..._state.items, todo], itemToUpdate: undefined })
    }

    const removeTodo = (id) => {
        setState({ items: [..._state.items.filter(item => item.id !== id)], itemToUpdate: undefined })
    }

    const _findAndSetCheckedState = (id, _checked) => {
        const [_item] = _state.items.filter(item => item.id === id)

        if (!_item) return alert("No item found")

        setState({
            items: [..._state.items.map(item => {
                if (item.id === id) item.checked = _checked

                return item
            })], itemToUpdate: undefined
        })
    }

    const markTodoAsDone = (id) => _findAndSetCheckedState(id, true)
    const unMarkTodoAsDone = (id) => _findAndSetCheckedState(id, false)

    const editTodo = (item) => {
        const [_item] = _state.items.filter(v => v.id === item.id)

        if (!_item) return alert("No item found")

        setState({ ..._state, itemToUpdate: item })
    }

    const updateTodo = (item)=>{
        const [_item] = _state.items.filter(v => v.id === item.id)

        if (!_item) return alert("No item found")

        setState({
            items: [..._state.items.map(v => {
                if (v.id === item.id) v = item

                return v
            })], itemToUpdate: undefined
        })
    }

    return <TodoListContext.Provider value={{ items: _state.items, itemToUpdate: _state.itemToUpdate, addTodo, removeTodo, markTodoAsDone, unMarkTodoAsDone, editTodo, updateTodo }}>
        {children}
    </TodoListContext.Provider>
}