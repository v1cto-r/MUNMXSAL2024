import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import plainLogo from '/plain.svg'
import data from '../data/schedule.json'
import data2 from '../data/links.json'
import aboutImg from '/about/about.webp'
import '../styles/Landing.css';
import DoubleButton from './DoubleButton';

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  

  return (
    <>
      <div id='background'></div>
      <main>
        <Countdown />
        <About />
      </main>
      
    </>
  );
}

function Countdown() {
  const[days, setDays] = useState(0);
  const[hours, setHours] = useState(0);
  const[minutes, setMinutes] = useState(0);
  const[seconds, setSeconds] = useState(0);

  let countDownDate = new Date("Apr 26, 2024 00:00:00").getTime();

  var x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  return (
    <div id="landing">
      <span><h1>MUNMX</h1><h2>2024</h2></span>
      <div id="countdown">
        <span>
          <h3 id="days-amount">{days}</h3>
          <h4>Days</h4>
        </span>

        <span>
          <h3 id="hours-amount">{hours}</h3>
          <h4>Hours</h4>
        </span>

        <span>
          <h3 id="minutes-amount">{minutes}</h3>
          <h4>Mins</h4>
        </span>

        <span>
          <h3 id="seconds-amount">{seconds}</h3>
          <h4>Secs</h4>
        </span>
      </div>
    </div> 
  )
}

function About () {
  const logoRef = useRef<HTMLImageElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current!,
          start: "top 50%",
          end: "bottom 30%",
          scrub: true,
        }
      });

      tl.addLabel("start")
      .to(logoRef.current!, {rotate: "120deg", duration: 0.3})
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" ref={aboutRef}>
      <AboutMun reference={logoRef}/>
      <Schedule />
      <Photo />
    </div>
  );
}

function AboutMun(props:any) {
  return (
    <section id='about-mun' className='landing-section' >
      <img ref={props.reference} src={plainLogo} alt='MUNMX Logo Without Text'/>
      <div className='text'>
        <h5>About MUNMX Saltillo</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  )
}

function Schedule() {
  const jsonData:any = data;
  const jsonDataLinks:any = data2
  const day1 = [];
  const day2 = [];

  for(let i = 0; i < jsonData.day1.length; i++) {
    day1.push(<tr><td>{jsonData.day1[i].time}</td><td>{jsonData.day1[i].event}</td></tr>);
  }

  for(let i = 0; i < jsonData.day2.length; i++) {
    day2.push(<tr><td>{jsonData.day2[i].time}</td><td>{jsonData.day2[i].event}</td></tr>);
  }

  return (
    <section id='schedule' className='landing-section'>
      <div id='titles'>
        <h5>Schedule </h5>
        <DoubleButton url={jsonDataLinks.schedule} text={"Download"}/>
      </div>
      <div id='times'>
        <div id='day1' className='days'>
          <h6>April 26</h6>
          <table>
            {day1}
          </table>
        </div>
        <div id='day2' className='days'>
          <h6>April 27</h6>
          <table>
            {day2}
          </table>
        </div>
      </div>
      
      
    </section>
  )
}

function Photo() {
  return (
    <section id='photo' className='landing-section'>
      <div id='mun-photo'><img src={aboutImg}/></div>
      
    </section>
  )
}

export default Landing;