import logo from './logo.svg';
import './App.css';

function Header(props){
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
      <p>This is me trying to use this app, I hope I do well today...</p>
    </header>
    
  );
}

function Page(props){
  return(
    <p>{props.text} is the best way.</p>
  );
}

function Image(props){
  return(
  <p>{props.image}</p>
  );
}

function Footer(props){
  return(
    <p>Copyright {props.date}</p>

  )
}

function App() {
  return (
    <div className="App">
      <Header name = "Raiden"/>
      <Page text = "To cook mid-rare"/>
      <Image image = "this is an image..."/>
      <Footer date = {new Date().getFullYear()}/>
      
    </div>
  );
}

export default App;
