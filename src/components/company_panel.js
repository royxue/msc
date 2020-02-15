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


class CompanyPanel extends React.Component {
  render () {
    return (
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          <MediaBox type="appmsg" href="javascript:void(0);">
            <MediaBoxHeader><img src="http://user-assets.sxlcdn.com/images/310787/FoWH8HbFOdBzFYRDgqDHINjrqUG6.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png"/></MediaBoxHeader>
            <MediaBoxBody>
              <MediaBoxTitle>大凉山精准扶贫| 木都哈尼</MediaBoxTitle>
              <MediaBoxDescription>
                用中国第一瓶有民族特色的特级初榨橄榄油落实精准扶贫
              </MediaBoxDescription>
            </MediaBoxBody>
          </MediaBox>
          <MediaBox type="appmsg" href="javascript:void(0);">
            <MediaBoxHeader><img src="http://user-assets.sxlcdn.com/images/310787/Fv-v6jZ6jWMXBUmKvzpJFUDtXFs6.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png"/></MediaBoxHeader>
            <MediaBoxBody>
              <MediaBoxTitle>为村开放平台| 腾讯</MediaBoxTitle>
              <MediaBoxDescription>
                用「互联网+乡村」的模式，为乡村连接情感、连接信息、连接财富
              </MediaBoxDescription>
            </MediaBoxBody>
          </MediaBox>
        </PanelBody>
      </Panel>
    )
  }
}

export default CompanyPanel;