import React from "react"
import {
  Article,
  Button
} from "react-weui"

class ButtonArticle extends React.Component {
  componentDidMount() {
    this.props.changeFooter();
  }
  parseToDOM(str){
    var div = document.createElement("div")
    if(typeof str ==="string")
      div.innerHTML = str;
    return div.innerHTML;
  }
  render() {
    return (
      <div style={{display: this.props.display}}>
        <Article>
          <h1>{this.props.title}</h1>
          <section  dangerouslySetInnerHTML={{__html:this.props.content}}>
          </section>
        </Article>
      </div>
      )
    }
  }

  export default ButtonArticle;