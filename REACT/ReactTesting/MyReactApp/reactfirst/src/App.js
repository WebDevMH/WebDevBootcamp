import './App.css';
import Postcard from './components/Postcard';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button bgColor="Blue" textColor="white" borderW="2px">
        Click Me
      </Button>
      <Postcard
        imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
        title="Beach"
      />
      <Postcard
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="Mountain"
      />
      <Postcard
        imageSrc="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Desert"
      />
    </div>
  );
}

export default App;
