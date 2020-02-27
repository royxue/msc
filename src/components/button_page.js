import React from "react"
import {
  Button,
  ButtonArea
} from "react-weui"
import _ from "lodash";
import ButtonArticle from './button_arti';
import CountUp from 'react-countup';
import FooterBlock from './footer_block';
import data from '../data/btn';

const RIGHT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACdElEQVR4nO3bvWoVQRjG8Z9fyS1EJGmUKLkJ04tamGChtRJzCZaKV+AHWmshooUQsDMoXkIIGDuR2GhlFKMxFrNhU5w9nNVz3plD9oFlds/uzLzPf+fsDss7dOrUqdMB1qEBrpnBdZzF1IB1cmoXn7GKh/j4P40t40fV6Dhu37HUz2C/u7mMu/uO17CBX/0aLEDHMIu5fb/dwIM2jcyo7/wXXBpWdIFawFf1SJhuU/mOehgtDD20OF1U+7jVpuK7qtLaCIKK1rrk5W2vk4cbKk1V5YdRRBSs91V5vNfJJgBHqvL30MOJ156Ho71ONgE4MOoABPRxEvcwH9BXa0UAuClNRF7hXEB/rRQB4Dl2MFntFwUhAsAKrkhP40m8wIWAfgdS1EPwKa5KECbwTCEQIt8CRUKIfg0WByHHPKAoCLkmQsVAyDkTLAJC7qlwdgi5AZAZQgkAyAihFABkglASADJAKA0AwRBKBEAghFIBhKlUAJfxWPqQuY1FvBxFRyUCCDNPeQBCzVMWgHDzlAMgi3nKAJDNPPkBZDVPXgDZzZMPQBHmyQOgGPPEAyjKPLEAijNPHIAizdOQNTFknccTKevkp5RxthLQ70CKGAELCjVPzAi4jW/SR443Af21UgSADSnrtEjlngpnVweg4fedqoz4i4xaex565jw2AdisylNDDydes1W52etkE4DVqpwz3snSizhT7b9uU3FaSjHflVLOxxHCojpdfgsnel3Ub8HEEu7vO16XEo+3hxTgqDSB0+o7T1ry8+hfGltSj4Rx3LZwrZ/BQRZATVeNzEtp9KW/Ov9ID7xVadHUp6zRdOrUqVPJ+gswbfgyDFqGOQAAAABJRU5ErkJggg=="

class ButtonPage extends React.Component {
  state = {
    page: 0
  }

  goback = () => {
    this.setState({ page: 0})
  }

  render() {
    if (this.state.page != 0){
      var idxf = document.getElementById('index-footer');
      if (idxf) {
        idxf.classList.add("nodisplay");
      }
    } else {
      var idxf;
      if (typeof window === "undefined" || !window.document) {
        idxf = undefined;
      } else {
        idxf = document.getElementById('index-footer');
      }

      if (idxf) {
        idxf.classList.remove("nodisplay");
      }
    }
    const article = data[this.state.page - 1]
    var btns = _.map(data, (info, idx) => {
      const realidx = idx + 1;
      return  <Button key={idx} type="default" onClick={e=>this.setState({page: realidx})}>
                <div className="btn-page">
                  {info.title}
                  <img className="btn-icon" src={RIGHT}/>
                </div>
              </Button>
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
                <p className='stats-num'><CountUp start={this.props.display ? 60: 61} end={77} duration={5} /></p>
                <p className='stats-name'>万媒体报告</p>
              </div>
            </div>
            <ButtonArea >
              {btns}
            </ButtonArea>
          </div>
          <div>
          {
            (this.state.page != 0) ?
              <ButtonArticle
              display={this.state.page != 0 ? null : 'none'}
              _page={this.state.page}
              title={article.title}
              content={article.content}
              /> : null
          }
          <FooterBlock mode={1} show={this.state.page != 0}
              goback={this.goback}/>
          </div>
          <div className="placeholder" />
        </div>
    )
  }
}

export default ButtonPage;