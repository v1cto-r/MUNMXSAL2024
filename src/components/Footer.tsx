import { Link } from 'react-router-dom'
import instagramLogo from '/instagram.svg'
import tiktokLogo from '/tiktok.svg'
import mailLogo from '/mail.svg'
import completeLogo from '/complete.svg'
import '../styles/Footer.css'
import { useState } from 'react'



function Footer() {
  const[year, setYear] = useState(2023);

  let d = new Date();
  let yearNow = d.getFullYear();

  if(yearNow !== year){
    setYear(yearNow);
  }

  return (
    <>
      <footer>
        <div id='info'>
          <div id='footer-logo'>  
            <img src={completeLogo} alt="MUNMX Logo" />
          </div>
          <div id='footer-social' className='footer-links'>
            <h5>Contact Us</h5>
            <ul>
              <li>
                <a href="mailto:munmx.sal@servicios.tec.mx" target="_blank" rel="noopener noreferrer"><img className='socialIcon' src={mailLogo} alt='Mail Icon' /></a>
                <a href="mailto:munmx.sal@servicios.tec.mx" target="_blank" rel="noopener noreferrer" className='hoverable'>munmx.sal@servicios.tec.mx</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@munmx_sal24" target="_blank" rel="noopener noreferrer"><img className='socialIcon' src={tiktokLogo} alt='Tiktok Icon' /></a>
                <a href="https://www.tiktok.com/@munmx_sal24" target="_blank" rel="noopener noreferrer" className='hoverable'>Tiktok</a>
              </li>
              <li>
                <a href="https://www.instagram.com/munmxsaltillo/" target="_blank" rel="noopener noreferrer"><img className='socialIcon' src={instagramLogo} alt="Instagram Icon" /></a>
                <a href="https://www.instagram.com/munmxsaltillo/" target="_blank" rel="noopener noreferrer" className='hoverable'>Instagram</a>
              </li>
            </ul>
          </div>
          <div id='footer-links' className='footer-links'>
            <h5>Links</h5>
            <ul>
              <li>
                <Link to={`/`} className='hoverable'>Home</Link>
              </li>
              <li>
                <Link to={`/committees`} className='hoverable'>Committees</Link>
              </li>
              <li>
                <Link to={`/tools`} className='hoverable'>MUN Tools</Link>
              </li>
              <li>
                <Link to={`/sponsors`} className='hoverable'>Sponsors</Link>
              </li>
            </ul>
          </div>
          <div id='footer-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4041.965847452985!2d-100.97431792080478!3d25.44779156579189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868812ac2643084d%3A0x7ca23e9fab4fc5e2!2sTecnol%C3%B3gico%20de%20Monterrey!5e0!3m2!1sen!2smx!4v1700242938809!5m2!1sen!2smx" width="350" height="250" loading="lazy"></iframe>
          </div>
        </div>

        <div id='sponsors-footer'>
          <div className='row'>
            <div className='sponsor-img'>
              <img src="/sponsors/sponsor1.webp" alt="sponsor"/>
            </div>
            <div className='sponsor-img'>
              <img src="/sponsors/sponsor5.webp" alt="sponsor"/>
            </div>
            <div className='sponsor-img'>
              <img src="/sponsors/sponsor6.webp" alt="sponsor"/>
            </div>
            <div className='sponsor-img'>
              <img src="/sponsors/sponsor3.webp" alt="sponsor"/>
            </div>
            <div className='sponsor-img'>
              <img src="/sponsors/sponsor4.webp" alt="sponsor"/>
            </div>
            <div className='sponsor-img'>
              <img src="/sponsors/sponsor2.webp" alt="sponsor"/>
            </div>

          </div>
        </div>
        
        <div id='ending'>
          <p>{year} MUNMX</p>
        </div>
      </footer>
    </>
  )
}

export default Footer