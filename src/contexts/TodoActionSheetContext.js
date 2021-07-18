import { createContext, useState } from "react";
import Backdrop from "../components/Backdrop";
import TodoActionSheet from "../components/TodoActionSheet";

export const TodoActionSheetContext = createContext()

export default function TodoActionSheetProvider({ children }) {
    const _defaultState = { isVisible: false, todoItem: undefined };

    const [_state, setActionSheetState] = useState(_defaultState)

    const showActionSheet = (_todoItem) => {
        if (typeof _todoItem !== 'object') return alert(`Todo item can't be ${typeof _todoItem}`)

        setActionSheetState({ isVisible: true, todoItem: _todoItem })
    }

    const hideActionSheet = () => setActionSheetState({ ..._defaultState })

    return <TodoActionSheetContext.Provider value={{ isVisible: _state.isVisible, showActionSheet }}>
        {children}
        <Backdrop show={_state.isVisible} onClick={hideActionSheet} />
        <TodoActionSheet show={_state.isVisible} item={_state.todoItem} hideActionSheet={hideActionSheet} />
    </TodoActionSheetContext.Provider>
}