"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        let text;
        if (this.state.liked) {
            text = "Sudah diLike, Batalkan?";
        } else {
            text = "Like";
        }
        return e(
            "button",
            { onClick: () => this.setState({ liked: !this.state.liked }) },
            text
        );
    }
}

const domContainer = document.querySelector("#like-button-container");
ReactDOM.render(e(LikeButton), domContainer);
