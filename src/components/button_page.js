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
import right from '../images/right.png';

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
                  <img className="btn-icon" src={right}/>
                </div>
              </Button>
    })
    return (
        <div style={{display: this.props.display}}>
          <div style={{display: this.state.page == 0 ? null : 'none'}}>
            <div className='btn-stats'>
              <div className='stats-item'>
                <p className='stats-num'><CountUp start={this.props.display ? 299: 300} end={338} duration={5} /></p>
                <p className='stats-name'>企业贡献案例</p>
              </div>
              <div className='stats-item'>
                <p className='stats-num'><CountUp start={this.props.display ? 74: 75} end={106} duration={5} /></p>
                <p className='stats-name'>共创伙伴</p>
              </div>
              <div className='stats-item'>
                <p className='stats-num'><CountUp start={this.props.display ? 349: 350} end={400} duration={5} /></p>
                <p className='stats-name'>万媒体曝光</p>
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