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
      let newWord: string = ""
      if (word.substring(word.length-2) === "er") {
        newWord = word.replace(/l/g, "")
        newWord = newWord.substring(0, word.length-3) + "l".repeat(numL) + "er"
      }
      else {
        newWord = word.replace(/l/g, "") + "l".repeat(numL)
      }
      newWords[i] = newWord
    }
    setText(text)
    setTranslated(newWords.join(" "))
  }

  return (
    <div className="App">
      <i>If you can dream it, you can meme it</i>
      <br/>
      <textarea placeholder="Try typing something with the letter L..." onChange={(x) => translate(x.target.value)} value={text}/>
      <br/><br/>
      {translated.length > 0 && <i>Behold...</i>}
      <p>{translated}</p>
      <footer className="footer">
        Made by <a href="https://onenathan.codes">Nathan</a>
      </footer>
    </div>
  );
}

export default App;
