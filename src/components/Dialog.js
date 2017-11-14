import React, { Component } from 'react';
import { Modal, Button ,Input} from 'antd';
const { TextArea } = Input;

class Dialog extends React.Component {
    state = { visible: false }
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    render() {
      return (
        <div>
          <Button type="primary" onClick={this.showModal}>新建</Button>
          <Modal
            title="新建"
            visible={this.state.visible}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            width={780}
          >
            <p>api地址：<Input placeholder="api地址"/></p>
            <br/>
            <p>接收参数：<Input placeholder="接收参数" /></p>
            <br/>
            <p>响应参数：<TextArea rows={5} placeholder="响应参数"/></p>
          </Modal>
        </div>
      );
    }
  }
  export default Dialog;