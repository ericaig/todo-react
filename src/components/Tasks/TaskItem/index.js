import React from 'react'

class TaskItem extends React.Component {
    render() {

        return (
            <li class="list-item">
                <input type="checkbox" class="hidden-box" id="second" />
                <label for="second" class="check--label">
                    <span class="check--label-box"></span>
                    <span class="check--label-text">Second Checkbox</span>
                </label>
            </li>
        )
    }
}

export default TaskItem