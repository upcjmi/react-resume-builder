import React from 'react';
import logo from './logo.svg';
import Resume from './react-resume-builder/index'
import './app.sass';
import Footer from'./footer'
import data from './resumeSchema'
const App = ()=>{
  let localData=false;
  if(JSON.parse(localStorage.getItem('data'))!==null&&JSON.parse(localStorage.getItem('data')).ver==data.ver){
    localData=JSON.parse(localStorage.getItem('data'));
  }
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://upcjmi.com">
      <img src="https://beta.upcjmi.com/static/media/jamia-logo.1b80d421.svg" alt="" width="112" height="28" />
      <div class="black-text font09rem" style={{'color':'hsl(0, 0%, 4%)'}}><b>University Placement Cell</b><br />Jamia Millia Islamia</div>
    </a>
  </div>
</nav>

        <div class="section">
        <h1 className="title">Resume Builder</h1>
        <div className="card" style={{'padding':'25px'}}>
            <Resume data={localData?localData:data} onSave={(x)=>{console.log(x)}} />
            </div>
            <Footer />
        </div>
    </div>
  );
  }
export default App;
