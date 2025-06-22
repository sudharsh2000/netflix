

import { createContext,  useState } from 'react'
import './Home.css'
import Banner from '../Components/Banner/Banner'

import Rowitem from '../Components/Rowitem/Rowitem'
import { api_key,discover_url } from '../constants'
import axios from 'axios'
import Navbar from '../Components/Navbar/Navbar'
export const LanguageContext=createContext()
function Home() {

const [lang,setlang]=useState()
console.log(lang)

  return (
    <div className='home'>
    <LanguageContext.Provider value={setlang} >
     <Navbar />
     <Banner/>
     <Rowitem title='Popular On Netflix'/>
     <Rowitem title='Top Rated' small />
     </LanguageContext.Provider>
    </div>
  )
}

export default Home

