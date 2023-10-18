"use strict";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header>HeaderPage</Header>
                <section>
                <nav>SIdebarPage</nav>
                <article>ContentPage</article>
                </section>
                <footer>FooterPage</footer>
                
            </div>
        )
    }
}