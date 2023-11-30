import data from '../data/Committees.json'
import LazyLoad from 'react-lazy-load';
import download from '/download.svg'
import searchIcon from '/search.svg'
import '../styles/Committees.css'
import { useEffect, useState } from 'react';

function Committees () {
  const jsonData:any = data;
  const list = jsonData.List;
  const committees = [];


  for (let i = 0; i < list.length; i++) {
    let com = list[i];
    let comInfo = jsonData[com];
    committees.push(<CommitteeCard img={'/committees/'+com+'.webp'} name={comInfo[0]} topic1={comInfo[1]} id={com} url={comInfo[2]}/>)
  }

  const [search, setSearch] = useState('');

  const searchHandler = (e:any) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if(search !== '') {
      for(let i = 0; i < list.length; i++) {
        let com = list[i];
        let card = document.getElementById(com);
  
        if (com.toLowerCase().includes(search) || jsonData[com][0].toLowerCase().includes(search) || jsonData[com][1].toLowerCase().includes(search)) {
          card!.style.display = 'flex';
        } else {
          card!.style.display = 'none';
        }
      }
    } else {
      for(let i = 0; i < list.length; i++) {
        let com = list[i];
        let card = document.getElementById(com);
        card!.style.display = 'flex';
      }
    }
  }, [search]);

  return (
    <>
      <main>
        <div id="committees">
          <div id='intro'>
            <h1>Committees</h1>
          </div>
          <div id='search-bar'>
            <img src={searchIcon} alt='' id='search-icon'/>
            <input type='text' id='search' onChange={searchHandler} placeholder='Search Committees'/>
          </div>
          {committees}
        </div>
      </main>
    </>
  )
}

function CommitteeCard(props:any) {
  let parts = props.url.split("/");
  let substring = parts[parts.length - 2];
  let downloadUrl = "https://drive.google.com/uc?export=download&id=" + substring;

  function openBackground() {
    window.open(props.url, "_blank");
  }

  function downloadBackground() {
    window.open(downloadUrl, "_self");
  }

  return (
    <>
      <section className="committee-card" id={props.id}>
        <p hidden>{props.id}</p>
        <LazyLoad offset={500} className='committee-img-container'>
          <img src={props.img} loading="lazy" alt="committee image" className='committee-img'/>
        </LazyLoad>

        <div className='committee-info'>
          <h2 className='committee-name'>{props.name}</h2>
          <div className='topics'>
            <div className='topic1'>
              <h3 className='committee-topic'>Topic: {props.topic1}</h3>
              <div className='background-buttons'>
                <button className='topic-button button' onClick={openBackground}>Background</button>
                <button className='download-button button' onClick={downloadBackground}>
                  <img src={download} alt='download icon' className='download-icon'/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Committees;