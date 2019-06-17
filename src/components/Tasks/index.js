import React from 'react'
import TaskItem from './TaskItem/index';

class Tasks extends React.Component {
    render() {

        return (
            <section class="is-paddingless">
                <ul class="list">
                    <TaskItem/>
                </ul>
            </section>
        )
    }
}

export default Tasks