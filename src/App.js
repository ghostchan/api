import React from 'react';
import { Layout,Button} from 'antd';
import Modal from './components/myModal';
import Tables from './components/Tables';
import $ from 'jquery';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state={
    title:""
  }
 
  showModal=()=>{
    this.refs.mymodal.toggleShow();
    this.setState({title:"新建"});
  }
  render(){
    // console.log(this.state.list);
    return (
      <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <Button type="primary" onClick={this.showModal}>新建</Button>
        <Modal
        ref='mymodal' 
        visible={this.state.visible} 
        title={this.state.title}
        />
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