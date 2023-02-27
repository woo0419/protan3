import { NavLink } from 'react-router-dom';
import logo from './tanch_main/main_logo.jpg';
function Header(){
    return(
      <header className="top">
        <div className="logo">
          <NavLink to='/'>
           <img src={logo} className="App-logo" alt="logo" />
          </NavLink>
        </div>
        <nav className="gnb">
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/product'>Product</NavLink></li>
            <li><NavLink to='/counter'>Counter</NavLink></li>
            <li><NavLink to='/input'>Input</NavLink></li>
          </ul>
        </nav>
      </header>
    )
}
function Footer(){
    return(
        <div className='foot_wrap'>
            Copyright
        </div>
    )
}

export {Header, Footer};