import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpCase = () => {
        let newText = (text.toUpperCase());
        setText(newText)
        props.showAlert("Converted Into Upper Case", "Success");
    }
    const handleLowCase = () => {
        let newText = (text.toLowerCase());
        setText(newText)
        props.showAlert("Converted Into Lower Case", "Success");
    }
    const handleClearCase = () => {
        let newText = ``;
        setText(newText)
        props.showAlert("Successfully Cleard", "Success");
    }
    const handleBoldCase = () => {
        let newText = (text.bold());
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log('On change');
        setText(event.target.value)
    }
const [text, setText] = useState(`Enter text here`);
  return (
    <>
    <div className='container' style={{color: props.mode===`dark`?`white`:`black`}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode===`dark`?`gray`:`white`, color: props.mode===`dark`?`white`:`black`}} onChange={handleOnChange} id="emybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCase}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowCase}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearCase}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleBoldCase}>Bold Text</button>
    </div>
    <div className="container" style={{color: props.mode===`dark`?`white`:`black`}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} reading the words</p>
        <h2>You Text Preview</h2>
        <p>{text.length>0 ? text:"Enter Text To Preview"}</p>
    </div>
    </>
  )
}
