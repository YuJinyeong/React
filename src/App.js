import './App.css';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import Subject from "./components/Subject"
import Control from "./components/Control"
import React, { useState } from 'react';

function App() {
  const subject = { title: 'WEB', sub: 'World Wide Web!' };
  const [arrs, setArrs] = useState([
    { id: 1, title: 'HTML', desc: 'HTML is for information' },
    { id: 2, title: 'CSS', desc: 'CSS is for design' },
    { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
  ]);
  var max_content_id = 3;
  const welcome = { title: 'Welcome', desc: 'Hello, React!!' };
  const [selected_content_id, setId] = useState(2);

  const [mode, setMode] = useState("create");

  var _title, _desc, _article, _content = null;

  function getReadContent() {
    var i = 0;
    while (i < arrs.length) {
      var data = arrs[i];
      if (data.id === selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  function getContent() {
    if (mode === 'welcome') {
      _title = welcome.title;
      _desc = welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (mode === 'read') {
      _content = getReadContent();
      console.log('read mode', _content)
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
      //add content to this.state.contents
      // _content = Array.from(_content)
      max_content_id = max_content_id + 1;

      /* 
      arrs.push({id: max_content_id, title:_title, desc: _desc}); //state 값 직접 수정하면 리액트가 모름
      console.log(arrs); 
      */
      //위 방식으로 처리하면 TOC가 재랜더링 되지 않음 => shouldComponentUpdate()

      //1. 원본이 아닌 복사본을 만들어 수정하는 방법
      _content = arrs.concat({ id: max_content_id, title: _title, desc: _desc });
      setArrs(_content);

      // 또는
      // _contents = Array.from(this.state.contents);
      // _contents.push({id:this.max_content_id, title:_title, desc:_desc});
      // setArrs(_contents);

      //2. setState() 함수가 변경된 부분만 반영하는 성질을 이용하는 방법
      // setArrs([...arrs, {id: max_content_id, title:_title, desc: _desc}]);
      }}></CreateContent>
    } else if (mode === 'update') {
      _content = getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function (_id, _title, _desc) {
        var _contents = Array.from(arrs);
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].id === _id){
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i = i + 1;
        }
        setArrs(_contents);
        setMode('read');

       }}></UpdateContent>
    }
    return _article;
  }

  return (
    <div className="App">
      <Subject
        title={subject.title}
        sub={subject.sub}
        onChangePage={() => {
          // console.log('onChangePage');
          setMode('welcome');
        }}
      ></Subject>
      {/* <header>
        <h1><a href="/" onClick={(e) => {
          console.log(e);
          e.preventDefault(); //a tag의 기본적인 동작방법을 금지
          // debugger;
          setMode('welcome');
        }}>{subject.title}</a></h1>
        {subject.sub}
      </header> */}
      <TOC onChangePage={(_id) => {
        setMode('read');
        setId(Number(_id));
      }} data={arrs}></TOC>
      <Control onChangeMode={(_mode) => {
        if(_mode === 'delete'){
          if(window.confirm('really?')){
            var _contents = Array.from(arrs);
            var i = 0;
            while(i < _contents.length){
              if(_contents[i].id === selected_content_id){
                _contents.splice(i, 1);
                break;
              }
              i = i + 1;
            }
            setArrs(_contents);
            setMode('welcome');
            alert('deleted!');
          }
        }
        // console.log('onChangeMode()');
      }}></Control>
      {getContent()}

    </div>
  );
}

export default App;
