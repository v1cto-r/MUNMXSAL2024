import download from '/download.svg';

function DoubleButton(props:any) {
  const url = props.url;
  const text = props.text;
  const extraClass = props.extraClass;

  /* if (isCommittee) {
    return (
      <div className={`double-button ${ extraClass }`}>
        <button className='open-part' >{text}</button>
        <button className='download-part' >
          <img src={download} alt='download icon' className='download-icon'/>
        </button>
      </div>
    )
  } */

  function getDownloadUrl(str:string) {
    let parts = str.split("/");
    let substring = parts[parts.length - 2];
    return "https://drive.google.com/uc?export=download&id=" + substring;
  }

  function openLink() {
    window.open(url, "_blank");
  }

  function downloadLink() {
    window.open(getDownloadUrl(url), "_self");
  }

  return (
    <div className={`double-button ${ extraClass }`}>
      <button className='open-part' onClick={openLink}>{text}</button>
      <button className='download-part' onClick={downloadLink}>
        <img src={download} alt='download icon' className='download-icon'/>
      </button>
    </div>
  )
}

export default DoubleButton;