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
                01. Who Am I
              </Button>
              <Button type="default" onClick={e=>this.setState({page:2})}>
                02. Where Am I
              </Button>
              <Button type="default" onClick={e=>this.setState({page:3})}>
                03. Wtf Am I
              </Button>
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