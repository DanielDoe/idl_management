import '../assets/css/App.css'
import React, { Component } from 'react'
import AppNavigation from './pages/navigation/AppNavigation';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppNavigation />
      </div>
    )
  }
}

export default App
