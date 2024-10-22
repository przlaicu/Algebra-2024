import './Styles/App.scss';
import Streamer from './Images/Logo/streamer.svg';
import Trending from './Components/Trending/Trending';


export default function App() {
  return (
    <div className='main'>
      <div className='hero'>
        
      <img src={Streamer} alt={'Streamer+'} className='logo'/>
      <h1>A mountin of enterteimant</h1>
      <p>Streamer + home to the world's favorite stars stories, and brands is comming soon</p>
      <p>Get redy to experiance stellar origins, exclusive premies, tih movies and the very best must-see TV</p>
      
      </div>
      <div className='holder'>
        <Trending />
      </div>
    </div>
  );
}
