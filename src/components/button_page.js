import React from "react"
import {
  Button,
  ButtonArea
} from "react-weui"

import ButtonArticle from './button_arti';

class ButtonPage extends React.Component {
  state = {
    page: 0
  }

  render() {
    return (
        <div style={{display: this.props.display}}>
          <div style={{display: this.state.page == 0 ? null : 'none'}}>
            <ButtonArea >
              <Button type="default" onClick={e=>this.setState({page:1})}>
                <p className="btn-page" style={{fontSize:'17px'}}>
                  1. 我们为什么要做出这份指南？
                </p>

              </Button>

              <Button type="default" onClick={e=>this.setState({page:2})}>
              <p className="btn-page" style={{fontSize:'17px'}}>
                2. 这份案例集与共创指南包含什么内容？
              </p>
              </Button>
              {/*<Button type="default" onClick={e=>this.setState({page:3})}>
                03. Wtf Am I
              </Button>*/}
            </ButtonArea>
          </div>
          <ButtonArticle onBtnClick={e=>this.setState({page:0})} display={this.state.page == 1 ? null : 'none'} />
          <ButtonArticle onBtnClick={e=>this.setState({page:0})} display={this.state.page == 2 ? null : 'none'} />
          <ButtonArticle onBtnClick={e=>this.setState({page:0})} display={this.state.page == 3 ? null : 'none'} />
        </div>
    )
  }
}

export default ButtonPage;