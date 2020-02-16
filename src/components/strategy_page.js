import React from "react"
import {
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxTitle,
  MediaBoxDescription,
} from "react-weui";
import _ from "lodash";

import ColBox from "../components/col_box";

const DATA = {
  strategy: [
    {
      title: "我是谁",
      content: "我也不知道"
    },
    {
      title: "那你呢",
      content: "我不好说 <b>试试看</b>"
    }
  ]
}

class StrategyPage extends React.Component {
  render() {
    const contentboxStyle = {
      "-webkit-line-clamp": 'none'
    }

    var boxList = _.map(DATA['strategy'], (strategy) =>
      {
        return <ColBox title={strategy.title} content={strategy.content} />
      }
    )

    return(
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          {boxList}
        </PanelBody>
      </Panel>
    )
  }
}

export default StrategyPage;
