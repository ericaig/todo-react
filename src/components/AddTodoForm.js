import { useContext } from "react"
import styled from "styled-components"
import { TodoActionSheetContext } from "../contexts/TodoActionSheetContext"
import { TodoListContext } from "../contexts/TodoListContext"
import useForm from "../hooks/useForm"

const FormContainerStyles = styled.div`
    background-color: whitesmoke;
    position: absolute;
    bottom: 0;
    padding: 1em;
    width: calc(100% - 2em);
    box-shadow: 0 0 1em #b4b4b498;
    display: ${props => !props.show ? 'block' : 'none'};
`

const FormStyles = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: .5em;
    padding: 1em;
`

const InputLabelStyles = styled.label`
    &::after {
        content: " *";
        color: red;
    }
`

const InputStyles = styled.input`
    display: block;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:focus {
        color: #212529;
        background-color: #fff;
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
`

const ButtonStyles = styled.button`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    -webkit-appearance: button;
    text-transform: none;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    cursor: pointer;

    &:focus {
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
        box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
    }
`

export default function AddTodoForm() {
    const { show: actionSheetIsVisible } = useContext(TodoActionSheetContext)
    const { addTodo, updateTodo, itemToUpdate } = useContext(TodoListContext)

    const { inputs, handleChange, clearForm } = useForm({ title: itemToUpdate?.title || "" })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const title = (e.target.title.value || "").trim()

        if (!title) return alert("Title input can't be empty")

        if (itemToUpdate) {
            itemToUpdate.title = title
            updateTodo(itemToUpdate)
        }
        else addTodo(title)

        clearForm();
    }

    return <FormContainerStyles show={actionSheetIsVisible}>
        <FormStyles onSubmit={handleFormSubmit}>
            <InputLabelStyles htmlFor="title">Title</InputLabelStyles>
            <InputStyles
                id="title"
                type="text"
                autoComplete="off"
                name="title"
                value={inputs.title}
                onChange={handleChange}>
            </InputStyles>
            <ButtonStyles type="submit">{itemToUpdate ? "Update" : "Add"}</ButtonStyles>
        </FormStyles>
    </FormContainerStyles>
}