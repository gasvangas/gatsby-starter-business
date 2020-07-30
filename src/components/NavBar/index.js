import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a class="navbar-item" href="/">
          <img src="https://i.ibb.co/qg1WDQq/icon-512x512.png"/>
            <h1><strong>FLAVIO FOGLIO</strong></h1>
          </a>

          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <Link className='navbar-item' to='/about'>
                            <strong>Chi Siamo</strong>
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className='navbar-link' to='/realizzazioni'>
                            <strong>Realizzazioni</strong>
              </Link>
                <div className="navbar-dropdown">

                  <Link className='navbar-item' to='/'>
                            Arredamenti Interni
                  </Link>
                  <hr className="navbar-divider"/>
                  <Link className='navbar-item' to='/'>
                            Strutture Ricettive e Commerciali
                  </Link>
                  <hr className="navbar-divider"/>
                  <Link className='navbar-item' to='/'>
                            Rivestimenti Esterni
                  </Link>
                  <hr className="navbar-divider"/>
                  <Link className='navbar-item' to='/'>
                            Progetti
                  </Link>
                
                </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className='navbar-link' to='/restauro'>
                      <strong>Restauro</strong>
              </Link>
              <div className="navbar-dropdown">

                  <Link className='navbar-item' to='/'>
                            Edifici Storici
                  </Link>
                  <hr className="navbar-divider"/>
                  <Link className='navbar-item' to='/'>
                            Edifici Religiosi
                  </Link>
                  <hr className="navbar-divider"/>
                  <Link className='navbar-item' to='/'>
                            Portoni
                  </Link>
                  <hr className="navbar-divider"/>
                  <Link className='navbar-item' to='/'>
                            Soffitti
                  </Link>
                </div>
            </div>

            {/*<div className="navbar-item has-dropdown is-hoverable">*/}
              <Link className='navbar-item' to='/collaborazioni'>
                      <strong>Collaborazioni</strong>
              </Link>
              {/*
                <div className="navbar-dropdown">

                <Link className='navbar-item' to='/'>
                          Scuole
                </Link>
              </div>
            </div>*/}
            <Link className='navbar-item' to='/pricing'>
                            Pricing
            </Link>
            <Link className='navbar-item' to='/blog'>
                            Blog
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-primary is-outlined'
                    to='/contatti'>
                            Contattaci    
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
