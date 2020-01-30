import React from 'react';
import './App.css';
import Search from './component/Search';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      init : '새로운 목록',
      mode : 'read',
      search: []
    }

  }

  addList(){
    this.setState({
      mode : 'write'
    })
  }
  //목록추가 변경 이벤트
  handleChange(e){
    this.setState({
      init: e
    })
  }
  handleEnter(e){
    if(e.key==='Enter'){
      let a = {}
      a[e.target.value] = []
    this.setState({
      mode : 'read',
      init : '새로운 목록',
      search:  this.state.search.concat(a)
    })
  }
  }
  render() {
        return (
          <div className='cont'>
            <Search data={this.state.search} mode={this.state.mode} init={this.state.init} Change={this.handleChange.bind(this)} 
            button={this.addList.bind(this)} enter={this.handleEnter.bind(this)}/>
            <div className='list'>
              <div className="todolist">미리알림
          <button className="listbutton">+</button>
                <div className='todolistentry'>할일</div>
              </div>
            </div>
          </div>

        )
      }
  }


    export default App;
