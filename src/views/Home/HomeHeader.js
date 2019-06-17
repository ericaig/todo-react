import React from 'react'

function HomeHeader({ title = "To-Do", subtitle = "Saturdary, June 1st"}) {
    return (
        <section class="hero is-medium_ is-info_ is-bold_">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {title}
                    </h1>
                    <h2 class="subtitle">
                        {subtitle}
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader