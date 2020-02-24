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

const heart_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEYwMTZDRDg0MjVEMTFFQUFFQTA4QUZCNkI4RURDNDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEYwMTZDRDk0MjVEMTFFQUFFQTA4QUZCNkI4RURDNDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRjAxNkNENjQyNUQxMUVBQUVBMDhBRkI2QjhFREM0MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRjAxNkNENzQyNUQxMUVBQUVBMDhBRkI2QjhFREM0MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvK0zSwAAAVySURBVHja3FlrbBRVFJ6OVQSiiBYxCxpQCYiWWtCgGEWCJETFivThYlEBpaDBgD/kh8of/GEiiaLBVyUYSugLhUJ9VkSN0RiDVWsATRAReYRQDRJFq1i/k56rd4/nzs7szrYbT/JlZu/7m/O4594t6O7u9v4PUphJp+Li4kF4XAyMBAYCfwEHgT3AdxGGuhoYBwzhtRwDDgMdwFdhBujo6IhGBIsfgMccYAZwFXCO0ozU+yXwBlDP75qMAFqBSwOm3AVsANYCB9KtryCMaYHEMjyWAkMjKq8ZeAT4RpSvB+4IOcZvwCpgOdDl0oifhsAlwA68Pp4BCZIK/rKLRPkvEcY4HVjG40yMrBEQuB6PtgDzI7/YCxwH+gHDgTMCFvQM8AC/FwEt7COH2a9+Bc5lswsa51bum14jIDEBj+0OEhuBMnJ0DEIOXwqM5QUQ+SeB35V+i4GX+f0ocA0HC+o3CbiBHX8kj9/oILIZmJpWIyAxGI8fgAGiLTnuYiz+A9Fem+x8YCVQqdTVAXeGNCsypdXABKXuAmB/kEbeUUhsQYcSSSJA9gNVwENK3Rx29jDyCXAFa0HK2859BF+3Bo/xosOHIFAm2k1m9VPbYRz3lwDfi75PsGOvFuUUsQoiRK6ZwPvAdVbZGPa5p1NMC4s7FY+fOUoY6QQSINLFbQaynZcrk30NXAb8qdTdp5AheR1I8ry2DGZr6bTKTgMOAWdbZeSLZ9L6bNNaKEiQJAWJdgcJktEBEe5ZJQST3AjsZHOz17GPMc8q71I0SNFygfSR+0Wjj0Gizfq9CRgVoP6VvHm55HngXqWcTHMd7xPkg89x+KUPt0bsX28Cnyra7jEtfO0xPJAt00HkLdbGFDzeVRbxIrCbd+7XQto7abQBOCVk++EiRSlTnH+00YiMy52GBEuNqP+DQiLa1PC+EZaE2YfG8tdPJ48qeVar4lPTDBEZqbYpWWqKGYHEZ1lk3aTByewD2jidHJEeU+pOUiQVZaXGOS8SFe1WqE3w5mNLS0zHiLWMEt7Vi3gPauOU3iWfc6D4J5s2RIaIhrY6z1MGOhbzuegLRliR5lbkWzHalhPW+0/KQEf7+EAoc7n+vuW8Mj6b7HIvO7SRFSjrayL9JTFD5EdRkRCHlwc5W52I9+V5cEQfJoOD8ZF9vFAjJcpJ7KM8umsoFb+/9S1ns2VKHl+YkNlfK6OsIdImTQthd1KeEpmpHDO2+Ww27XyYsuXhPCUi17Ub69/li7wpJTOFVkrzjEQlHxVsWSWz36cceVG+yFmcBcjbmNoUIlDPcb47suVCaCVfyGxXfGMp1n3yP2d2FK7gXMeWWSDzQh+ToOz6ciUfrDU/tMuH6UrZgj4k0yoSRJOJpKzTVza+nRziNDIv9TKJrcBNSjndgR0JJMJk6AQ2W6ma34tktgA3K+W3a4cy590vyNQ7rmuITG2OSdCHnKGU03rUG8jAS2yQoWv9aqXqnhySaeFzuRSykA2uTmH/ViB11itVdMc1N2YStzjMqdHxsdNrxGrcwINJudv792I6W9kUlURo0xJkaLCkUnWXsuNGlVe9nr8LpCTDkIhExNLMbIdmMiWz0RHuaZ6GsIP4UWflaJZ0kFmXgSZmOcypPspAfiafMMBn6A63LuQwrzg0URnWnLImYvlMlVJVHYIM/Ul6m1JexXVerxFhMk0OzVQHmBn1KXeYU1Oma/G97KUxwMzWKyQqMg2xuSZiyFQ5Uoo1fI6oc5CozJYESaEXnzRZpGyZxyl3QulTEdcp1PfiFZfPJByaiO30GTeRIDOTJJrjnDQXRIKc2phTc9wT5oqIST0kmfJc3cwUerkVWvSVXs+/U+8BO3I10d8CDAAm6YfrKYkOmgAAAABJRU5ErkJggg=="
const appMsgIcon =
  <img src={heart_src} style={{height:'80%', width:'80%'}}/>


const DATA = {
  strategy: [
    {
      title: "1.	你的企业与团队是否有足够的能力评估与灾情相关的社会问题，并寻找到与自身企业最为相关的细分议题？",
      complete_title: "",
      content: "<p>往往企业提出的第一类问题是：有哪些利益相关方？我应该如何与他们产生连接？在疫情下，有一个非常基础的分析思路是：</p><ul><li>• 外部利益相关方，包括信息获取的来源方（各级政府与国际、本土的非政府组织、媒体等）</li><li>• 内部利益相关方，包括需要协调的部门（甚至是跨部门）及决策者与执行者</li></ul><br/><p>在此基础上，思考目前疫情（或是任何未来可能发生的灾情）还有哪些信息、沟通、透明度相关的问题没有被解决，如</p><ul><li>• 疫情实时动态发布</li><li>• 肺炎知识科普与辟谣</li><li>• 便民服务信息</li></ul><br/><p>在微信的案例中可以看到，微信超过 10 亿的用户背后反映的现实是，在信息导流层面，如果仅仅只有疫情地图和实时播报，将难以满足用户对于疫情进展的多元化的资讯需求。</p><br/><p>因此，多元化的信息资讯和疫区报道也同样呈现在疫情实时动态播报版块当中。同时，腾讯借着「微信」这一巨大的流量优势及其多元的产品组合，可以使微信（包括「看一看」、「搜一搜」等功能）成为一个「超级入口」，联动腾讯地图、腾讯医疗、腾讯新闻等旗下众多产品为大众提供了几乎是全套的信息端口，甚至提供了「开发者接入指南」将发热门诊地图开放给符合资质的第三方。</p><br/><p>腾讯新闻的「较真平台」与微信小程序「微信辟谣助手」在疫情谣言扩散的第一时间，也及时将谣言一一驳斥。还获取了来自包括中国医师协会健康传播工作委员会在内的各类的官方背书，让用户对辟谣内容更加放心。</p>"
    },
    {
      title: "2.  你的企业战略能否灵活应对灾情导致的政治经济秩序变化？",
      content: "<p>疫情发生后，诸多行业的供需关系不再平衡。这种秩序的打破主要体现在两个方面：</p><ul><li>•	需求骤然增加导致供给不足：口罩、线上生鲜零售等</li><li>• 需求减少造成的供给过剩：不仅包括旅游和出行产品服务、线下零售业等，这里还包括由于企业暂停营业导致的临时性人员过剩</li></ul><br/><p>面临这些挑战，企业存在下面几种思考路径：</p><ul><li>•	调整现有的资源配置机制以适应新的临时性供需关系</li><li>• 找到供需关系互补的产业，通过双向的资源互换重新建立秩序，并建立生态联动</li></ul><br/><p>我们可以看到，达达、每日优鲜、盒马等企业在疫情期间面临着巨大的机遇和挑战——机遇在于消费者的需求在这段时间呈爆炸性增长，这给他们带来了极佳的用户增长和留存可能；但另一方面，如果这些企业选择直面面前存在的巨大需求，这无疑对他们的供应链提出了史无前例的挑战。</p><br/><p>而我们已经知道，这些企业都选择铆足干劲迎接这些挑战。他们最大化调用自己的渠道网络和资源能力，面对大幅增加的线上生鲜采购需求，对产品供给进行充分及时的保障，确保基本民生诉求能够被尽可能满足。尽管民众买不到菜的情况仍有发生，但这些企业的一系列举措也充分了展示了其：</p><br/><ul><li>• 强大的供应链管理能力</li><li>• 被充分贯彻的应急机制</li><li>• 应急机制下出色的落地执行能力</li></ul><br/><p>另一方面，以复星为代表的企业则有效展现了其「战略型物资储备」的能力，从世界各地采购的医用物资在短时间内完成各种手续，运回到国内。能够如此迅速、高效地进行部署并参与落实，以下能力缺一不可：</p><ul><li>•	政治格局理解与本土化政策协调力</li><li>• 大额物资统筹与渠道执行力</li><li>• 当地资源网络建设与调动力</li></ul>"
    },
    {
      title: "3.	你的企业是否愿意致力于解决相关的社会问题而成为业内的最佳实践？",
      content:"<p>我们以互联网企业为例，这些企业在明确识别了利益相关方与自身核心能力的基础上，还需要思考：</p><ul><li>•	构建疫情发展的数字能力，优化数据采集（因为医疗数据采集具有明显的滞后性）</li><li>• 丰富数据的维度与强化模型训练，除医疗数据外，疫情传播往往还涉及气温、交通、湿度、社会行为、城市卫生等维度，而这些数据又可以更好地被应用于精准预测之中</li><li>• 为数据预测与大众的行为习惯进行协调内外部利益相关方的资源配置</li></ul><p>这样的能力，可以在灾情中体现行业的优势与行业中企业自身的优势。在 360 的案例中，其同行查询系统就以央视、人民日报等媒体的公开信息为基础，并依托自身人工智能大数据平台不断学习矫正，来获得更精准的判断。</p><p>在同是疫情重发地的浙江，省卫检委与阿里巴巴钉钉、达摩院、阿里宜搭团队以及浙江谷瞰服务团队联合，仅用一天的时间，就搭建出了一整套的新冠肺炎联防平台。</p></br><p>而丁香医生的实时播报平台和疫情地图之所以可以取得可观的浏览量，其核心原因体现在不仅精准识别与连接了医院、医生、科研人士、政府等利益相关方，联合人民日报增加官方信任度呈现实时动态，针对不同人群提供简单实用的防护建议；还使用来自国家卫健委、各省市区卫健委、各省市区政府、港澳台官方渠道公开数据并进行视觉化呈现；在此基础上，有丁香园的数据分析师和编辑团队 24 小时值班，持续跟踪官方数据，并且在上线前由专人反复核实，确保信息准确、不遗漏、不重复。</p><br/><p>同时，凭借其强大的内容运营能力，丁香医生通过整理官方权威防护建议，制作了许多在社交平台上易于流通的简单、易懂、字大的图文防护大全（甚至提供 pdf 版本供打印）与为大众准备了快、准、全的辟谣合辑。并结合互联网平台的优势联动全国各地区医生专家面向湖北地区用户开展线上免费义诊服务，可以让部分公众在家就能解决一部分担忧，减少出门就医的风险。 </p>"
    },
    {
      title:"4.	你的企业如何在灾情中展示企业的核心能力，拉开与现有竞争者的差距？",
      content:"<p>这个问题有两个思考的维度：</p><ul><li>• 从关键业务、价值主张、核心资源、服务属性、用户细分、渠道通路等商业模式的不同组成模块中寻找到最适合应用于灾情解决的场景与服务</li><li>• 将企业的核心能力在实践中进行应用并广泛传播，将疫情信息、知识的社交化与娱乐化呈现，以触达更多受众</li></ul><br/><p> 我们可以看到，有许多拥有大流量的平台类企业都做出了符合自身产品逻辑与用户习惯的动作，比如知乎的「问答模式」、喜马拉雅的「音频」、平安好医生的「问诊」、快手的「直播」等。</p><br/><p>而以快手为代表的企业则将枯燥的疫情科普插入到其已有的产品内容中，以娱乐化、竞技化的直播答题形式高效为用户提供疫情知识科普和防控指导。快手 App 的侧边栏还上线了「停课不停学」专区，联合学而思、新东方、VIPKID 等外部教育企业，推出了教育内容来减轻延迟开学对学生群体的影响，并配合自身的算法机制提供 50 亿的流量来助力这些内容的传播。</p><br/><p>另一个有趣的垂直领域就是年轻人聚集的文化社群哔哩哔哩，B 站很好地将自身的核心优势发挥了出来：除了卫健委新闻发布会、专家解读外，还收录了疫区 UP 主实拍 Vlog、小汤山医院建设进展等内容，为年轻人提供有温度又有趣的疫情资讯。 </p>"
    },
    {
      title:"5.	能否基于灾情所创造出的需求，展现自己核心能力，以获取用户增长（从短期到长期）并获得公众信任（长期）？",
      content:"<p>去年八月，包括贝佐斯、库克等在内的「商业圆桌会议」联合签署了《公司宗旨宣言书》，倡导商业应该致力于向客户传递企业价值，通过雇佣不同群体并提供公平的待遇来投资员工，与供应商交易时遵守商业道德，积极投身社会事业，注重可持续发展，为股东创造长期价值。</p><br/><p>言犹在耳，疫情突来，中国也加速这一进程，在特殊的场景中开始思考自身存在的意义，尤其是社会价值方面的意义。面对意外导致的市场格局，各家公司重新审视内在，能有效帮助自身突破惯性，化危为机，在重大的社会问题面前进行创新和引领，从而脱颖而出。</p><br/><p>从效率提升层面，企业存在的基于疫情的保障与支持主要有以下几类：</p><ul><li>• 远程办公协作支持：大部分企业在春节假期后第一次安排员工远程办公，整体工作效率如何得到保障成为了企业面临的一大难题；</li><li>• 远程教学支持：全国大批院校、中小学开学时间推迟，在线课程和线上教学成为其中一种可选的代替方式；但网络授课远远非高校仅动用自身的力量就能够实现的，外部的支持不可或缺；</li><li>• 远程研究与学习支持：身处校外，在线刊物与研究文献成为了远程研究与学习的重要资源，但资源权限成为了阻碍他们顺利开展工作的掣肘；</li><li>• 抗疫人员及物资信息统计管理支持：无论是社区管控还是物资捐赠统计，疫情时期信息统计管理诉求激增且较为急迫；</li><li>• 药物及疫苗研发能力支持：研究所需要争分夺秒地开展病毒分析、药物及疫苗研发的工作，强大的云计算、AI、大数据能力在这一时刻显得尤为关键。</li></ul><br/><p>不可否认的是，面对着众多企业的临时远程办公需求（即时通讯、文档协作、项目管理等），服务免费化所带来的潜在价值是巨大的——对于这些效率工具型产品而言，疫情时期衍生出了密集的远程办公需求，而远程办公协作正是这类产品的核心使用场景之一。</p><br/><p>我们可以看到，以钉钉、企业微信、飞书为代表的案例（也同样适用于在线上授课和在线课程领域）都很好的抓住了这一次机遇：</p><ul><li>• 通过服务免费化大幅提高目标用户的产品使用意愿</li><li>• 让用户迈过关键性的「初次使用」门槛</li><li>• 基于服务内容将产品使用场景延伸到日常办公，实现用户留存</li></ul><br/><p>而在更高级别的可持续发展战略思维下，能够多走一步或是解决「最后一公里」用户需求的企业才能真正脱颖而出。</p><br/><ul><li>• 通过服务免费化大幅提高目标用户的产品使用意愿</li><li>• 让用户迈过关键性的「初次使用」门槛</li><li>• 基于服务内容将产品使用场景延伸到日常办公，实现用户留存</li></ul><br/><p>而在更高级别的可持续发展战略思维下，能够多走一步或是解决「最后一公里」用户需求的企业才能真正脱颖而出。</p><ul><li>•	多想一步，节约用户的时间</li><li>• 多留意一点，保护用户的隐私</li><li>• 多付出一份力，为用户产生相互连接的可能性</li></ul><br/><p>比如说，灵析、问卷星等产品均能够敏锐地预见到疫情发生后庞大的人员、物资信息收集统计需求。在市面上缺乏标准化采集的情况下，这些产品积极承担信息收集统计链条工作的始端角色，为用户上线了标准化的用于人员信息统计管理、物资捐赠/领用登记、组织收支公示等防疫工作的表单、问卷模板，供一线基层人员直接下载使用，保障链条的整体效率最大化。</p><br/><p>钉钉上线的「员工健康」服务，则可以帮助 B 端用户收集员工健康信息，实现健康管理的在线化与数字化。腾讯文档还想到了关注用户隐私，除了有常规性的表格外，还为用户提供在线的个人收集表单模板。</p>"
    },
    {
      title:"6.	基于客户/用户在灾情面前面对的社会问题，企业是否能够通过解决这些问题从而为他们创造更大的价值，或在解决这些问题的过程中巩固现有的和拓展更多与客户接触的渠道？",
      content:"<p>当前，企业很容易聚焦在捐钱捐物等重要而紧急的事项上，而没有思考那些重要而不紧急的部分。因此，在这个阶段，冷静审视和确认什么是面临的真正问题，比急于去解决更有价值——其中往往隐藏着更好的方案。</p><br/><p>如果仓促上阵，这类巨大的挑战，往往让企业觉得「这不是我一个人、一家企业可以解决的事情」，萌生「我应该如何与合作伙伴一起回应用户在灾情时期的诉求」等情绪，仿佛陷入一团乱麻。</p><br/><p>因此，这一类问题往往需要产品负责人或是企业决策者非同一般的视野与格局，同时还应具备对灾情所表现出来的问题有深刻的洞察和理解。<p/><br/><ul><li>•	能否在关键时期构建开放（甚至是开源）的平台</li><li>• 能否将自己的核心技术为他人所用</li><li>• 能否借此机会提高自己与专业机构的连接能力</li><li>• 当下的灾情问题本质上是一个什么问题</li><li>•	这个问题背后的解决机制是否有共性</li><li>• 如何触达到当下遭受灾害的潜在人群</li><br/><p>这里不得不说的依旧是中国互联网巨头腾讯与阿里。腾讯云向研究机构开放超级算力，免费提供云超算能力、运算集群支持以及基础的云计算能力。（比如向中山大学药学院罗海彬教授团队提供了批量 GPU 云服务器免费使用权，帮助该团队推进病毒药物的筛选工作）。而阿里也在科研支持方面充分发挥算力优势，向全球公共科研机构免费开放一切算力。</p><br/><p>除此之外，腾讯还多走了一步，发起「战疫开发者公益联盟」。</p><br/><p>他们在微信开放社区上线服务专区，为服务商和开发者提供资金和资源支持，帮助其给政府部门、医疗机构等快速开发疫情服务小程序。基于微信的「共抗疫情·小程序服务专区」还为开发者与需求方提供交流对话的平台，为大家展示优质的疫情小程序服务案例，促成疫情小程序供需两方高效对接。</p><br/><p>这一做法值得所有企业借鉴与学习，它的本质是：<p/><br/><ul><li>• 在企业自身现有的生态体系中增加活跃（如微信小程序）</li><li>• 以解决社会问题为目标连接生态中的贡献者（如服务商、开发者）</li><li>• 通过疫情展示自己的科技实力（硬实力）与服务能力（软实力）</li></ul>"
    },
    {
      title:"7.	企业能否通过解决灾情相关的社会问题累计更多商誉？",
      content:"<p>诸如每日优鲜、盒马等生鲜电商在骤然猛升的同时，同时面临着直接的用工短缺问题。但不同于以往的员工招募渠道，这些企业纷纷与暂停营业中的餐饮企业建立人力资源合作，对餐饮企业的待岗人员进行征用以应对人手不足的情况。</p><br/><p>这不但高效、良好地解决了企业自身当下的挑战，还降低了餐饮企业在疫情时期的人力资源支出，降低了企业劳务用工的风险，同时保障了待岗人员的收入问题。而线上生态零售和餐饮行业此次的人力资源互补，这种生态联动在未来也存在进一步拓展的可能性。</p><br/><p>另外，如果将灾情相关的社会问题进一步聚焦在疫情防控与救助的部分，企业的支持行动价值将会进一步被放大：</p><br/><ul><li>• 预防支持：在如常提供服务的过程中，杜绝服务过程中产生传染的可能性，减轻医疗负担</li><li>• 医疗支持－民众端：消费者的需求可能会受疫情影响存在更深层次的变化（如通信服务行业承载着新的医疗求助需求），企业需要针对这种需求变化，对服务做出对应的调整</li><li>• 医疗支持－医护人员端：确保医护人员在疫情期间的工作、生活及其它活动得到充分保障</li></ul><br/><p>如美团外卖迅速上线了「无接触配送」的功能，避免服务过程中的人员接触，防止感染造成疫情进一步扩散。几天前曾有外卖骑手确诊新型肺炎，但美团在坚持提供平台服务过程中，针对疫情防控采取的种种措施，使得该事件没有对美团造成明显影响，其在服务质量和抗疫支持两个层面做出的努力皆有目共睹。</p><br/><p>在疫情之中，企业的「雇主品牌」有了一个新的定义，即企业究竟是谁的「雇主」？</p><ul><li>• 直接聘用的员工</li><li>• 间接聘用的员工</li><li>• 平台/生态中的底层服务者</li><li>• 未来的（包括同行）的员工</li><li>• 通过「员工」影响「消费者」&「用户」</li></ul><br/><p>以滴滴为例，企业与司机一起，相继在全国各大城市自发组建「医护保障车队」，保障医疗工作者面临着公共交通停运、出行方式锐减的情况下仍然能够顺利出行，从后勤端为抗疫提供了强有力的支持。</p>"
    },
    {
      title:"8.	从长远来看，企业的灾情应对行动是否能反馈到企业发展与成长之中，即如何将「投入」转化为「投资」？",
      content:"<p>要思考这一问题，一个可行的思考角度是依旧是利益相关方的管理：</p><ul><li>•	消费者：是否洞察到并及时应对疫情时期的消费者诉求？</li><li>• 员工：员工在这一时期对企业存在哪些期望？</li><li>• 合作伙伴：企业能否就重要合作伙伴在疫情期间面临的重大挑战提供支持？</li><li>• 社会：疫情需要全社会共同面对，企业如何看待自己其中所扮演的角色？</li><br/><p>此处我们想重点分析地产企业的应对措施。</p><br/><p>在下述案例中，我们可以看到，以万达、融创为代表的地产企业相继对合作商户给予了租金优惠或减免的措施，其中万达的租金减免额度可能达到了 40 亿。在诸多企业哀鸿遍野的当下，这些地产企业的减免措施如雪中送炭般让他们的合作伙伴缓了一口气，但如果从另一个角度来思考时，对地产企业而言，健康稳定的商业业态是一个商业体良好发展的基础：</p><br/><ul><li>• 当商业业态下的组成单元被疫情严重影响时，商业体自身所面临的风险也将不断累积和放大，并掺杂了极大的不稳定因素</li><li>• 疫情导致的暂停营业与人流减少也拉低了运营成本，如果在看到合作伙伴面临的财务困难时视若无睹，将来面对的风险将会愈发不可控</li><li>• 为了缓解合作伙伴的困境所做出的租金减免决策，实际上是经过商业权衡后的理性决策</li><br/><p>我们会发现，这看似极具魄力的决策背后是有迹可循的，那就是企业依托了现实的经济原理与商业逻辑，而非以自己不擅长的能力来应对疫情。</p>"
    },
    {
      title:"9.	企业在通过科技能力应用于具体的抗疫应用场景时，是否也将对科技伦理的考虑纳入到行动的规划和落实当中？如何在过程中对用户隐私、信息安全等关键议题进行保障？",
      content:"<p>在不断释放社会影响力时，既有的科技伦理观念也往往容易被置于脑后。</p></br><p>就拿被讨论得最普遍的用户隐私保护来说：从政府的层面而言，在事关公共安全的情况下，以维护民生稳定的目的对数据进行收集和征用，如未发生产生重大危害的特殊事件，其隐私权的责任通常不会被深入追究。当下很多涉及到这一议题的产品服务都是为政府和社区的管理提供支持，但如果这些数据还可能涉及到自身的商业使用，企业应从以下三个方面思考，其服务在提供给用户使用时，所获取到的数据是否能够保障其隐私安全：</p><br/><ul><li>• 保障用户知情权：数据是否在用户不知情的情况下，将被用于商业用途</li><li>• 防止霸王条款：如企业希望将数据用于商业用途，在不影响用户正常使用产品的情况下，用户是否被赋予权利选择自己的数据能否被企业用于商业用途</li><li>• 脱敏处理：用作商业用途的数据已进行一定程度的脱敏化处理</li><br/><p>在疫情中有两类较为常见的涉及到用户隐私的产品：</p></br><ul><li>• 流程中包含用户提交个人信息的产品服务，如电子登记、个人信息查询、或产品预约登记服务</li><li>• 主动收集民众信息已实现特定抗疫目的：如用于人员管控的公共场所智能化人员识别服务</li><br/><p>对于用户而言，这些产品服务能够为抗疫提供价值并不意味着用户在隐私层面就可以有所让步。如果这些产品服务没有将隐私政策进行明确，用户将不可避免地提出顾虑。</p>"
    },
    {
      title:"10.	企业是否可以在灾情前期、中期、后期综合洞察商业趋势变化与行业趋势变化，并将 1-9 问的每一点融会贯通，形成新的业务切口或是转型方向？",
      content:"<p>比如：</p><br/><ul><li><p class='thick'>短期趋势</p></li><ul><li>• 灾情应对过程中所产生的巨大医疗技术、物资、人员缺口为医疗企业提供了众多技术应用场景</li><li>• 线上办公、线上教育呈现爆发式用户增长</li><li>• ……</li></ul><br/><li><p class='thick'>长期趋势</p><ul><li>• 居民及企业卫生意识提升带来的个人护理、机构消毒等细分市场发展</li><li>• 疫情所暴露出的公共卫生环境、应急能力、储备体系等方面的系统性问题，在解决这些问题的过程中所创造出的企业发展机遇</li><li>• 社会各方面需求在疫情期间的剧烈变化对资源配置产生了极大影响，这将导致未来疫情恢复期的产品服务供需存在阶段性失衡的情况</li><li>• ……</li><br/><p>因此，企业可以从以下几个方面思考如何能够提供支持：</p><br/><ul><li>• 从经济层面考虑，避免企业由于不可抗因素导致的经营管理停滞，或尽可能降低突发事件对行业发展秩序的破坏</li><li>• 从社会层面考虑，明确企业自身的角色定位，完善目前公共卫生管理和应急机制等方面所暴露的缺陷</li><br/><p>而一些企业目前已经在这方面采取了行动。我们可以看到，为破解疫情下中小企业禽苗交易难的问题，京东城市开发出「西南禽苗交易信息平台」，通过提供大数据分析、人工智能等技术，对疫情的产业冲击影响进行量化评估，辅助政府出台落实相应产业扶持政策，并在未来持续提升产业效率和综合效益。</p><br/><p>百度地图慧眼也基于自身的大数据能力，帮助地方政府对地区人员流动情况进行分析与可视化，以实现疫情的精准管控。</p>"
    }
  ]
}

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
