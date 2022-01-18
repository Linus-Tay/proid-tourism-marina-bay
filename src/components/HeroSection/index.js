import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBackground>
            <HeroContent>
                <HeroH1>Exerevnóntas Marina Bay</HeroH1>
                <HeroP>
                    Looking for a reason to get out there and explore the Marina Bay area
                    once again? Look no further.
                </HeroP>
                <HeroButtonWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary="true"
                    dark="true"
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact="true"
                    offset={-80}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
