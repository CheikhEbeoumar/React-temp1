import React ,{useState, useEffect }from "react";
import axios from "axios";
import "./style.js"
import {ProfileSection,ProfileSkills,ProfileList,ProfileItem,ProfileItemSpan,SkillsSection,SkillsDesc,Bar,Title,Perc,Parent,ParentSpan,PStitle,PStitleSpan} from "./style.js";

const Profile = () => {
    const [profile,setProfile] = useState([])

    useEffect(() => {
        axios.get('js/data.json').then(res => {setProfile(res.data.profile)})
    },[])
    const Skills = profile.map((skillsItem) =>{
        return(
            <Bar>
            <Title>{skillsItem.title}</Title>
            <Perc>{skillsItem.pourcentage}</Perc>
            <Parent>
                <ParentSpan sp={skillsItem.pourcentage} ></ParentSpan>
            </Parent>
          </Bar>
        )
    })
    return(
        <ProfileSkills>
        <div className="container">
            <ProfileSection>
                <PStitle><PStitleSpan>My </PStitleSpan>Profile</PStitle>
                <ProfileList>
                    <ProfileItem>
                        <ProfileItemSpan>Name</ProfileItemSpan>
                        Cheikh Beoumar
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Birthday</ProfileItemSpan>
                        05/08/200
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Address</ProfileItemSpan>
                        Nouakchott 
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Phone</ProfileItemSpan>
                        +222 38461565
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Email</ProfileItemSpan>
                        Cheikhbeoumar@gmail.com
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Website</ProfileItemSpan>
                        <ProfileItemSpan web= "">www.google.com</ProfileItemSpan>
                    </ProfileItem>
                </ProfileList>
            </ProfileSection>
            
            <SkillsSection>
                <PStitle>Some <PStitleSpan>skills</PStitleSpan></PStitle>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
               {Skills}

            </SkillsSection>
            
        </div>
    </ProfileSkills>
    )
}

export default Profile;