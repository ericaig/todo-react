import React from 'react'
import SideMenu from 'Components/SideMenu'
import HomeHeader from './HomeHeader';
import TaskListHeader from '../TaskList/TaskListHeader';
import TaskList from '../TaskList/index';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div class="columns is-gapless">
                    <div id="side-menu-container" class="column is-one-quarter">
                        <div class="container padding-2">
                            <SideMenu />
                        </div>
                    </div>

                    <div id="pg-content" class="column has-background-info">
                        <HomeHeader />
                        <section class="section padding-3">
                            <div class="notification is-light text-align-center">
                                Get your day started with this to-do list
                            </div>
                            <section id="list-section" class="section has-background-white-bis padding-2">
                                <TaskListHeader />
                                <TaskList />
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home