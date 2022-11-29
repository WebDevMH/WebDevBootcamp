import logo from './logo.svg';
import './App.css';

function Header() {
  const title = 'This is my app header';
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {title}
        </p>
      </header>
  );


}

export default Header;
