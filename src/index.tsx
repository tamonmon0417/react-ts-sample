import ReactDOM from 'react-dom'
import GuestList from './state/GuestList'
import UserSearch from './state/UserSearch'

const App = () => {
  return (
    <div>
      <UserSearch></UserSearch>
      <GuestList />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
