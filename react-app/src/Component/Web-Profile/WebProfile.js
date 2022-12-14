import {useState} from 'react';
import '../../App.css';
import Profile from './Profile'
import About from './About';
import Career from './Career';
import Roadmap from './Roadmap';
import Contact from './Contact';

// import Daynighthandler from './function/daynighthandler';


function Header(props){

  
  return(
    <header className="App-header">
        <h1 className = "title"><u>{props.title}</u></h1>
        <h3>{props.subtitle}</h3>
        <h5>{props.extra}</h5>
    </header>

  );

}


function Nav(props){
  const lis = [];
  for (let i=0; i<props.navcontents.length; i++){
    let a = props.navcontents[i];
    lis.push(<div className="NavBtn"><a id={a.id}href={'/read/' + a.title} title={a.body} 
    onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{a.title}</a></div>);
  }

  return(
  <nav className="App-nav">
      
        {lis}
      
  </nav>

  );
}




function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState('');
  const navcontents = [
    { id: 0, title: 'About Me' ,  body:"나에 대한 소개글",                          
      description: "Fabaneon이라는 사람의 이야기를 들려드리겠습니다."},

    { id: 1, title: 'Career'  ,  body:"최근 3년간 걸어온 길을 확인하실 수 있습니다.", 
      description: "년도별로 참여했던 주요 프로젝트와 직책을 열람해보세요."},

    { id: 2, title: 'RoadMap' ,  body:"앞으로 나아갈 길", 
      description: "앞으로 학습해 나갈 로드맵을 확인하실 수 있습니다."},

    { id: 3, title: 'Contact' ,  body:"연락수단",        
     description: "모든 협업과 건설적인 교류 언제든 환영합니다."},
     
    { id: 4, title: 'Return to Main' ,  body:"메인 페이지",        
    description: "첫 페이지로 돌아갑니다.."}  
  ];

  let headerArticle, navArticle, mainArticle, optionalfunction= null;


  if(mode === 'WELCOME'){
    console.log("mode : " + mode);
    headerArticle = <Header
    title = "Welcome to my React-Profile!"
    subtitle = "환영합니다. 아래 목차를 통해서 절 소개해드리겠습니다 :)"
    extra = "빠르지만 서두르진 말고.. 조금씩 서로에 대해 알아보자구요."
    
    ></Header>
    navArticle = <Nav navcontents = {navcontents} onChangeMode={(id)=>{
      setMode('READ');setId(id);}}></Nav>
    mainArticle = <Profile></Profile>;
    
  }
  else if(mode === 'READ'){
    console.log("mode : " + mode);

    if(id === 0){
      headerArticle = <Header 
      title = {navcontents[id].title}
      subtitle = {navcontents[id].body}
      extra = {navcontents[id].description}
      >
      </Header>
      navArticle = <Nav navcontents = {navcontents} onChangeMode={(id)=>{
        setMode('READ');setId(id);}}></Nav>
      mainArticle = <About></About>
      
    }
    else if(id === 1){
      headerArticle = <Header 
      title = {navcontents[id].title}
      subtitle = {navcontents[id].body}
      extra = {navcontents[id].description}
      >
      </Header>
      navArticle = <Nav navcontents = {navcontents} onChangeMode={(id)=>{
        setMode('READ');setId(id);}}></Nav>
      mainArticle = <Career></Career>
      


    }
    else if(id === 2){

      headerArticle = <Header 
      title = {navcontents[id].title}
      subtitle = {navcontents[id].body}
      extra = {navcontents[id].description}
      >
      </Header>
      navArticle = <Nav navcontents = {navcontents} onChangeMode={(id)=>{
        setMode('READ');setId(id);}}></Nav>
      mainArticle = <Roadmap></Roadmap>
      


    }
    else if(id === 3){
      headerArticle = <Header 
      title = {navcontents[id].title}
      subtitle = {navcontents[id].body}
      extra = {navcontents[id].description}
      >
      </Header>
      navArticle = <Nav navcontents = {navcontents} onChangeMode={(id)=>{
        setMode('READ');setId(id);}}></Nav>
      mainArticle = <Contact></Contact>
      


    }
    else if(id === 4){setMode('WELCOME');}
    
  }
  console.log("mode : " + mode + "id : " + id);
  console.log(optionalfunction);
  return (
    <div className="App">
      {headerArticle}
      <div className='Container-App-Main'>
        <div className="App-Main">
          <div className="Navigator">
            {navArticle}
            {optionalfunction}
          </div>
          <div className="Article">
            {mainArticle}
          </div>
          <div className="Aside">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
