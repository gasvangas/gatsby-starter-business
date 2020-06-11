import React from 'react'
import config from '../../../config'
import Icon from '@mdi/react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
        </div>
        <br />
        <span>
          I Nostri Social:
        </span>
        <div>
          <span class="icon is-small is-right">
            <Icon path={mdiPinterest} href={config.pinterestUrl} />
          </span>
          <span class="icon is-small is-right">
            <i class="mdi mdi-Instagram" href={config.instagramUrl}></i>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
