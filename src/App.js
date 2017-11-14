import React, { Component } from 'react';
import { Layout} from 'antd';
import Dialog from './components/Dialog'
import Tables from './components/Tables'
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  render(){
    return (
      <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <Dialog/>
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