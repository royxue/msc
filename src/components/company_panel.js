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

import _ from "lodash";

const DATA = {
  company1: [
    {
      img_src: "https://lh3.googleusercontent.com/eOXYfM4C_CJc6hJ9Yxa0q0Xf-O8u03T5af6NdC5vnuYKLnrgsIjEaM4lUK3Mj7gNn7Y",
      title:"腾讯－微信",
      content:"微信迅速在「看一看」上线了疫情实时动态播报，还设置了「疫区日记」、「权威声音」等版块，发布一线医务人员、重点疫区病患的跟踪报道，为民众提供更加多元的信息资讯。",
      link:"javascript:void(0);"
    },
    {
      img_src: "http://user-assets.sxlcdn.com/images/310787/Fv-v6jZ6jWMXBUmKvzpJFUDtXFs6.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png",
      title:"为村开放平台| 腾讯",
      content:"用「互联网+乡村」的模式，为乡村连接情感、连接信息、连接财富",
      link:"javascript:void(0);"
    },
  ],
  company2:[
    {
      img_src:"https://www.xyzapk.com/wp-content/uploads/2017/11/com.zhihu_.android.jpg.png",
      title:"知乎",
      content:"在无聊的等候中，与世界分享你的知识、见解与经验",
      link:"javascript:void(0);"
    },
    {
      img_src:"http://user-assets.sxlcdn.com/images/310787/FkzHnFpt9oU22DA9IOSA95hgkkao.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png",
      title:"员工志愿者日| 渣打银行",
      content:"传承渣打银行「一心做好，始终如一」的品牌承诺",
      link:"javascript:void(0);"
    },
  ],
  company3:[
    {
      img_src:"http://user-assets.sxlcdn.com/images/310787/FjTqw_o_ay25gK2rOkTGmYSnhP_6.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png",
      title:"民生数据服务| 人和数据",
      content:"通过大数据助力乡村美好生活",
      link:"javascript:void(0);"
    },
    {
      img_src:"http://user-assets.sxlcdn.com/images/310787/Fsnz5I2iarIijW69FGgo8sLfHRKM.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png",
      title:"共享小红伞| 肯德基",
      content:"解决人们最后一公里的用伞问题",
      link:"javascript:void(0);"
    }
  ],
  company4:[
    {
      img_src:"http://user-assets.sxlcdn.com/images/310787/FieQrQq-yJCm6XeWvsgBV0I3vgIO.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png",
      title:"儿童道路安全训教育| 道达尔",
      content:"以寓教于乐的安全教育，增强儿童防范意识，避免交通伤害",
      link:"javascript:void(0);"
    },
    {
      img_src:"http://user-assets.sxlcdn.com/images/310787/FpHNWgEtbv4cNWQwd3wxtcasRih8.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png",
      title:"物联网服务BOP人群| 天地人",
      content:"在民生问题中寻找到全新的商业机遇",
      link:"javascript:void(0);"
    }
  ]
}

class CompanyPanel extends React.Component {
  render () {
    var mediaboxList = _.map(DATA[this.props._class], (company) =>
      {
        return <MediaBox type="appmsg" href={company.link}>
          <MediaBoxHeader><img src={company.img_src}/>
            </MediaBoxHeader>
          <MediaBoxBody>
            <MediaBoxTitle>
              {company.title}
            </MediaBoxTitle>
            <MediaBoxDescription>
              {company.content}
            </MediaBoxDescription>
          </MediaBoxBody>
          </MediaBox>
      }
    )
    return (
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          {mediaboxList}
        </PanelBody>
      </Panel>
    )
  }
}

export default CompanyPanel;