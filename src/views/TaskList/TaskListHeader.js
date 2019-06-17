import React from 'react'

function TaskListHeader() {
    return (
        <nav class="level border-bottom-1 padding-bottom-3">
            {/*<!-- Left side -->*/}
            <div class="level-left">
                <div class="level-item">
                    <strong>Suggested for you</strong>
                </div>
            </div>

            {/*--<!-- Right side -->--*/}
            <div class="level-right">
                <div class="dropdown is-right">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                            <span>Cloud Storage Environment Settings</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                Overview
                            </a>
                            <a href="#" class="dropdown-item">
                                Modifiers
                            </a>
                            <a href="#" class="dropdown-item">
                                Grid
                            </a>
                            <a href="#" class="dropdown-item">
                                Form
                            </a>
                            <a href="#" class="dropdown-item">
                                Elements
                            </a>
                            <a href="#" class="dropdown-item">
                                Components
                            </a>
                            <a href="#" class="dropdown-item">
                                Layout
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TaskListHeader