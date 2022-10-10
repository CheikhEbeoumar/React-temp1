import React , { useState, useEffect}from "react";
import "./style.js";
import axios from "axios";
import {SocialMediaSection,Social,Icon,Span,P, } from "./style.js";
const SocialMedia = () => {
    const [social, setSocial] = useState([])
    useEffect(() => {
    axios.get('js/data.json').then(res =>{setSocial(res.data.social)})
    },[])

    const SocialList = social.map((socialItem) =>{
      return (
        <Social item={socialItem.id} key={socialItem.id}>
            <Icon className={socialItem.icon}></Icon>
            <P>
                <Span>{socialItem.title}</Span>
                <Span info= "">{socialItem.body}</Span>
            </P>
        </Social>
      )
    }) 
    return(
        <SocialMediaSection>
        {SocialList}
        </SocialMediaSection>
    )
}

export default SocialMedia;