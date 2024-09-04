import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button } from "./components/ui/button"

export default function App() {
  /*
  * 变量声明
  */
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='inline-flex'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="p-8">
        <Button className='min-w-32' onClick={() => setCount(aa => aa + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className='flex'>
        {/* logo */}
        <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <p className="text-rose-900 mx-1.5">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}