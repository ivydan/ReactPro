// require("./index.css");
// //style-loader 讲css代码以style标签格式插入到页面上从而生效，
// //css-loader 检查css代码代码中的import语句找到依赖并合并
// document.body.appendChild(document.createElement("div"));

import React from 'react';
import _ from 'lodash';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
	}

	render() {
		return (
			<div className="AboutContain">
				<a href="../page/index.html">page</a>
			</div>
		)
	}
}