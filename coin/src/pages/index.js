import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import FrontSection from '../components/FrontSection'
import InfoSection from '../components/InfoSection'
import { homeObjectOne, homeObjectTwo, homeObjectThree, homeObjectFour } from '../components/InfoSection/data'

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
            <InfoSection {...homeObjectOne}/>
            <InfoSection {...homeObjectTwo}/>
            <InfoSection {...homeObjectThree}/>
            <InfoSection {...homeObjectFour}/>
        </>
    )
}

export default Home
