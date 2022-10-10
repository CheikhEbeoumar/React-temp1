import React from "react";
import "./style.js";
import {HomeSection,HomeInfo,HomeInformation,HomeDescSpan,HomeDesc,HomeBtn,HomeTitle} from "./style.js";

const Home = () => {
    return(
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Cheikh Beoumar</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    
    )
}

export default Home;