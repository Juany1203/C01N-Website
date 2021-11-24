import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import FrontSection from '../components/FrontSection'

const Home = () => {


    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle ={toggle}/>
            <Navbar toggle ={toggle}/>
            <FrontSection/>
    
            
        </>
    )
}

export default Home
