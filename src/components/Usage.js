import React from "react";

let doc=new DOMParser().parseFromString(`<div>arr.push(2);<br>
console.log(arr);</div>`, 'text/html')
let div = doc.body.firstChild;
let getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;

let nodes = getNodes('<div>1</div><div>2</div>');

const Usage = props => {
  return (
    <div className="usage">
      {console.log(props.option)}
      <h2 className="usage__title">Usage</h2>
      <div className="usage__board">
        <p>let arr = [5, 1, 8];</p>
        {props.option && (
        
          <div>
            {
              props.option.html([2,4,6,8])
            }
           
          </div>
        )
        }
      </div>
    </div>
  );
};

export default Usage;
