import React from "react";
import { Table, Button } from "antd";
import Modal from "./myModal";
import $ from "jquery";
class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.columns = [
      {
        title: "API地址",
        dataIndex: "url",
        key: "url"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <Button
              type="primary"
              onClick={this.showModal.bind(this, record.key)}
            >
              修改
            </Button>&nbsp;
            <Button type="primary" onClick={this.delete.bind(this, record.key)}>
              删除
            </Button>
          </span>
        )
      }
    ];
  }
  showModal = key => {
    // console.log(key);
    this.refs.mymodal.toggleShow();
    this.setState({ title: "修改" });
  };
  delete = key => {
    console.log("删除：" + key);
  };
  getList() {
    var _this = this;
    $.ajax({
      url: "/api/list",
      type: "POST",
      data: {},
      success: function(data) {
        _this.setState({ list: data });
      }
    });
  }
  componentWillMount() {
    this.getList();
  }
  render() {
    var arr = [];
    var list = this.state.list || [];
    // console.log(list);
    list.forEach(function(item) {
      var temp = {};
      temp["key"] = item.id;
      temp["url"] = item.url;
      arr.push(temp);
    });
    console.log(arr);
    return (
      <div>
        <Table columns={this.columns} dataSource={arr} bordered={true} />
      </div>
    );
  }
}
export default Tables;
