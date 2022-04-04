import React, {useEffect, useState} from "react";
import styles from "./Navbar.module.css";

function Navbar() {

    const [show, setShow] = useState(false)
    useEffect(() => {
      window.addEventListener('scroll', ()=>{
          if(window.scrollY > 100 ){
              setShow(true)
          } else setShow(false);
      })
    
      return () => {
        window.removeEventListener('scroll');
      }
    }, [])
    

	return <div className={`${styles.navbar} ${show && styles.navbar__black} `}>
        <img
            className={styles.navbar__logo}
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
            alt="Netflix logo"
             />
        <img
            className={styles.navbar__avatar}
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt="Netflix avatar"
             />
             
    </div>;
}

export default Navbar;
