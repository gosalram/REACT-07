const Footer=()=>{
    const year = new Date().getFullYear();
      return(
          <div className="footer">
            Created By
             <a href="https://www.linkedin.com/in/gosal-ram-ab32a61a2/" target="_blank">
                Gosal Ram 
              </a>
           {year}
           <strong>
             Healthy<span>Foods</span>
           </strong>
          </div> 
      )
  }

  export default Footer;