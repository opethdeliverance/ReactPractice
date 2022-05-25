import logo from './logo.svg';
import './App.css';

function Header(props){
  return(
    <header>
      <h1 style={{color: "blue"}}>{props.name}'s Kitchen</h1>
      <p>This is me trying to use this app, I hope I do well today please...</p>
    </header>
    
  );
}

function Page(props){
  return(
    <p>{props.text} is the best way.</p>
  );
}

function Movies(props){
  return(
    <ul style = {{textAlign: "left"}}>
    {props.movies.map( movie => <li>{movie}</li>)}
    </ul>
  )
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

const movies = [
  "T2",
  "Pulp Fiction",
  "Goodfellas"
]

function App() {
  return (
    <div className="App">
      <Header name = "Raiden"/>
      <Page text = "To cook mid-rare"/>
      <Image image = "this is an image..."/>
      <Movies movies={movies}/>
      <Footer date = {new Date().getFullYear()}/>
      
    </div>
  );
}

export default App;
