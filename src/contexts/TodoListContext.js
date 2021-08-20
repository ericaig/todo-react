import { nanoid } from "nanoid";
import { createContext, useState } from "react";

export const TodoListContext = createContext();

export default function TodoListProvider({ children }) {
    const STORAGE_KEY = "todoItems";

    const retrieveItemsFromStorage = () => JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]")

    const [_state, setState] = useState({ items: retrieveItemsFromStorage(), itemToUpdate: undefined })

    const saveToStorage = _items => window.localStorage.setItem(STORAGE_KEY, JSON.stringify(_items))

    const _setStateAndSave = (_object = {}) => {
        // setState(_object)
        setState(_st => {
            const _newState = ({ ..._st, ..._object })

            saveToStorage(_newState.items)

            return _newState
        })
    }

    const addTodo = (_title) => {
        const title = (_title || "").trim()

        if (!title) return alert("Please provide a title")

        const todo = { id: nanoid(), title, checked: false, order: 0 }

        _setStateAndSave({ items: [..._state.items, todo], itemToUpdate: undefined })
    }

    const removeTodo = (id) => _setStateAndSave({ items: [..._state.items.filter(item => item.id !== id)], itemToUpdate: undefined })

    const _findAndSetCheckedState = (id, _checked) => {
        const _item = _state.items.find(item => item.id === id)

        if (!_item) return alert("No item found")

        _setStateAndSave({
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

    const updateTodo = (item) => {
        const [_item] = _state.items.filter(v => v.id === item.id)

        if (!_item) return alert("No item found")

        _setStateAndSave({
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
