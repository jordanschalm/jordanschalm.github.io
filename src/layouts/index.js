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
      <script>
        {`
        (function(f, a, t, h, o, m){
          a[h]=a[h]||function(){
            (a[h].q=a[h].q||[]).push(arguments)
          };
          o=f.createElement('script'),
          m=f.getElementsByTagName('script')[0];
          o.async=1; o.src=t; o.id='fathom-script';
          m.parentNode.insertBefore(o,m)
        })(document, window, '//analytics.jordanschalm.com/tracker.js', 'fathom');
        fathom('set', 'siteId', 'EATNK');
        fathom('trackPageview');
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
