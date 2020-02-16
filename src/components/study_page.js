import React from "react"
import {
    Panel,
    PanelBody,
    MediaBox,
    MediaBoxTitle,
    MediaBoxDescription
  } from "react-weui";
import _ from "lodash";
import ColBox from "../components/col_box";

const DATA= {
  info:[
    {
      title:"战略二",
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    },
    {
      title:"",
      description:""
    }
  ]
}
class StudyPage extends React.Component {
  render() {
    const contentboxStyle = {
      "-webkit-line-clamp": 'none'
    }
    
    var boxList = _.map(DATA['info'], (info) => {
      return <ColBox title={info.title} content = {info.description} />
    })

    return(
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          {boxList}
        </PanelBody>
      </Panel>
    )
  }
}

export default StudyPage;