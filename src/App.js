import logo from './logo.svg';
import './App.css';
import imageInSrc from './imageInSrc.jpg'
import myVideo from './myVideo.mp4'
import './style.css'



function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxwidth:"100vw"}}>
       <h1 class="title_red">Your name here</h1>
       

       <img src={imageInSrc} alt="imagesource" />
 <br/>

 <img src="imageInPublic.jpg" alt="imageInPublic" ></img>
 </div>

 <video  src ={myVideo} width="320" height="240" controls></video>
 

 
    </div>
  );
}

export default App;
