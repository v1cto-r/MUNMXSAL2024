import munLogo from '/logo.svg'
import prepatecLogo from '/prepatec.svg'
import upTop from '/up.svg';
import '../styles/Header.css'
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { Link } from "react-router-dom";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(false);

  const menu = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const up = useRef<HTMLDivElement>(null);

  const Home = useRef<HTMLAnchorElement>(null);
  const Committees = useRef<HTMLAnchorElement>(null);
  const Tools = useRef<HTMLAnchorElement>(null);
  const Sponsors = useRef<HTMLAnchorElement>(null);

  const {y} = useWindowScroll();

  useEffect(() => { 
    y>0 ? setScroll(true) : setScroll(false);
    if (y>0) {
      header.current!.classList.add('active');
      up.current!.classList.add('active');
    } else {
      if (!active) {
        header.current!.classList.remove('active');
        up.current!.classList.remove('active');
      }
    }
  }, [y]);
  
  const activate = () => {
    if (active) {
      if (!scroll) {
        header.current!.classList.remove('active');
      } 
    } else {
      header.current!.classList.add('active');
    }

    setActive(!active);

    menu ? menu.current!.classList.toggle('active') : null;
    nav ? nav.current!.classList.toggle('active') : null;
  }

  function menuClick (id:string) {

    Committees.current!.classList.remove('active');
    Tools.current!.classList.remove('active');
    Sponsors.current!.classList.remove('active');
    Home.current!.classList.remove('active');

    switch (id) {
      case "home":
        Home.current!.classList.add('active');
        break;
      case "committees":
        Committees.current!.classList.add('active');
        break;
      case "tools":
        Tools.current!.classList.add('active');
        break;
      case "sponsors":
        Sponsors.current!.classList.add('active');
        break;
      default:
        break;
    }
  }

  return (
    <>
      <header ref={header} id="header">
        <div id="logos">
          <Link to={`/`} id='logoMUNMX'><img src={munLogo} alt="MUNMX Logo" /></Link>
          <a id="logoPrepatec" href="https://tec.mx/es/prepatec" target="_blank" rel="noopener noreferrer"><img src={prepatecLogo} alt="Prepatec Logo" /></a>
          <div ref={menu} id="menu-button" onClick={activate}>
            <div id="hamburger"></div>
          </div>
        </div>
        <nav ref={nav} id="nav">
          <ul>
            <li>
              <Link to={`/`} onClick={() => {menuClick("home")}} ref={Home}>Home</Link>
            </li>
            <li>
              <Link to={`/committees`} onClick={() => {menuClick("committees")}} ref={Committees}>Committees</Link>
            </li>
            <li>
              <Link to={`/tools`} onClick={() => {menuClick("tools")}} ref={Tools}>MUN Tools</Link>
            </li>
            <li>
              <Link to={`/sponsors`} onClick={() => {menuClick("sponsors")}} ref={Sponsors}>Sponsors</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div ref={up} id="up-top" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
        <img src={upTop} alt="up top icon" id="up-top-icon"/>
      </div>
    </>
  )
}

export default Header
