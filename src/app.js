import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';

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
            <div className="container">
                <h1 className="title">Markdown Generator</h1>
                <textarea value={markdown} onChange={(e) => this.handleChange(e)} id="editor" />
                <div dangerouslySetInnerHTML={{__html: marked(markdown, {sanitizer: true, breaks: true})}} id="preview" ></div>
            </div>
        )
    }

}

ReactDOM.render(<Editor />, document.getElementById('root'));