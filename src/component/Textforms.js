import React, {useState} from 'react'

export default function Textforms(props) {
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase!", "success");
        let newText = text.toUpperCase();
        if(newText === text){
          props.showAlert("Already in UpperCase!", "success");
        }
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleLoClick = () =>{
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!", "success");
        let newText = text.toLowerCase();
        if(newText === text){
          props.showAlert("Already in LowerCase!", "success");

        }
        
    }
  
    const handleClearClick = ()=>{
      //let newText = '';
      setText("")
      props.showAlert("Clipboard Cleared!", "success");
  
    }
    const handleCopy = ()=> {
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied!", "success");
    }

    const handleExtraSpaces =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!", "success");

    }

    const[text, setText] = useState('')
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'  }}>  
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
        <textarea className=" form-control"  value={text} onChange={handleOnChange} 
        style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
    </div>  
    
        <button disabled={text.length===0} className={"btn btn-outline-primary mx-1 my-1"} onClick={handleUpClick}> Convert to Uppercase</button>
        <button disabled={text.length===0} className={"btn btn-outline-primary mx-1 my-1"} onClick={handleLoClick}> Convert to Lowercase</button>
        <button disabled={text.length===0} className={"btn btn-outline-primary mx-1 my-1"} onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className={"btn btn-outline-primary mx-1 my-1"} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className={"btn btn-outline-primary mx-1 my-1"} onClick={handleCopy}>Copy Text</button>

     
</div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black' }}>
      <h2>Your Text summary</h2>
      <p><b>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length } words and {text.length} characters(with spaces)</b></p>
      <p><b>{ text.replaceAll(' ', '').length}  characters(without spaces)</b></p>
      <p><b>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes to read</b></p>

      <h3>Preview </h3>
      <p>{text.length>0?text:"Enter something in the text box to prewiew it here."}</p>
    </div>
  </>         
  )
}