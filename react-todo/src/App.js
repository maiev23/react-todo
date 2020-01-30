import React from 'react';
import './App.css';
import Search from './component/Search';
import List from './component/List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      init : '새로운 목록',
      mode : 'read',
      mode2 : 'read',
      search: [{오늘할일:[]}],
      curr : {오늘할일:[]},
      complet: ""
    }

  }
 //search모드변경
  addList(){
    this.setState({
      mode : 'write'
    })
  }
  //인풋값변경
  handleChange(e){
    this.setState({
      init: e
    })
  }
  //앤터키 이벤트
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
//리스트모드 변경
  addList2(){
    this.setState({
      mode2 : 'write'
    })
  }
  //리스트 앤터키
  handleEnter2(e){
    if(e.key==='Enter'){
      let a = {check:false}
      a['todo'] = e.target.value
      let key = Object.keys(this.state.curr)[0];
      let b = {}
      b[key] = this.state.curr[Object.keys(this.state.curr)[0]].concat(a)
    this.setState({
      mode2 : 'read',
      curr : b
      //search: this.state.search.concat(this.state.curr)
    })
  }
}
 clickCMP(){
   this.setState({
     complet : "(완료됨)"
   })
 }
  render() {
        return (
          <div className='cont'>
            <Search data={this.state.search} mode={this.state.mode} init={this.state.init} Change={this.handleChange.bind(this)} 
            button={this.addList.bind(this)} enter={this.handleEnter.bind(this)}/>
              <List data={this.state.curr} mode2={this.state.mode2} button={this.addList2.bind(this)}enter={this.handleEnter2.bind(this)}
                    complet={this.state.complet} clickT={this.clickCMP}
              />
           
          </div>

        )
      }
  }


    export default App;
