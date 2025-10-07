import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useFirebaseAppContext } from './firebaseConfig'



function App() {
  const { db, auth } = useFirebaseAppContext();
  console.log(db);
  console.log(auth);
  return (
    <>
    </>
  )
}

export default App
