import React, {useState} from 'react';
import './App.css';
import Slider from './Slider'

const suffixes = ['erings', 'ering', 'ings', 'ing', 'in', 'ers', 'er', 's']

function App() {
  const [text, setText] = useState("")
  const [translated, setTranslated] = useState("")
  const [extreme, setExtreme] = useState(false)
  const [extremeTranslation, setExtremeTranslation] = useState("")
  const [slider, setSlider] = useState(50)

  const translate = (text: string) => {
    let words: string[] = text.split(" ")
    let newWords: string[] = []
    let newWordsExtreme: string[] = []
    for (let i in words) {
      let word = words[i].toLowerCase().trim()
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
      newWordsExtreme[i] = newWord
      if (!numL && newWord !== " " && newWord !== "") {
        newWordsExtreme[i] = newWord + 'l'
      }
    }
    setText(text)
    setTranslated(newWords.join(" "))
    setExtremeTranslation(newWordsExtreme.join(" "))
  }

  return (
    <div className="App">
      <div className="container">
        <i className="big-text">If you can dream it, you can meme it</i>
        <br/>
        <textarea 
          placeholder="Try typing something with the letter L..." 
          onChange={(x) => translate(x.target.value)} 
          value={text}
        />
        <br/><br/>
        {translated.length > 0 && <i className="big-text">Behodl...</i>}
        {
          extreme && 
          <p 
            style={{
              animationName: `shake`,
              animationDuration: `${slider===0?0:(110-slider)/300}s`,
              animationIterationCount: 'infinite'
            }}
          >
            {extremeTranslation}
          </p>
        }
        {!extreme && <p>{translated}</p>}
        <br/>
        {translated.length >= 8 && 
          <span>
            <label>
              <i>Extreme Mode (use at your own risk)</i>
              <input 
                type="checkbox" 
                checked={extreme}
                onChange={() => {setExtreme(!extreme)}}
                />
            </label>
          </span>
        }
        {
          extreme && translated.length >= 8 && <Slider slider={slider} setSlider={setSlider} />
        }
      </div>
      
      <footer className="footer">
        Made by <a href="https://twitter.com/c0rv0s">Nathan</a>
      </footer>
    </div>
  );
}

export default App;
