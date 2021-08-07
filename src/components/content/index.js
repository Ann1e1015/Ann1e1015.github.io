import React, { Component } from "react";
import "./index.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  onMenuIconClick = (e) => {
    console.log(e);
    e.stopPropagation();
    this.setState((state) => ({
      showMenu: !state.showMenu,
    }));
  };

  stopProp = (e) => {
    e.stopPropagation();
  };

  render() {
    return (
      <div className="content">
        <div className="author">
          <div className="head">
            <img src="https://avatars.githubusercontent.com/u/49682550?s=400&u=26564c45194f38c502d74c78fa8eef601dc13c76&v=4" />
            <h3>Annie</h3>

            <p className="description">I have nothing to lose.</p>
            <p id="球球-前端开发工程师">
              <a
                href="#球球-前端开发工程师"
                className="headerlink"
                title="[球球] | 前端开发工程师"
              ></a>
              [球球] | 前端开发工程师
            </p>
            <p>
              <a href="mailto:&#51;&#55;&#x31;&#48;&#x34;&#54;&#x35;&#49;&#x35;&#64;&#113;&#113;&#x2e;&#x63;&#111;&#109;">
                &#51;&#55;&#x31;&#48;&#x34;&#54;&#x35;&#49;&#x35;&#64;&#113;&#113;&#x2e;&#x63;&#111;&#109;
              </a>{" "}
              |{" "}
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/Ann1e1015"
              >
                https://github.com/Ann1e1015
              </a>
            </p>
          </div>

          <section
            className="markdown-content about-markdown"
          >
            <hr />
            <p>
              {" "}
              <strong>教育经历：</strong>*青岛农业大学 功能材料
            </p>
            <p>
              {" "}
              <strong>相关技能：</strong>*HTML(5)/CSS(3) | Javascript | Vue |
              Antd-vue | Node.js *
            </p>
            <hr />
            <h4 id="工作经历">
              <a href="#工作经历" className="headerlink" title="工作经历"></a>
              工作经历
            </h4>
            <h5 id="2019-07-至今-尚学博志（上海）教育科技有限公司">
              <a
                href="#2019-07-至今-尚学博志（上海）教育科技有限公司"
                className="headerlink"
                title="2019.07 - 至今 尚学博志（上海）教育科技有限公司"
              ></a>
              2019.07 - 至今 尚学博志（上海）教育科技有限公司
            </h5>
            <hr />
            <h4 id="项目经验">
              <a href="#项目经验" className="headerlink" title="项目经验"></a>
              项目经验
            </h4>
            <h5 id="文本转听力应用（PC）-Nw-js-Vue-FFmpeg">
              <a
                href="#文本转听力应用（PC）-Nw-js-Vue-FFmpeg"
                className="headerlink"
                title="文本转听力应用（PC） Nw.js + Vue + FFmpeg"
              ></a>
              文本转听力应用（PC） Nw.js + Vue + FFmpeg
            </h5>
            <p>
              业务简介：用于合成学校考试中的听力部分
              <br />
              参与内容：负责整个项目开发
              <br />
              技术难点：{" "}
            </p>
            <ol>
              <li>不同题型的解析</li>
              <li>基于Nw.js实现合成音频</li>
              <li>aws语音合成文档复杂</li>
            </ol>
            <h5 id="尚学组件库（PC）-Storybook-Vue-Antd">
              <a
                href="#尚学组件库（PC）-Storybook-Vue-Antd"
                className="headerlink"
                title="尚学组件库（PC） Storybook + Vue + Antd"
              ></a>
              尚学组件库（PC） Storybook + Vue + Antd
            </h5>
            <p>
              业务简介：用于本公司组件库展示
              <br />
              参与内容：负责整个项目开发
              <br />
              技术难点：{" "}
            </p>
            <ol>
              <li>不同题型的解析</li>
              <li>基于Nw.js实现合成音频</li>
              <li>aws语音合成文档复杂</li>
            </ol>
            <h5 id="尚学平台答题卡模块（PC-平板）-Vue全家桶-Antd">
              <a
                href="#尚学平台答题卡模块（PC-平板）-Vue全家桶-Antd"
                className="headerlink"
                title="尚学平台答题卡模块（PC + 平板） Vue全家桶 + Antd"
              ></a>
              尚学平台答题卡模块（PC + 平板） Vue全家桶 + Antd
            </h5>
            <p>
              业务简介：用于答题卡的创建、作答、批改。
              <br />
              参与内容：负责教师端创建答题卡、批改、列表、详情展示（重构）
              <br />
              技术难点：{" "}
              <ol>
                <li>数学、物理、英语键盘定制</li>
                <li>可以参考的项目很少</li>
                <li>数据量庞大，请求时间长</li>
              </ol>
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default Header;
