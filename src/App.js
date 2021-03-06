import './App.css';
import { NavBar } from './components/nav/index'
import Routes from './routes'
import Footer from './components/footer';
import { BrowserRouter as Router, Link} from 'react-router-dom';

function Item(props){
    return(
        <Link to={props.path} className='icon-button'>
            <li className='nav-item' style={{fontWeight: 'bold'}}>
                {props.icon}
            </li>
        </Link>
    )
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <Item icon="Home" path="/"/>
          <Item icon="Projetos" path="/projects" />
          <Item icon="Sobre" path="/about" />
        </NavBar>
        <Routes />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
