import React from "react"
import {
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxTitle,
  MediaBoxDescription,
} from "react-weui";
import { nominalTypeHack } from "prop-types";

import ColBox from "../components/col_box";

class StrategyPage extends React.Component {

  render() {
    const contentboxStyle = {
      "-webkit-line-clamp": 'none'
    }

    return(
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          <ColBox />
          <MediaBox type="text">
            <MediaBoxTitle>战略二</MediaBoxTitle>
            <MediaBoxDescription>
              第三问
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

export default StrategyPage;
