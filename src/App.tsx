import React, {useState} from 'react';
import './App.css';

const suffixes = ['erings', 'ering', 'ings', 'ing', 'in', 'ers', 'er', 's']

function App() {
  const [text, setText] = useState("")
  const [translated, setTranslated] = useState("")

  const translate = (text: string) => {
    let words: string[] = text.split(" ")
    let newWords: string[] = []
    for (let i in words) {
      let word = words[i].toLowerCase()
      let numL = (word.match(/l/g) || []).length 
      let newWord: string = word
      if (numL) {
        newWord = word.replace(/l/g, "")
        let changed: boolean = false
        for (let j in suffixes) {
          if (word.endsWith(suffixes[j])) {
            newWord = newWord.substring(0, word.length-suffixes[j].length-numL) 
            newWord += "l".repeat(numL)
            newWord += suffixes[j]
            changed = true
            break
          }
        }
        if (!changed) newWord += "l".repeat(numL)
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
