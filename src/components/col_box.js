import React from "react"
import {
  MediaBox,
  MediaBoxTitle,
  MediaBoxDescription,
} from "react-weui";

import classNames from "classnames"
const img_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAmCAYAAADEO7urAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REJERDA2ODk0MjVDMTFFQUFFRDRGRjYxMzNDM0JBRUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REJERDA2OEE0MjVDMTFFQUFFRDRGRjYxMzNDM0JBRUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQkREMDY4NzQyNUMxMUVBQUVENEZGNjEzM0MzQkFFRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQkREMDY4ODQyNUMxMUVBQUVENEZGNjEzM0MzQkFFRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjhOt4kAAAE6SURBVHjarNbNSgJhHIXxgVm4MTIlhcgPJKSiIrqPrqSWIoFudCERQSC1aKEURAVBV9KmVTUWaF9EiGFF0cbpDMziMNv/GXhgVj8GnDmvruM4E2gTjdGLI7gOkI/+0KoC3AjBoB+0rEC3CP1Giwq0RugXmlegdUI/UUmBNgkdojkFukPoABUU6F4EzSvQFqHvKKt88f3wS5pRoIeEPqGMAm1H0LQCPSK0j6YV6AmhDyipQM8J7aJJBXpBqKdCLwm9RQkFuk/otSsAZ9F6eG/+gSr0dL9oTbnyKxasGhniJQvWIGyEFizYNmEf1iNiNzK4RdV6v1mPBF7tV5RTrrXpCOCVfrZOf4ewnnXyjwm7RynVGnvWj/2MsDs0pVrfG+v6nvJAorh10x5D7ArFFBMe/AUuK54suP4FGAD+a37Q7G8Z3wAAAABJRU5ErkJggg=="
const load_Img=
  <img src={img_src} style={{transform:'rotate(90deg)', height:'2%', width:'2%', 'marginRight':'4px'}}/>
const load_Img_up=
  <img src={img_src} style={{transform:'rotate(270deg)', height:'2%', width:'2%', 'marginRight':'4px'}}/>

class ColBox extends React.Component {
  state = {
    show: false
  }

  showBox = () => {
    if (this.state.show) {
      this.setState({ show: false })
    } else {
      this.setState({ show: true })
    }
  }
  parseToDOM(str){
    var div = document.createElement("div")
    if(typeof str ==="string")
      div.innerHTML = str;
    return div.innerHTML;
  }

  render() {
    var boxClass = classNames({
      'box-show': this.state.show,
      'box-hide': !this.state.show
    })
    return (
      <MediaBox type="text">
        <MediaBoxTitle>
          <div className='box-title'>
          <div dangerouslySetInnerHTML={{__html:this.props.title}}></div>
          </div>
        </MediaBoxTitle>
        <MediaBoxDescription className={boxClass}>
          <p dangerouslySetInnerHTML={{__html:this.props.content}}></p>
        </MediaBoxDescription>
        <div onClick={this.showBox} className={classNames({
          'box-more': this.props.need_flag !='none',
          'box-none': this.props.need_flag == 'none'
        })}>
          <div>
          {this.state.show? null:load_Img}
          {this.state.show? load_Img_up:null}
          {/* {this.state.show? '收起' : '查看更多'} */}
          </div>
        </div>
      </MediaBox>
    )
  }
}

export default ColBox;