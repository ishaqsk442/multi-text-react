import {Component} from 'react'
import './App.css'
import Buttons from './components/Buttons'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {language: languageGreetingsList[0].id}

  onChangeLang = id => {
    this.setState({language: id})
  }

  findImage = language => {
    const imgItem = languageGreetingsList.find(each => each.id === language)
    return imgItem
  }

  render() {
    const {language} = this.state
    const image = this.findImage(language)
    console.log(language)
    console.log(image)
    const imgUrl = image.imageUrl
    console.log(imgUrl)
    const alt = image.imageAltText
    return (
      <div className="main">
        <div className="greeting-card">
          <div className="inner-card">
            <h1>Multilingual Greetings</h1>
            <ul className="buttons-cont">
              {languageGreetingsList.map(each => (
                <Buttons
                  id={each.id}
                  key={each.id}
                  buttonText={each.buttonText}
                  isActive={language === each.id}
                  onChangeLang={this.onChangeLang}
                />
              ))}
            </ul>
            <img className="img" src={imgUrl} alt={alt} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
