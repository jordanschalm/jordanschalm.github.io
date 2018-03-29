import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jordan Schalm"
      meta={[
        {
          name: 'description',
          content: "Jordan Schalm's personal website and portfolio",
        },
        {
          name: 'keywords',
          content: 'Jordan Schalm, portfolio, software, engineering',
        },
        { name: 'charset', content: 'utf-8' },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Josefin+Slab:400,700|Inconsolata:400,700"
        rel="stylesheet"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-63984210-1"
      />
      <script>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-63984210-1');
        `}
      </script>
    </Helmet>
    <div className="container">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
