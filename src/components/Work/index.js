import React , { Component }from "react";
import axios from "axios";
import "./style.js";
import {WorkSection, WorkPart,WorkTitle, WorkTitleSpan, PartTitle,PartDesc,Icon,Line} from "./style.js";
class Work  extends Component  {
    
        state= {
          works :[]
        }

        componentDidMount=()=> {
            axios.get('js/data.json').then(res => {this.setState({works: res.data.works}) })
        }
        render() {
            const {works} = this.state;
            const worklist = works.map( (workItem) => {
                return (
                    <WorkPart first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                        {workItem.body}
                    </PartDesc>
                </WorkPart>
                )
            })
        return(
            <WorkSection>
            <div className="container">
                {worklist}
            </div>
        </WorkSection>
    )
    }
    }

export default Work;