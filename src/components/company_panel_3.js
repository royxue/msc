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


class CompanyPanel_3 extends React.Component {
  render () {
    return (
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          <MediaBox type="appmsg" href="javascript:void(0);">
            <MediaBoxHeader><img src="http://user-assets.sxlcdn.com/images/310787/Fsnz5I2iarIijW69FGgo8sLfHRKM.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png"/></MediaBoxHeader>
            <MediaBoxBody>
              <MediaBoxTitle>共享小红伞| 肯德基</MediaBoxTitle>
              <MediaBoxDescription>
                解决人们最后一公里的用伞问题
              </MediaBoxDescription>
            </MediaBoxBody>
          </MediaBox>
          <MediaBox type="appmsg" href="javascript:void(0);">
            <MediaBoxHeader><img src="http://user-assets.sxlcdn.com/images/310787/FieQrQq-yJCm6XeWvsgBV0I3vgIO.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png"/></MediaBoxHeader>
            <MediaBoxBody>
              <MediaBoxTitle>儿童道路安全训教育| 道达尔</MediaBoxTitle>
              <MediaBoxDescription>
              以寓教于乐的安全教育，增强儿童防范意识，避免交通伤害
              </MediaBoxDescription>
            </MediaBoxBody>
          </MediaBox>
        </PanelBody>
      </Panel>
    )
  }
}

export default CompanyPanel_3;