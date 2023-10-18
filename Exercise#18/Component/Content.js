// create class Message
class Message extends React.Component {
    render() {
        //return JSX
        return (
            <div>
                <small>{this.props.user}</small>
                <p>{this.props.content}</p>
                <hr />
            </div>
        );
    }
}

//create component ContentPage
class ContentPage extends React.Component {
    render() {
        //return JSX
        return (
            <div className="main">
                <h2>Live Chat with Chatbot</h2>
                <h5>This is just a demo chats, Oct 31, 2022</h5>
                <Message user="Lidiana Tukali" content="Hi, how are you bot?" />
                <Message user="Chatbot" content="Hi, human, I'm okay." />
                <Message user="Lidiana Tukali" content="Good, are you human?" />
                <Message user="Chatbot" content="Ehm.. I'm not human. I'm your virtual bot." />
            </div>
        );
    }
}
