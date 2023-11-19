import './index.css'

const Buttons = props => {
  const {buttonText, isActive, id, onChangeLang} = props

  const btnActive = isActive ? 'btn-clr' : 'list-btn'
  const onChangeLanguage = () => {
    onChangeLang(id)
  }

  return (
    <li>
      <button type="button" className={btnActive} onClick={onChangeLanguage}>
        {buttonText}
      </button>
    </li>
  )
}
export default Buttons
