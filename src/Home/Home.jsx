import React from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faXmark,
  faMagnifyingGlass,
  faHourglass,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <header className={styles.navbar}>
        <div className={styles['phone-nav']} id={styles.phoneNav}>
          <div className={styles['side-menu']} /* onClick={toggleMenu} */>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles['close-btn']} /* onClick={toggleMenu} */>
            <FontAwesomeIcon icon={faXmark} className={styles['fa-xmark']} />
          </div>
          <div className={styles['menu-overlay']}>
            <Link to="/search" className={`${styles.link} ${styles['link-main']}`}>
              Movies
            </Link>
            <Link to="/" className={styles.link}>
              TV Shows
            </Link>
            <Link to="/" className={styles.link}>
              Watch
            </Link>
          </div>
        </div>
        <div className={`${styles.flex} ${styles['content-wrapper']} ${styles['justify-between']} ${styles['align-center']}`}>
          <div className={styles.logo}>
            <Link to="/" className={styles['logo-link']}>
              <FontAwesomeIcon icon={faFilm} className={styles['fa-film']}/>
              <p className={styles['logo-text']}>OMDb</p>
            </Link>
          </div>
          <div className={`${styles.links} ${styles['justify-between']} ${styles['align-center']}`}>
            <Link to="/search" className={`${styles['nav-link']} ${styles['link-main']}`}>
              Movies
            </Link>
            <Link to="/" className={styles['nav-link']}>
              TV Shows
            </Link>
            <Link to="/" className={styles['nav-link']}>
              Watch
            </Link>
          </div>
        </div>
      </header>
      <div className={styles['landing-page']}>
        <div className={`${styles['content-wrapper']} ${styles['flex-col']} ${styles['justify-between']} ${styles['align-center']}`}>
          <div className={`${styles.flex} ${styles['flex-col']} ${styles['align-center']}`}>
            <h1 className={styles.heading}>Welcome to America's most awarded movie streaming platform</h1>
            <h2 className={styles.subheading}>Search your favorite movies with OMDb</h2>
            <div className={styles['input-wrapper']}>
              <input
                className={styles.input}
                type="text"
                placeholder="Search by Title, Year, or Director"
              />
              <button
                id={styles['search-btn']}
                className={styles['not-loading']}
                /* onClick={startLoading} */
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['fa-magnifying-glass']}/>
              </button>
              <button id={styles['loading-btn']} className={`${styles.loading} ${styles['is-hidden']}`}>
                <FontAwesomeIcon icon={faHourglass} className={styles['fa-hourglass']}/>
              </button>
            </div>
          </div>
        </div>
        <img
          className={styles.drawing}
          src="assets/undraw_horror-movie_9020.svg"
          alt="drawing of girls watching movie"
        />
      </div>
    </div>
  );
};

export default Home;
