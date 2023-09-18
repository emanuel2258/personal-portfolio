import { Link, useLocation } from 'react-router-dom';
import './Menu.css'
import Resume from '../assets/Martinez_Emanuel_Resume.pdf'

function Menu (){

// Function will execute on click of button
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch(Resume).then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Martinez_Emanuel_Resume.pdf';
          alink.click();
      })
  })
}
  const location = useLocation();
    return(
        
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom menu fixed-top">
      <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="fs-4" id="home"><h3><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-explicit-fill" viewBox="0 0 16 16">
  <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11Zm4.326 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z"/>
</svg> Emanuel Martinez</h3></span>

      </Link>

      <ul class="nav nav-pills">
        <li className="nav-item"><Link to="/"  className={`nav-link${location.pathname === '/' || location.pathname === '/personal-portfolio'? " active" : ""}`} aria-current="page">About me</Link></li>
        <li className="nav-item"><Link to="/projects" className={`nav-link${location.pathname.includes('/projects') ? " active" : " "}`} >Projects</Link></li>
        <li class="nav-item"><Link to="/contact" className={`nav-link${location.pathname === '/contact' ? " active" : " "}`}>Contact</Link></li>
        <li class="nav-item"><Link className={`nav-link`} onClick={onButtonClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
</svg> Resume </Link></li>
      </ul>
    </header>

    )
}

export default Menu;