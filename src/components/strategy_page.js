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
      title: "1.	你的企业与团队是否有足够的能力评估与灾情相关的社会问题，并寻找到与自身企业最为相关的细分议题？",
      complete_title: "",
      content: "<p>往往企业提出的第一类问题是：有哪些利益相关方？我应该如何与他们产生连接？在疫情下，有一个非常基础的分析思路是：</p><ul><li>• 外部利益相关方，包括信息获取的来源方（各级政府与国际、本土的非政府组织、媒体等）</li><li>• 内部利益相关方，包括需要协调的部门（甚至是跨部门）及决策者与执行者</li></ul><br/><p>在此基础上，思考目前疫情（或是任何未来可能发生的灾情）还有哪些信息、沟通、透明度相关的问题没有被解决，如</p><ul><li>• 疫情实时动态发布</li><li>• 肺炎知识科普与辟谣</li><li>• 便民服务信息</li></ul><br/><p>在微信的案例中可以看到，微信超过 10 亿的用户背后反映的现实是，在信息导流层面，如果仅仅只有疫情地图和实时播报，将难以满足用户对于疫情进展的多元化的资讯需求。</p><br/><p>因此，多元化的信息资讯和疫区报道也同样呈现在疫情实时动态播报版块当中。同时，腾讯借着「微信」这一巨大的流量优势及其多元的产品组合，可以使微信（包括「看一看」、「搜一搜」等功能）成为一个「超级入口」，联动腾讯地图、腾讯医疗、腾讯新闻等旗下众多产品为大众提供了几乎是全套的信息端口，甚至提供了「开发者接入指南」将发热门诊地图开放给符合资质的第三方。</p><br/><p>腾讯新闻的「较真平台」与微信小程序「微信辟谣助手」在疫情谣言扩散的第一时间，也及时将谣言一一驳斥。还获取了来自包括中国医师协会健康传播工作委员会在内的各类的官方背书，让用户对辟谣内容更加放心。</p>"
    },
    {
      title: "2.  待更新",
      content: ""
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
