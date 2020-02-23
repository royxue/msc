import React from "react"
import {
  Button,
  ButtonArea
} from "react-weui"
import _ from "lodash";
import ButtonArticle from './button_arti';
import CountUp from 'react-countup';

const DATA= {
  info1:[
    {
      title:"1.	我们为什么要做出这份指南？",
      content:"<p>面对疫情，各大新闻平台不断统计着各类企业捐款捐物的资讯。一方面，踊跃捐赠自然非常可贵，从金额、规模到用途都备受关注，各种监督和议论都不绝于耳；另一方面，抗击疫情显然需要更多的协同。物质层面的帮助，显然不足以展示企业所起作用的全貌。</p><br/><p>作为一家长期专注于社会议题与企业可持续发展的战略咨询公司，我们希望解读、启发与帮助企业相较于传统的捐款捐物，如何用自身核心力量来协助解决社会问题，洞察商业力量在应对疫情上发挥的深层作用，为抗击灾害提供切实有效的帮助。</p><br/><p>我们会将会就「企业应该如何应对疫情」这一问题进行拆分，并通过已有案例将问题背后的商业逻辑和潜在机遇分享出来，让更多企业能够了解、认可并最终参与抗疫的实际行动中。</p>"
    }
  ],
  info2:[
    {
      title:"2.	这份案例集与共创指南包含什么内容？",
      content:"<p>案例集与共创指南共包含三部分内容：</p><ul}><li>「战略型灾情应对十问」，通过分析企业在灾情期间的机遇与挑战，为企业拓宽思考路径；</li><li>企业疫情应对案例集，包含各细分领域中具有代表性的企业灾情应对案例介绍及相关链接；</li><li>案例及与共创指南加入细则，包含企业参与到该案例集与共创指南的方式，和作为共创伙伴将会收获的内容。</li></ul>"
    }
  ]
}

const RIGHT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACdElEQVR4nO3bvWoVQRjG8Z9fyS1EJGmUKLkJ04tamGChtRJzCZaKV+AHWmshooUQsDMoXkIIGDuR2GhlFKMxFrNhU5w9nNVz3plD9oFlds/uzLzPf+fsDss7dOrUqdMB1qEBrpnBdZzF1IB1cmoXn7GKh/j4P40t40fV6Dhu37HUz2C/u7mMu/uO17CBX/0aLEDHMIu5fb/dwIM2jcyo7/wXXBpWdIFawFf1SJhuU/mOehgtDD20OF1U+7jVpuK7qtLaCIKK1rrk5W2vk4cbKk1V5YdRRBSs91V5vNfJJgBHqvL30MOJ156Ho71ONgE4MOoABPRxEvcwH9BXa0UAuClNRF7hXEB/rRQB4Dl2MFntFwUhAsAKrkhP40m8wIWAfgdS1EPwKa5KECbwTCEQIt8CRUKIfg0WByHHPKAoCLkmQsVAyDkTLAJC7qlwdgi5AZAZQgkAyAihFABkglASADJAKA0AwRBKBEAghFIBhKlUAJfxWPqQuY1FvBxFRyUCCDNPeQBCzVMWgHDzlAMgi3nKAJDNPPkBZDVPXgDZzZMPQBHmyQOgGPPEAyjKPLEAijNPHIAizdOQNTFknccTKevkp5RxthLQ70CKGAELCjVPzAi4jW/SR443Af21UgSADSnrtEjlngpnVweg4fedqoz4i4xaex565jw2AdisylNDDydes1W52etkE4DVqpwz3snSizhT7b9uU3FaSjHflVLOxxHCojpdfgsnel3Ub8HEEu7vO16XEo+3hxTgqDSB0+o7T1ry8+hfGltSj4Rx3LZwrZ/BQRZATVeNzEtp9KW/Ov9ID7xVadHUp6zRdOrUqVPJ+gswbfgyDFqGOQAAAABJRU5ErkJggg=="

class ButtonPage extends React.Component {
  state = {
    page: 0
  }

  componentWillReceiveProps() {
    console.log(this.props.page)
    console.log(this.state.page)
    if (!this.props.page && this.state.page != 0)
      this.setState({
        page: 0
      })
  }

  render() {
    var article = _.map(DATA['info'+this.state.page], (info)=> {
      return <ButtonArticle key={info.title}
                            onBtnClick={e=>this.setState({page:0})}
                            display={this.state.page != 0 ? null : 'none'}
                            _page={this.state.page}
                            title={info.title}
                            content={info.content}
                            changeFooter={this.props.changeFooter}
            />
    })
    return (
        <div style={{display: this.props.display}}>
          <div style={{display: this.state.page == 0 ? null : 'none'}}>
            <div className='btn-stats'>
              <div className='stats-item'>
                <p className='stats-num'><CountUp start={this.props.display ? 84: 85} end={100} duration={5} /></p>
                <p className='stats-name'>企业贡献案例</p>
              </div>
              <div className='stats-item'>
                <p className='stats-num'><CountUp start={this.props.display ? 174: 175} end={200} duration={5} /></p>
                <p className='stats-name'>共创伙伴</p>
              </div>
              <div className='stats-item'>
                <p className='stats-num'>77W</p>
                <p className='stats-name'>媒体报告</p>
              </div>
            </div>
            <ButtonArea >
              <Button type="default" onClick={e=>this.setState({page:1})}>
                <div className="btn-page">
                  01. 我们为什么要做出这份指南？
                  <img className="btn-icon" src={RIGHT}/>
                </div>
              </Button>
              <Button type="default" onClick={e=>this.setState({page:2})}>
                <div className="btn-page">
                  02. 这份案例集与共创指南包含什么内容？
                  <img className="btn-icon" src={RIGHT}/>
                </div>
              </Button>
            </ButtonArea>
          </div>
          <div>
          {article}
          </div>
        </div>
    )
  }
}

export default ButtonPage;