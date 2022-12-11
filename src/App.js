import Logo from  './Images/facebook-img.png';
import Logpage from './Logpage';
import './App.css';
import Pagefooter from './Pagefooter';

function App() {
  return (
      <div>

        <div id='flex-div'>
        <div id="fb-logo"> 
          <img src={Logo}  width='auto' height='106px' alt='facebook-logo-img'></img> 
        
        <h2>Facebook helps you connect and share <br/>with the people in your life. </h2>
        </div>
        <Logpage />
        </div>
        <Pagefooter/>
      </div>
  );
}

export default App;
