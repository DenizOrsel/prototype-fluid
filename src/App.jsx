import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Extension from './components/Extension'

function App() {
  const [showSidebarExtension, setShowSidebarExtension] = useState(false)

const toggleSidebarExtension = () => {
  setShowSidebarExtension(!showSidebarExtension)
};

  return (
    <div className="container">
      <Sidebar onClick={toggleSidebarExtension} />
      {showSidebarExtension && <Extension />}
      <div className='elementWrapper'>
      <section className="mainContent">
        <span className="mainContentLeft">Left </span>
        <span className="mainContentRight">Right </span>
      </section>
        </div>
    </div>
  );
}

export default App
