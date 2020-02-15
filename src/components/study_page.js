import React from "react"
import {
    Panel,
    PanelBody,
    MediaBox,
    MediaBoxTitle,
    MediaBoxDescription
  } from "react-weui";

class StudyPage extends React.Component {
  render() {
    return(
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          <MediaBox type="text">
            <MediaBoxTitle>战略一</MediaBoxTitle>
            <MediaBoxDescription>
              第一问
            </MediaBoxDescription>
          </MediaBox>
          <MediaBox type="text">
            <MediaBoxTitle>战略二</MediaBoxTitle>
            <MediaBoxDescription>
              <div style={{"-webkit-line-clamp":'none'}} >
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </MediaBoxDescription>
          </MediaBox>
          <MediaBox type="text">
            <MediaBoxTitle>战略三</MediaBoxTitle>
            <MediaBoxDescription>
              第三问
            </MediaBoxDescription>
          </MediaBox>
          <MediaBox type="text">
            <MediaBoxTitle>战略四</MediaBoxTitle>
            <MediaBoxDescription>
              第四问
            </MediaBoxDescription>
          </MediaBox>
        </PanelBody>
      </Panel>
    )
  }
}

export default StudyPage;