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
      title: "6. 你的企业战略能否灵活应对国民灾情、国际经济政治格局变化？",
      complete_title: "6. 你的企业战略能否灵活应对国民灾情、国际经济政治格局变化？是否有机制可以回应因灾情产生的某些需求遭到或多（日常物资）或少（旅行）的变化？企业的供应链、渠道能力是否得到了体现，从而调配因灾情发生导致的不平衡的社会资源？",
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
