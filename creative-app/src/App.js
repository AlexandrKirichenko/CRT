import logo from './logo.svg'
import './App.css'
import React from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">Avatar</div>
    )
  }
}


const Button = () => {
  
  return (
    <button className="button">Login</button>
  )
}

const Header = ({isAuthorized}) => {
  return (
      <div className="header">
        {isAuthorized ? <Avatar/> : <Button/>}
      </div>
  )
}

function App() {
  return (
    <>
      <Header isAuthorized={false}/>
    </>
  )
}

export default App
