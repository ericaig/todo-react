import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class SideMenuItem extends React.Component {
    render() {
        //let's create default prop values
        const {
            icon = faCoffee,
            text = "This is the default text.... Eric Aig",
            active = false,
            route = "#",
            tasks = []
        } = this.props;

        return (
            <li>
                <a href={route} className={active ? "is-active" : ""}>
                    <span class="icon is-medium" className={!active ? "has-text-info" : ""}><FontAwesomeIcon icon={icon} /></span>&nbsp;
                    <span className={active ? "has-text-weight-semibold" : ""}>
                        {text}
                        {tasks.length > 0 && <span>&nbsp; <span class="tag is-light">{tasks.length}</span></span>}
                    </span>
                </a>
            </li>
        )
    }
}

export default SideMenuItem