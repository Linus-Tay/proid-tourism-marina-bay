import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Plan</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard to="transportation"   
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>New Transportation</ServicesH2>
                        <ServicesP>We plan to introduce a unique e-scooter that will be available for rent.</ServicesP>
                    </ServicesCard>
                    <ServicesCard to="quests"   
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Quests @ Marina Bay</ServicesH2>
                        <ServicesP>A gamified experience of fun phototaking tasks and exciting activities.</ServicesP>
                    </ServicesCard>
                    <ServicesCard to="prizes"   
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Meaningful Prizes</ServicesH2>
                        <ServicesP>Earn points and get vouchers that can be used within the Marina Bay area.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
