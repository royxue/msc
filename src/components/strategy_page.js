import React from "react"
import {
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxHeader,
  MediaBoxTitle
} from "react-weui";
import _ from "lodash";

import ColBox from "../components/col_box";
import classNames from "classnames";
import DATA from '../data/strategy';

import heart from '../images/heart.png'


class StrategyPage extends React.Component {
  render() {
    const contentboxStyle = {
      "-webkit-line-clamp": 'none'
    }

    var boxList = _.map(DATA['strategy'], (strategy) =>
      {
        return <ColBox key={strategy.title} title={strategy.title} content={strategy.content} />
      }
    )

    return(
      <Panel style={{display: this.props.display}}>
        <PanelBody style={{display:'inline'}}>
          <MediaBox type="appmsg">
          <MediaBoxHeader
          className={
          classNames({
            'modified-md-header': true
          })}
        ><img src={heart} style={{height:'80%', width:'80%'}}/>
            </MediaBoxHeader>
            <MediaBoxTitle>
              <p className='small-title'>企业复苏新周期：战略型灾情应对10问</p>
              <p className='small-subtitle'>请在每一问开头代入“我、企业、团队”</p>
            </MediaBoxTitle>
          </MediaBox>
          {boxList}
        </PanelBody>
        <div className="placeholder" />
      </Panel>
    )
  }
}

export default StrategyPage;
