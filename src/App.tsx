import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("")
  const [translated, setTranslated] = useState("")

  const translate = (text: string) => {
    let words: string[] = text.split(" ")
    let newWords: string[] = []
    for (let i in words) {
      let word = words[i].toLowerCase()
      let numL = (word.match(/l/g) || []).length 
      let newWord = word.replace(/l/g, "") + "l".repeat(numL)
      newWords[i] = newWord
    }
    setText(text)
    setTranslated(newWords.join(" "))
  }

  return (
    <div className="App">
      <i>Buidl it</i>
      <br/>
      <textarea placeholder="Start typing..." onChange={(x) => translate(x.target.value)} value={text}/>
      <p>{translated}</p>
      <footer className="footer">
        Made by <a href="https://onenathan.codes">Nathan Mueller</a>
      </footer>
    </div>
  );
}

export default App;
