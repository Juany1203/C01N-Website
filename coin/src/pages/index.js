import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import FrontSection from '../components/FrontSection'
import InfoSection from '../components/InfoSection'
import { homeObjectOne, homeObjectTwo, homeObjectThree, homeObjectFour } from '../components/InfoSection/data'
import Footer from '../components/Footer'
import '../App.css';
const Home = () => {


    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle ={toggle}/>

            <FrontSection/>
            <InfoSection {...homeObjectOne}/>
            <InfoSection {...homeObjectTwo}/>
            <InfoSection {...homeObjectThree}/>
            <InfoSection {...homeObjectFour}/>
            <Footer/>
        </>
    )
}

export default Home
