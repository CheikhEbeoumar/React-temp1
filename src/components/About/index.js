import React from "react";
import "./style.js";
import {AboutSection,Info,InfoDesc,InfoTitle,InfoTitleSpan, InfoDir,InfoDescLink} from "./style.js";
const About = () => {
    return(
        <AboutSection>
        <div className="container">
            <Info>
                <InfoTitle><InfoTitleSpan>This is</InfoTitleSpan> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescLink>explicabo</InfoDescLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                
            </Info>
        </div>
    </AboutSection>
    )
}

export default About;