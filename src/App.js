import confirm  from './confirm/confirm';
import React, { Component } from 'react';
// 声明组件  并对外输出
export default class App extends Component {
  // 组件即将加载
  async componentWillMount() {
    // this.getBtnRights()
    const res = await confirm('确定删除吗');
    if (res) {
      console.log('是');
    } else {
      console.log('否');
    }
  }
  render() {
    return <div />;
  }
}
