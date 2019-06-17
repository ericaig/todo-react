import React from 'react'

class SideMenuTagItem extends React.Component {
    render() {
        //let's create default prop values
        const {
            text = "primary**",
            active = false,
            route = "#",
            color = "is-primary"
        } = this.props;

        const activeClass = active ? "is-active" : "";

        return (
            <li>
                <a href={route}>
                    <span class={`tag ${color} is-medium ${activeClass}`}>
                        #{text}
                    </span>
                </a>
            </li>
        )
    }
}

export default SideMenuTagItem