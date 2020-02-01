import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.sass';

let marked = require("marked");

const Editor = () => {
    let [markdown, setMarkdown] = useState('# Welcome!\n## This is my Markdown Editor.\nErase me and type anything you would like!\n<a href=\"https://tiffanyray.github.io/portfolio\" target=\"_black\">Checkout My Portfolio</a>\n`<div> I promise I\'m cool :) </div>`\n```\nconst yourCoolToo = (name) => {\n  console.log(`${name}\'s cool too`);\n};\n```\n>Want more projects?\n\n Project | Link\n------------- | ------------- \nQuote Generator | <a href=\"https://tiffanyray.github.io/quoteGenerator/\" target=\"_black\">Get A Quote Now!</a> \nQuiz | <a href=\"https://tiffanyray.github.io/quiz/\" target=\"_black\">Should you go camping?</a>\nTicTacToe | <a href=\"https://tiffanyray.github.io/ticTacToe/\" target=\"_black\">Play TicTacToe Solo</a>');

    const handleChange = ({ target }) => {
        setMarkdown(target.value)
    }

    return <div className="container">
        <h1 className="title">Markdown Generator</h1>
        <textarea value={markdown} onChange={handleChange} id="editor" />
        <div dangerouslySetInnerHTML={{__html: marked(markdown, {breaks: true})}} id="preview" />
    </div>
}

ReactDOM.render(<Editor />, document.getElementById('root'));