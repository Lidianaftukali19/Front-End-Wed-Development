// create component
class Component1 extends ReadableByteStreamController.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span>Display component ke-1.</span> 
        )
            
        
    }
}

// customElements.define('subcomponent', SubComponent);