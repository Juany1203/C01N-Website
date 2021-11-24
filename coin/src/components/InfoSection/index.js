import React from 'react';
import { Button } from '../ButtonElement';

import { InfoContainer, InfoWrapper, InfoRow, Column2, Column1, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap, Img, TopLine } from './InfoElements';


const InfoSection = ({topLine,lightBg,id, imgStart,lightText,heading, darkText,description, buttonLabel, image1, alt}) => {
    console.log(image1)
    return (
        <>
            <InfoContainer lightBg = {lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine> 
                            <Heading lightText = {lightText}>{heading}</Heading>
                            <Subtitle darkText = {darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img scr={image1} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            
        </>
    )
}

export default InfoSection
