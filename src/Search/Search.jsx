import React from "react";
import styles from './Search.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faXmark,
  faMagnifyingGlass,
  faHourglass,
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div> {/* Nav section */}
      <div className={`${styles.navbar} ${styles.flex} ${styles['flex-col']}`}>
        <div className="phone-nav" id="phoneNav">
          <div className="side-menu" onClick="toggleMenu()">
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
          <div className="close-btn" onClick="toggleMenu()">
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="menu-overlay">
            <Link to="/search" className="link link-main">
              Movies
            </Link>
            <Link to="/" className="link">
              TV Shows
            </Link>
            <Link to="/" className="link">
              Watch
            </Link>
          </div>
        </div>
        <div className="flex content-wrapper justify-between align-center">
          <div className="logo">
            <Link to="/" className="logo-link">
              <FontAwesomeIcon icon={faFilm} />
              <p className="logo-text">OMDb</p>
            </Link>
          </div>
          <div className="links flex align-center">
            <Link to="/search" className="link link-main">
              Movies
            </Link>
            <Link to="/" className="link">
              TV Shows
            </Link>
            <Link to="/" className="link">
              Watch
            </Link>
          </div>
        </div>
        <div className="content-wrapper flex-col align-center"> {/* Search section */}
          <h1>Browse our trending movies</h1>
          <div className="input-wrap">
            <input
              type="text"
              id="search-input"
              placeholder="Search by Title, Year, or Director"
            />
            <button
              className="btn search-wrapper flex justify-center align-center"
              id="search-button"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      <div id="filter" className="content-wrapper justify-between"> {/* Filter section */}
        <h2 className="search-info">
          <span className="success-state">Search results:</span>
        </h2>
        <div className="sorting-bar">
          <select id="sort-by" className="form-control">
            <option value="" disabled selected>
              Sort
            </option>
            <option value="A-Z">Title: A-Z</option>
            <option value="Z-A">Title: Z-A</option>
            <option value="Newest First">Year: Newest First</option>
            <option value="Oldest First">Year: Oldest First</option>
          </select>
          <button id="reset-filter" className="btn btn-secondary">
            Reset
          </button>
        </div>
      </div>
      <div>
        <div className="content-wrapper"> {/* Movies section */}
          <div className="loading-state">
            <FontAwesomeIcon icon={faHourglass} />
          </div>
          <div id="movie-list">
            <div className="movie">
              <figure className="movie__img--wrapper">
                <img
                  className="movie__img"
                  src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg"
                  alt="movie poster"
                />
              </figure>
              <div className="movie__title">Guardians of the Galaxy</div>
              <p className="movie__year">Year: 2017</p>
            </div>
            <div className="movie">
              <figure className="movie__img--wrapper">
                <img
                  className="movie__img"
                  src="https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
                  alt="movie poster"
                />
              </figure>
              <div className="movie__title">Fast & Furious 6</div>
              <p className="movie__year">Year: 2013</p>
            </div>
            <div className="movie">
              <figure className="movie__img--wrapper">
                <img
                  className="movie__img"
                  src="https://m.media-amazon.com/images/M/MV5BM2Y1YzhkNzUtMzhmZC00OTFkLWJjZDktMWYzZmQ0Y2Y5ODcwXkEyXkFqcGc@._V1_SX300.jpg"
                  alt="movie poster"
                />
              </figure>
              <div className="movie__title">Fast & Furious</div>
              <p className="movie__year">Year: 2009</p>
            </div>
            <div className="movie">
              <figure className="movie__img--wrapper">
                <img
                  className="movie__img"
                  src="https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg"
                  alt="movie poster"
                />
              </figure>
              <div className="movie__title">How to Train Your Dragon</div>
              <p className="movie__year">Year: 2010</p>
            </div>
            <div className="movie">
              <figure className="movie__img--wrapper">
                <img
                  className="movie__img"
                  src="https://m.media-amazon.com/images/M/MV5BMTU4NDIzMDY1OV5BMl5BanBnXkFtZTcwNjQxMzk3MQ@@._V1_SX300.jpg"
                  alt="movie poster"
                />
              </figure>
              <div className="movie__title">
                The Mummy: Tomb of the Dragon Emperor
              </div>
              <p className="movie__year">Year: 2008</p>
            </div>
            <div className="movie">
              <figure className="movie__img--wrapper">
                <img
                  className="movie__img"
                  src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
                  alt="movie poster"
                />
              </figure>
              <div className="movie__title">The Avengers</div>
              <p className="movie__year">Year: 2012</p>
            </div>
            <div className="movie">
              <figure className="movie__img--wrapper">
                <img
                  className="movie__img"
                  src="https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg"
                  alt="movie poster"
                />
              </figure>
              <div className="movie__title">Cars</div>
              <p className="movie__year">Year: 2006</p>
            </div>
            <div className="movie">
              <figure className="movie__img--wrapper">
                <img
                  className="movie__img"
                  src="https://m.media-amazon.com/images/M/MV5BMjg1ZGRiMTEtYmU4Zi00NTkwLWJmODQtMjU3MTAyMGQ2OGZlXkEyXkFqcGc@._V1_SX300.jpg"
                  alt="movie poster"
                />
              </figure>
              <div className="movie__title">Superman Returns</div>
              <p className="movie__year">Year: 2006</p>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer__copyright">Copyright &copy 2026 F.Souid</div>
        </footer>
      </div>
    </div>
  );
};

export default Search;
