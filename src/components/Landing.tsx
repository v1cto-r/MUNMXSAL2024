import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import plainLogo from '/plain.svg'
import '../styles/Landing.css';

gsap.registerPlugin(ScrollTrigger);

function Landing() {

  const[days, setDays] = useState(0);
  const[hours, setHours] = useState(0);
  const[minutes, setMinutes] = useState(0);
  const[seconds, setSeconds] = useState(0);

  const logoRef = useRef<HTMLImageElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  let countDownDate = new Date("Apr 26, 2024 00:00:00").getTime();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current!,
          start: "top 80%",
          end: "bottom",
          scrub: true,
        }
      });

      tl.to(logoRef.current!, {rotate: "360deg", duration: 1});
    });

    return () => ctx.revert();
  }, []);

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
    <>
      <div id='background'></div>
      <main>
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

        <div ref={aboutRef} id="about">
          <h5>About Us</h5>
          <p>This section is about us</p>
          <img ref={logoRef} src={plainLogo} alt='MUNMX Logo Without Text'/>
        </div>
      </main>
      
    </>
  );
}

export default Landing;