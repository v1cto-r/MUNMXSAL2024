import data from '../data/links.json'
import img1 from '/tools/img1.webp'
import '../styles/Tools.css'
import DoubleButton from './DoubleButton';


function Tools () {
  const jsonData:any = data;
  
  return (
    <main>
      <div id="tools">
        <div id='intro'>
          <h1>MUN Tools</h1>
        </div>
        <section className='tools-section'>
          <img src={img1} alt='' id='position-img' className='tools-img'/>
          <div className='info' id='position-paper'>
            <h3>Position Paper Outline</h3>
            <DoubleButton url={jsonData.position} text='Open'/>
          </div>
        </section>
        <section className='tools-section'>
          <img src={img1} alt='' id='parliamentary-img' className='tools-img'/>
          <div className='info' id='position-paper'>
            <h3>Parliamentary Procedure</h3>
            <DoubleButton url={jsonData.parliamentaryEN} text='English'/>
            <DoubleButton url={jsonData.parliamentaryES} text='Español'/>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Tools;