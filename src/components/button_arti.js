import React from "react"
import {
  Article,
  Button
} from "react-weui"

class ButtonArticle extends React.Component {
  render() {
    return (
      <div style={{display: this.props.display}}
          >
        <Article>
          <h1>1.	我们为什么要做出这份指南？</h1>
          <section>
            <section>
              <p>面对疫情，各大新闻平台不断统计着各类企业捐款捐物的资讯。一方面，踊跃捐赠自然非常可贵，从金额、规模到用途都备受关注，各种监督和议论都不绝于耳；另一方面，抗击疫情显然需要更多的协同。物质层面的帮助，显然不足以展示企业所起作用的全貌。</p>
              <p>作为一家长期专注于社会议题与企业可持续发展的战略咨询公司，我们希望解读、启发与帮助企业相较于传统的捐款捐物，如何用自身核心力量来协助解决社会问题，洞察商业力量在应对疫情上发挥的深层作用，为抗击灾害提供切实有效的帮助。</p>
              <p>我们会将会就「企业应该如何应对疫情」这一问题进行拆分，并通过已有案例将问题背后的商业逻辑和潜在机遇分享出来，让更多企业能够了解、认可并最终参与抗疫的实际行动中。</p>
            </section>
          </section>
        </Article>
        <Button
          type="default"
          onClick={this.props.onBtnClick}
          style={{width: '60%'}}>返回</Button>
        <div className="btn-placeholder" />
      </div>
      )
    }
  }

  export default ButtonArticle;