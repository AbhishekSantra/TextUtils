import React, { useState } from 'react';


export default function TextArea(props) {
    const Capitalized = () => {
        // console.log("Uppercase was clicked" +" "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Capitalized","success");
    }
    const TextAreaChange = (e) => {
        // console.log("on chnage");
        setText(e.target.value);
    }
    const Lowercase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Normalized","success");
    }
    const cleartext=()=>{
        let newText="";
        setText(newText);
        props.showalert("Clear","Success");
    }
    const copytext=()=>{
        navigator.clipboard.writeText(text);
        props.showalert("Copy to clipboard","success");
    }
    const removeExtra=()=>{
        let newText= text.replace(/\s+/g,' ').trim();
        setText(newText);
        props.showalert("Extra Spaces Removed","success");
    }
    const [text, setText] = useState('Enter text here');
    return (
       <><div className='container my-3'>
            <form>
                <h3>{props.heading}</h3>
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }} value={text} onChange={TextAreaChange} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} type="button" onClick={Capitalized} className="btn btn-primary mx-1 my-1">Click Here to capitalize</button>
                <button disabled={text.length===0} type="button" onClick={Lowercase} className="btn btn-primary mx-1 my-1">Click Here to normalize</button>
                <button disabled={text.length===0} type="button" onClick={cleartext} className="btn btn-primary mx-1 my-1">Clear</button>
                <button disabled={text.length===0} type="button" onClick={copytext} className="btn btn-primary mx-1 my-1">Copy</button>
                <button disabled={text.length===0} type="button" onClick={removeExtra} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>

            </form>
        </div><div className='container my-3'>
                <h3>Text Summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minute time takes to read</p>
            </div></>
        
    )
}



