import React, {useState} from 'react';
import './Item.css';


function Item(props) {
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = e => {
    setFadeIn(true)
    setTimeout(() => setFadeIn(false), 900)

  }

  return (
    <div 
     key={props.id}
     className="item"
     title="copy emoji"
     onClick={handleClick}
     data-clipboard-text={props.symbol}
     data-keywords={props.keywords}

    >

      <div className={`item-copy ${fadeIn? 'label-true': 'label-false'}`}>
         copied!
        </div>
     <span className="item-emoji">{props.symbol}</span>
      </div>
  )
}


export default Item
