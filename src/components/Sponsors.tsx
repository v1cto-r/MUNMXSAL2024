import '../styles/Sponsors.css'

function Sponsors () {

  return (
    <main>
      <div id="sponsors">
        <div id='intro'>
          <h1>Thank you to our Sponsors</h1>
        </div>
        <section id="sponsors-logos" className='landing-section'>
          <div className="row">
            <div className="sponsor-img">
              <img src="/sponsors/sponsor1.webp" alt="sponsor"/>
            </div>
            <div className="sponsor-img">
              <img src="/sponsors/sponsor5.webp" alt="sponsor"/>
            </div>
            <div className="sponsor-img">
              <img src="/sponsors/sponsor3.webp" alt="sponsor"/>
            </div>
          </div>
          <div className="row">
            <div className="sponsor-img">
              <img src="/sponsors/sponsor4.webp" alt="sponsor"/>
            </div>
            <div className="sponsor-img">
              <img src="/sponsors/sponsor2.webp" alt="sponsor"/>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Sponsors;