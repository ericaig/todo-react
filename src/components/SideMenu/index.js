import React from 'react'
import SideMenuItem from './SideMenuItem'
import SideMenuTagItem from './SideMenuItem/tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faClipboardList, faListUl, faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons'

class SideMenu extends React.Component {
    render() {
        const tasks = [1, 2, 3, 4, 5, 6, 7, 8]; //just for simulation purposes
        const tasks2 = [1, 2, 3, 4]; //just for simulation purposes
        const tasks3 = [1,2]; //just for simulation purposes

        return (
            <aside class="menu">
                <ul class="menu-list">
                    <li id="user-details">
                        <span class="icon has-background-white-ter">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </span>
                        <span class="">
                            Eric Aig
                        </span>
                    </li>
                    <SideMenuItem icon={faCloudSun} text="My day" tasks={tasks} />
                    <SideMenuItem icon={faClipboardList} text="To-Do" active="true" tasks={tasks3} />
                </ul>
                
                <p class="menu-label">Custom lists</p>

                <ul class="menu-list">
                    <SideMenuItem icon={faListUl} text="Invitations" />
                    <SideMenuItem icon={faListUl} text="Cloud Storage Environment Settings" />
                    <SideMenuItem icon={faListUl} text="Authentication" tasks={tasks2} />
                    <li>
                        <a class="has-text-link">
                            <span class="icon has-text-info is-medium">
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                            <span class="is-link">New List</span>
                        </a>
                    </li>
                </ul>

                <p class="menu-label">Tags</p>

                <ul class="menu-list">
                    <SideMenuTagItem color="is-primary" text="primary1" />
                </ul>
            </aside>
        )
    }
}

export default SideMenu