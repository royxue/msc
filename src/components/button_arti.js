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
          <h1>H1 Heading</h1>
          <section>
            <h2 className="title">H2 Title</h2>
            <section>
              <h3>H3 Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute</p>
            </section>
            <section>
              <h3>H3 Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
        </Article>
        <Button onClick={this.props.onBtnClick}> Go back</Button>
      </div>
      )
    }
  }

  export default ButtonArticle;