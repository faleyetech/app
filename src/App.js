

import Logo  from "./assets/images/mm3d.png";
import rightImage from "./assets/images/bear.png";
import { FaBurn } from 'react-icons/fa';
import Accordion from "./Accordion";
import { Howl } from 'howler';
  import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect, useRef, useState } from "react";
import LUCK from './data'
import Image11 from "./assets/images/logo1.jpg";
import Image12 from "./assets/images/logo2.jpg";
import Image13 from "./assets/images/logo3.jpg";
import Image14 from "./assets/images/logo4.jpg";
import Image15 from "./assets/images/logo5.jpg";
import Image16 from "./assets/images/logo6.jpg";
import Image17 from "./assets/images/logo7.jpg";
import Image18 from "./assets/images/logo8.jpg";
import Image19 from "./assets/images/bear.png";


// constructor(){
//     super();
//     this.state ={
//       sport:''
//     };
// };

// pickIt=['You are correct', "Sorry Try Again Next Time","Congratulation's You Won", "wow you almost there try again"];

// componetDidMount(){
//   roundPick(()=>{
//     this.setState({sport: this.roundPick[Math.floor(Math.random()*this.roundPick.length)]});
//   })
// }


const imagesList = [
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
];

function App() {
const soundSrc="https://assets.mixkit.co/sfx/download/mixkit-medium-size-angry-dog-bark-54.wav"
const soundDog="https://assets.mixkit.co/sfx/download/mixkit-dog-whimper-sad-466.wav"
const [luck,  setLuck ]=useState("");

const getLuck =()=>{
  // fetch('https://type.fit/api/quotes')
  // .then((res)=>res.json())
  // .then((data)=>{
    let randomNum = Math.floor(Math.random()* LUCK.length);

    setLuck(LUCK[randomNum]);
  // });
};

  const horizontalScroll = useRef(null);

  useEffect(() => {
    setInterval(() => {
      if (horizontalScroll.current !== null) {
        horizontalScroll.current.scrollBy({
          left: 1
        });

        // if we scrolled end
        if (horizontalScroll.current.scrollLeft === horizontalScroll.current.scrollWidth - horizontalScroll.current.clientWidth) {
          horizontalScroll.current.scrollTo({
            left: 0
          });
        }
      }
    }, 40);
  }, []);

const notify = () => toast(luck.text,
  {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
}
  );
  const callMySound =(src)=>{
    const sound =new Howl({
      src,
      html5:true,
    });
    sound.play();
  };
   const callSound =(src)=>{
    const dog =new Howl({
      src,
      html5:true,
    });
    dog.play();
  };

  return (
    <div className="App">
      <section id="header-section">
        <div className="top-bar">
          <div className="button">
            Wallet connect
          </div>

         
        </div>

        <div className="middle-content">
        <img alt="" src={Logo}  className="logo" />
          
          
           <h1>MOON MONGRELZ</h1>
          <h3> Buy,Sell and Discover Extraordinary NFT<br />
Find the rarest of the art you can find in NFT world the sooner you place the bid the sooner you get the hands on these Extraordinary NFT's <br />
To commemorate the ongoing achievement of this amazing blockchain and eco-system, we bring you this special collection of 1500 art pieces.
          </h3>
          {/* <div className="mint-button">
            Mint now
          </div> */}
        
          <button onClick={()=>{
            callMySound(soundSrc)
          
           }}><span>MINT</span></button>
        </div>

        <div className="horizontal-scroll" ref={horizontalScroll}>
          {imagesList.map((item, index) => <div key={index} className="item">
            <img alt=""  src={item}  />
          </div>)}
        </div>
      </section>

      <section id="second-section">
        <div className="left-content">
          <h1>
            MOON MONGRELZ
          </h1>
          <h4>Extraordinary NFT</h4>
          <h6>
            Find the rarest of the art you can find in NFT world the sooner you place the bid the sooner you get the hands on these Extraordinary NFT's

To commemorate the ongoing achievement of this amazing blockchain and eco-system, we bring you this special collection of 1500 art pieces.


          </h6>
        </div>
        <div className="right-content">
          <img alt="" src={rightImage}  />
        </div>
      </section>

      <div className="card">
<div className="img"><FaBurn className="icon" /></div>
  <div className="info">
    <span>WARNING!!!</span>
    <p style={{ color: '#cce0f3'}} > If you use this feature, it cannot be undone and your pooch will be gone FOREVER

</p>
  </div>
 <nav  onClick={()=>{callSound(soundDog)  
  getLuck()  
 notify() }}> BURN</nav>

</div>
<div className="mfaq">
  <h1>FAQ</h1>
<div className="faq">
  <Accordion/>
</div>
</div>
      <footer>
       
        <h6>Copyright © {new Date().getFullYear()}</h6>
      </footer>
      <ToastContainer
      position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
      />
    </div>

  );
}

export default App;
