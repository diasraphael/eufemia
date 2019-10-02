/**
 * To showcase the usage of the dnb-ui-lib/src in React
 *
 */

import React from 'react'
import { render } from 'react-dom'
import cssVars from 'css-vars-ponyfill'

import App from './App.jsx'

// 1. Custom Eufemia import, instead of effecting the body reset with 'dnb-ui-lib/style'
// import 'dnb-ui-lib/style' // Import the global DNB stylesheet
import 'dnb-ui-lib/style/basis'
import 'dnb-ui-lib/style/components'
import 'dnb-ui-lib/style/themes/ui'

// 2. Global App styles
import './App.css'

// NB: This polyfill is only needed if we use Styled Components (CSS-in-JS) syntax
cssVars()

render(<App />, document.getElementById('app'))
