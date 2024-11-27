// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import 'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Bold.min.css'
import { HomeUnderline } from '@theojs/lumen'

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {    
    app.component('Home', HomeUnderline) 
  } 
}
