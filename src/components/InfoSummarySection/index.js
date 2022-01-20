import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ButtonWrap, ImgWrap, Img } from './InfoElements'
import { ButtonHref } from '../ButtonElement'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, description, headline, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <ButtonWrap>
                                    <ButtonHref href="https://sites.google.com/np.edu.sg/proidclasssitet65/marina-bay-tourism" 
                                                target="_blank">
                                    {buttonLabel}</ButtonHref>
                                </ButtonWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
