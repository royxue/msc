import React from "react"
import {
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxHeader,
  MediaBoxTitle
} from "react-weui";
import _ from "lodash";

import ColBox from "../components/col_box";
import classNames from "classnames";
import DATA from '../data/strategy';

const heart_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEYwMTZDRDg0MjVEMTFFQUFFQTA4QUZCNkI4RURDNDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEYwMTZDRDk0MjVEMTFFQUFFQTA4QUZCNkI4RURDNDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRjAxNkNENjQyNUQxMUVBQUVBMDhBRkI2QjhFREM0MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRjAxNkNENzQyNUQxMUVBQUVBMDhBRkI2QjhFREM0MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvK0zSwAAAVySURBVHja3FlrbBRVFJ6OVQSiiBYxCxpQCYiWWtCgGEWCJETFivThYlEBpaDBgD/kh8of/GEiiaLBVyUYSugLhUJ9VkSN0RiDVWsATRAReYRQDRJFq1i/k56rd4/nzs7szrYbT/JlZu/7m/O4594t6O7u9v4PUphJp+Li4kF4XAyMBAYCfwEHgT3AdxGGuhoYBwzhtRwDDgMdwFdhBujo6IhGBIsfgMccYAZwFXCO0ozU+yXwBlDP75qMAFqBSwOm3AVsANYCB9KtryCMaYHEMjyWAkMjKq8ZeAT4RpSvB+4IOcZvwCpgOdDl0oifhsAlwA68Pp4BCZIK/rKLRPkvEcY4HVjG40yMrBEQuB6PtgDzI7/YCxwH+gHDgTMCFvQM8AC/FwEt7COH2a9+Bc5lswsa51bum14jIDEBj+0OEhuBMnJ0DEIOXwqM5QUQ+SeB35V+i4GX+f0ocA0HC+o3CbiBHX8kj9/oILIZmJpWIyAxGI8fgAGiLTnuYiz+A9Fem+x8YCVQqdTVAXeGNCsypdXABKXuAmB/kEbeUUhsQYcSSSJA9gNVwENK3Rx29jDyCXAFa0HK2859BF+3Bo/xosOHIFAm2k1m9VPbYRz3lwDfi75PsGOvFuUUsQoiRK6ZwPvAdVbZGPa5p1NMC4s7FY+fOUoY6QQSINLFbQaynZcrk30NXAb8qdTdp5AheR1I8ry2DGZr6bTKTgMOAWdbZeSLZ9L6bNNaKEiQJAWJdgcJktEBEe5ZJQST3AjsZHOz17GPMc8q71I0SNFygfSR+0Wjj0Gizfq9CRgVoP6VvHm55HngXqWcTHMd7xPkg89x+KUPt0bsX28Cnyra7jEtfO0xPJAt00HkLdbGFDzeVRbxIrCbd+7XQto7abQBOCVk++EiRSlTnH+00YiMy52GBEuNqP+DQiLa1PC+EZaE2YfG8tdPJ48qeVar4lPTDBEZqbYpWWqKGYHEZ1lk3aTByewD2jidHJEeU+pOUiQVZaXGOS8SFe1WqE3w5mNLS0zHiLWMEt7Vi3gPauOU3iWfc6D4J5s2RIaIhrY6z1MGOhbzuegLRliR5lbkWzHalhPW+0/KQEf7+EAoc7n+vuW8Mj6b7HIvO7SRFSjrayL9JTFD5EdRkRCHlwc5W52I9+V5cEQfJoOD8ZF9vFAjJcpJ7KM8umsoFb+/9S1ns2VKHl+YkNlfK6OsIdImTQthd1KeEpmpHDO2+Ww27XyYsuXhPCUi17Ub69/li7wpJTOFVkrzjEQlHxVsWSWz36cceVG+yFmcBcjbmNoUIlDPcb47suVCaCVfyGxXfGMp1n3yP2d2FK7gXMeWWSDzQh+ToOz6ciUfrDU/tMuH6UrZgj4k0yoSRJOJpKzTVza+nRziNDIv9TKJrcBNSjndgR0JJMJk6AQ2W6ma34tktgA3K+W3a4cy590vyNQ7rmuITG2OSdCHnKGU03rUG8jAS2yQoWv9aqXqnhySaeFzuRSykA2uTmH/ViB11itVdMc1N2YStzjMqdHxsdNrxGrcwINJudv792I6W9kUlURo0xJkaLCkUnWXsuNGlVe9nr8LpCTDkIhExNLMbIdmMiWz0RHuaZ6GsIP4UWflaJZ0kFmXgSZmOcypPspAfiafMMBn6A63LuQwrzg0URnWnLImYvlMlVJVHYIM/Ul6m1JexXVerxFhMk0OzVQHmBn1KXeYU1Oma/G97KUxwMzWKyQqMg2xuSZiyFQ5Uoo1fI6oc5CozJYESaEXnzRZpGyZxyl3QulTEdcp1PfiFZfPJByaiO30GTeRIDOTJJrjnDQXRIKc2phTc9wT5oqIST0kmfJc3cwUerkVWvSVXs+/U+8BO3I10d8CDAAm6YfrKYkOmgAAAABJRU5ErkJggg=="
const appMsgIcon =
  <img src={heart_src} style={{height:'80%', width:'80%'}}/>




class StrategyPage extends React.Component {
  render() {
    const contentboxStyle = {
      "-webkit-line-clamp": 'none'
    }

    var boxList = _.map(DATA['strategy'], (strategy) =>
      {
        return <ColBox key={strategy.title} title={strategy.title} content={strategy.content} />
      }
    )

    return(
      <Panel style={{display: this.props.display}}>
        <PanelBody style={{display:'inline'}}>
          <MediaBox type="appmsg">
          <MediaBoxHeader
          className={
          classNames({
            'modified-md-header': true
          })}
        >{appMsgIcon}
            </MediaBoxHeader>
            <MediaBoxTitle>
              <p className='small-title'>企业复苏新周期：战略型灾情应对10问</p>
              <p className='small-subtitle'>请在每一问开头代入“我、企业、团队”</p>
            </MediaBoxTitle>
          </MediaBox>
          {boxList}
        </PanelBody>
      </Panel>
    )
  }
}

export default StrategyPage;
