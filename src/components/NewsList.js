import React, { Component } from 'react'
import axios from 'axios';

class NewsList extends Component {
  constructor(opt) {
    super(opt);
    this.state = {
      newsList: []
    };
  }

  componentDidMount() {
    // 发送ajax请求到后台并获取数据
    axios
      .get('/db.json')
      .then(res => {
        // console.log(res.data.news);
        this.setState({newsList: res.data.news});
      });
  }

  delNews(id) {
    // 不模拟从后台ajax请求删除数据
    // 直接在当前数组中移除数据。
    if(window.confirm('您是否要真的删除吗？')) {
      this.setState(preState => {
        return {
          newsList: preState.newsList.filter( item => item.id !== id)
        }
      });
    }
  }

  render () {
    return (
      <div>
        <table className="table is-striped is-hoverable is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>编号</th>
              <th>新闻标题</th>
              <th>编辑</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.newsList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <button className="button is-primary" onClick={this.delNews.bind(this, item.id)}>删除</button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
       
      </div>
    )
  }
}

export default NewsList;