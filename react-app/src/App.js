import React,{useState} from 'react'
import CRUD from './Component/CRUD/CRUD'
import Webprofile from './Component/Web-Profile/WebProfile';
import Daynighthandler from './function/js/daynighthandler';
import Comment from './function/js/comment';

function MainArticle(props){

  return(
    <div className="App-header">
      <h1 className="title">{props.title}</h1>
      <h3>{props.subtitle}</h3>
      {props.body}
    </div>
  );
}

function MainNav(props){

  return(
    <div >
      <li><a title="2022-09-04 ~ 2022-09-10" href="/CRUD/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode("CRUD");
      }} >생활관 명단 기능</a></li>
      <li><a title="2022-09-11 ~ " href="/WebProfile/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode("WEBPROFILE");
      }} >리액트 웹 포트폴리오 프로필</a></li>
    </div>
  );
}

function App(){
  const [mode, setMode] = useState('project-unselected');
  const [project, setProject] = useState('');
  // const [project, setProject] = useState('none')
  let ArticleContents,Navi,button;

  if(mode === 'project-unselected'){
      ArticleContents = <MainArticle title = "Welcome to my React-Study" subtitle="환영합니다. 아래 목차를 통해서 React 학습 결과물을 열람해볼 수 있습니다 :)" body = "아래 버튼을 눌러 작업물을 확인해보세요."></MainArticle>
      Navi = <MainNav onChangeMode = {(project)=>{
        setMode('project-selected');
        setProject(project);
      }}></MainNav>
      button = null;
  }

  else if(mode === 'project-selected'){
    if(project === 'CRUD'){
      ArticleContents = <CRUD></CRUD>
      Navi = null;
      button = <button className="ReturnToLobby" onClick={()=>{setMode('project-unselected');}}>처음으로</button>;
    }
    else if(project === 'WEBPROFILE'){
      ArticleContents = <Webprofile></Webprofile>
      Navi = null;
      button = <button className="ReturnToLobby" onClick={()=>{setMode('project-unselected');}}>처음으로</button>
      ;
    }


  }
  console.log("mode : " + mode + " project : " + project);

  return(
     <div className="App">
      <Daynighthandler></Daynighthandler>
        <div className="MainOption">
        {ArticleContents}
        
        {Navi}
        </div>
       

        <br/>
        
      
      <br/>
      <footer className="FooterOption">
          {button}
          <Comment></Comment>
      </footer> 
    </div>
   

    
  );
  

}


export default App;

// 여태까지 만든 생성 추가  [ 수정과 삭제는 아직 미구현 ] 기능은 CRUD.JS 로 저장하여 불러와두었다.
// 이제 새로운 기능들을 React로 만들어 이러한 형식으로 저장할것이며 점차 Web-App의 규모를 늘려가볼 생각이다.
// 기존의 Web-Portfolio-Profile도 이곳으로 편입시켰다.