import './App.css'
import { useState } from 'react' 
import Header from './components/Header'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header/>
    </div>
  )
}