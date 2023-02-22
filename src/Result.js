import React, {useEffect} from 'react';
import Item from './Item';
import Clipboard from 'clipboard';
import {v4 as uuid4} from 'uuid';
import './Result.css';


function Results(props) {
  useEffect(() => {
    const clipbpard = new Clipboard('.item');
    return () => {
       clipbpard.destroy()
    };
  })

  return (
    <div className="results">
      {props.emojiFiltered.slice(0, 100).map((emoji) => (
        <Item id={uuid4()} symbol={emoji.symbol} title={emoji.title} keywords={emoji.keywords} key={uuid4()} />
      ))}
      </div>
  )
}

export default Results
