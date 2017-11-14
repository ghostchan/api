import React, { Component } from 'react';
import { Layout,Button} from 'antd';
import Modal from './components/myModal'
import Tables from './components/Tables'
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state={
    visible:false,
    title:""
  }
  showModal=()=>{
    this.setState({visible:true,title:"新建44"});
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
  render(){
    return (
      <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <Button type="primary" onClick={this.showModal}>新建</Button>
        <Modal 
        visible={this.state.visible} 
        title={this.state.title}
        handleOk={this.handleOk}
        handleCancel={this.handleCancel}/>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
      
        <Tables/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Jinn Design ©2018 Created by Jinn
      </Footer>
    </Layout>
    )
  }
}
export default App;