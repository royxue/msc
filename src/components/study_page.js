import React, { useLayoutEffect } from "react"
import {
    Panel,
    PanelBody,
    MediaBox,
    MediaBoxTitle,
    MediaBoxDescription
  } from "react-weui";
import _ from "lodash";
import ColBox from "../components/col_box";


const DATA= {
  info:[
    {
      title:"如你愿意加入到该案例集与共创指南中，你将获得：",
      description:"<ol><li>• 微网站企业案例收录</li><li>• 疫情结束后出版的《企业疫情参与白皮书》</li><li>• 企业疫情参与影像实录(视频形式)</li></ol>"
    },
    {
      title:"如何加入",
      description:"请联系stephanie@msc-world，邮件标题请注明【企业名称 + 疫情应对共创加入】"
    }
  ]
}
class StudyPage extends React.Component {
  render() {
    const contentboxStyle = {
      "-webkit-line-clamp": 'none'
    }

    var boxList = _.map(DATA['info'], (info) => {
      return <ColBox title={info.title} content = {info.description} />
    })

    return(
      <div>
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          {boxList}
        </PanelBody>
      </Panel>
      <br/><br/><br/>
        <br/><br/><br/>
      </div>
    )
  }
}

export default StudyPage;