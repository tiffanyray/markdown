import React from 'react';
import ReactDOM from 'react-dom';

let marked = require("marked");

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const markdown = e.target.value;
        this.setState ({ markdown });
    }

    render () {
        let { markdown } = this.state;
        return (
            <div>
                <h1>I am from React!</h1>
                <div>
                    <textarea value={markdown} onChange={(e) => this.handleChange(e)} id="editor" />
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{__html: marked(markdown)}} ></p>
                </div>
            </div>
        )
    }

}

ReactDOM.render(<Editor />, document.getElementById('root'));