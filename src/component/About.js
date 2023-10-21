import React from 'react'

export default function About(props) {
     
//    const [mystyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white'
//     })

const mystyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
}


  return (
    <div className="container" >
        <h2 className="my-3" style={{color:'dark'?'white':'#042743'}}> About Us</h2>
            <div className="accordion" id="accordionExample" >
        <div className="accordion-item"style={mystyle} > 
            <h2 className="accordion-header" id="headingigone">
            <button className="accordion-button " type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" 
            aria-expanded="true" aria-controls="collapseOne">
            <strong> Analyze Your Text</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby='headingone'
             data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              Textutils  gives you a way to Analyze your text quickly and efficiently.   
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"style={mystyle} data-bs-toggle="collapse" 
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={mystyle}>
                Textutils is a free charachter counter tool that provide unstant charachter count and word count statistics for a given text.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"style={mystyle} data-bs-toggle="collapse" 
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible  </strong> 

            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
            This Textutils software work in any web Browser such as chrome, firefix, safari, opera. 
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
