import ReactDOM from 'react-dom'
import EventComponent from './events/EventComponents'
// import GuestList from './state/GuestList'
import UserSearch from './refs/UserSearch'


const App = () => {
  return <div>
    {/* <GuestList></GuestList> */}
    <UserSearch></UserSearch>
    {/* <EventComponent></EventComponent> */}
  </div>
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
