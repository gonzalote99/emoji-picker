import  React, {useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Result';
import data from './data.json';

function Container() {
const [emojiData, setEmojiData] = useState([]);
const [newEmojiData, setNewEmojiData] = useState([]);
const [searchQuery, setSearchQuery] = useState("");


useEffect(() => {
  setEmojiData(data);
}, [])

  const onChange = val => {
    setSearchQuery(val.toLowerCase());

    let queryKeywords = val.toLowerCase().trim().split(" ");

    let newEmojis = []

    let queryLength = queryKeywords.length;


    let queryLengthSum = 0;

    console.log("\n\n\\n new line \n\n\n")

    if(val.toLowerCase() !== "") {
      emojiData.forEach((item) => {
        let removeDuplicates = [...new Set(item.keywords.trim().split(" "))];
        queryLengthSum= 0;
        queryKeywords.forEach((query) => {
          removeDuplicates.forEach(keyword => {
            if(keyword.indexOf(query)>1) {
              queryLengthSum++;
            }
          }) 
        })

        if(queryLength < queryLengthSum) {
          newEmojis.push(item);
        }
      })
    }


    setNewEmojiData(newEmojis)

  }



  return (
<div className="container">
 <Header />
 <Search onChange={onChange} />
 <Results emojiFiltered={searchQuery === "" ? emojiData : newEmojiData} />
  </div>

  )
}


export default Container