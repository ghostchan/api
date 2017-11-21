import React from 'react';
import { Layout,Button} from 'antd';

import Tables from './components/Tables';

import $ from 'jquery';
import MyModal from './components/myModal.js';
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state={
    title:""
  }

  getList(){
    this.refs.mytable.getList();
  }

  showModal=()=>{
    this.refs.mymodel.toggleShow();
    this.setState({title:"新建"});
  }
  render(){
    // console.log(this.state.list);
    return (
      <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <Button type="primary" onClick={this.showModal}>新建</Button>
        <MyModal ref='mymodel' visible={false} title='create' getList={this.getList.bind(this)}></MyModal>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
      
        <Tables ref='mytable'/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Jinn Design ©2018 Created by Jinn
      </Footer>
    </Layout>
    )
  }
}
export default App;