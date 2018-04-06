import React from "react";
import ReactDOM from "react-dom";
import ArrayLayout from "./components/ArrayLayout";

let getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;

let nodes = getNodes('<div>1</div><div>2</div>');

let doc=new DOMParser().parseFromString(`<div>arr.push(2);<br>
console.log(arr);</div>`, 'text/html')
let div = doc.body.firstChild;



class Something extends React.Component{
  getThatHtml=()=>{
    return <div>arr.splice(2, 0, 'tacos');<br/>
    console.log(arr);</div>
  }
	render(){
      return(
        this.getThatHtml()
        )
    }
}
  

ReactDOM.render(<ArrayLayout/>, document.getElementById("root"));
