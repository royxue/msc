import React from "react"
import {
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxHeader,
  MediaBoxBody,
  MediaBoxTitle,
  MediaBoxDescription,
} from 'react-weui';


class CompanyPanel_4 extends React.Component {
  render () {
    return (
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          <MediaBox type="appmsg" href="javascript:void(0);">
            <MediaBoxHeader><img src="http://user-assets.sxlcdn.com/images/310787/FpHNWgEtbv4cNWQwd3wxtcasRih8.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png"/></MediaBoxHeader>
            <MediaBoxBody>
              <MediaBoxTitle>物联网服务BOP人群| 天地人</MediaBoxTitle>
              <MediaBoxDescription>在民生问题中寻找到全新的商业机遇
              </MediaBoxDescription>
            </MediaBoxBody>
          </MediaBox>
          <MediaBox type="appmsg" href="javascript:void(0);">
            <MediaBoxHeader><img src="http://user-assets.sxlcdn.com/images/310787/FnzBeMQ2DfMJnOrydjsgNcbQNpoh.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png"/></MediaBoxHeader>
            <MediaBoxBody>
              <MediaBoxTitle>明智饮酒| 百威英博</MediaBoxTitle>
              <MediaBoxDescription>培养明智饮酒文化，以减少酒精的有害使用行为
              </MediaBoxDescription>
            </MediaBoxBody>
          </MediaBox>
        </PanelBody>
      </Panel>
    )
  }
}

export default CompanyPanel_4;