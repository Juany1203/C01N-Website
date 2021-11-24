import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { FrontContainer, FrontBG, VideoBg, FrontContent, FrontH1, FrontP, FrontBTNWrapper, ArrowFoward, ArrowRight } from './FrontElements';
import { Button } from '../ButtonElement';
const FrontSection = () => {
    const [hover, setHover] = useState(false)

    const onHover  = () => {
        setHover(!hover)
    }

    return (
        <FrontContainer>
            <FrontBG>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </FrontBG>
            <FrontContent>
                <FrontH1>Invest in Cryptocurrencys easier than ever</FrontH1>
                <FrontP> Check the most popular Cryptocurrencys</FrontP>
                <FrontBTNWrapper>
                    <Button to="Crypto" onMouseEnter={onHover} onMouseLeave={onHover} primary= 'true' dark='true'>
                    Get started {hover ? <ArrowFoward /> : <ArrowRight />}</Button>

                </FrontBTNWrapper>
            </FrontContent>
        </FrontContainer>

    )
}

export default FrontSection
