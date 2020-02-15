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


class CompanyPanel_2 extends React.Component {
  render () {
    return (
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          <MediaBox type="appmsg" href="javascript:void(0);">
            <MediaBoxHeader><img src="http://user-assets.sxlcdn.com/images/310787/Fi2WKT-e3eoGqOuXTAhS-AEAYpIX.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png"/></MediaBoxHeader>
            <MediaBoxBody>
              <MediaBoxTitle>旅客等候方案| 知乎</MediaBoxTitle>
              <MediaBoxDescription>
                在无聊的等候中，与世界分享你的知识、见解与经验
              </MediaBoxDescription>
            </MediaBoxBody>
          </MediaBox>
          <MediaBox type="appmsg" href="javascript:void(0);">
            <MediaBoxHeader><img src="http://user-assets.sxlcdn.com/images/310787/FkzHnFpt9oU22DA9IOSA95hgkkao.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png"/></MediaBoxHeader>
            <MediaBoxBody>
              <MediaBoxTitle>员工志愿者日| 渣打银行</MediaBoxTitle>
              <MediaBoxDescription>
                传承渣打银行「一心做好，始终如一」的品牌承诺
              </MediaBoxDescription>
            </MediaBoxBody>
          </MediaBox>
          
        </PanelBody>
      </Panel>
    )
  }
}

export default CompanyPanel_2;