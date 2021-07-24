import styled from "styled-components";
import AddTodoForm from "./components/AddTodoForm";
import Divider from "./components/Divider";
import TodoList from "./components/TodoList";
import TodoActionSheetProvider from "./contexts/TodoActionSheetContext";
import TodoListProvider from "./contexts/TodoListContext";

const AppStyles = styled.div``
const TitleStyles = styled.h1`
    font-size: 2.5rem;
    margin-top: 1em;
    margin-bottom: 1rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
`



function App() {
    return (
        <AppStyles>
            <TitleStyles>Todo App</TitleStyles>
            <TodoListProvider>
                <TodoActionSheetProvider>
                    <TodoList />
                    <Divider />
                    <AddTodoForm />
                </TodoActionSheetProvider>
            </TodoListProvider>
        </AppStyles>
    );
}

export default App;
