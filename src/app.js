import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';

let marked = require("marked");

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '# Welcome!\n## This is my Markdown Editor\n<a href=\"https://tiffanyray.github.io/portfolio\" target=\"_black\">Checkout My Portfolio</a>\n`<div> I promise I\'m cool :) </div>`\n```\nconst yourCoolToo = (name) => {\n  console.log(`${name}\'s cool too`);\n};\n```\n>What more projects?\n\n Project | Link\n------------- | ------------- \nQuote Generator | <a href=\"https://tiffanyray.github.io/quoteGenerator/\" target=\"_black\">Get A Quote Now!</a> \nQuiz | <a href=\"https://tiffanyray.github.io/quiz/\" target=\"_black\">How\'s your life going? jk..</a>\nTicTacToe | <a href=\"https://tiffanyray.github.io/ticTacToe/\" target=\"_black\">Play TicTacToe Solo</a>'
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
                <div dangerouslySetInnerHTML={{__html: marked(markdown, {breaks: true})}} id="preview" ></div>
            </div>
        )
    }

}

ReactDOM.render(<Editor />, document.getElementById('root'));