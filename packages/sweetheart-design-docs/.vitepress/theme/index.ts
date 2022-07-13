import sweetheartDesign from "@sweetheart-design/ui"
import '@sweetheart-design/ui/es/style.js'

import '../vitepress/styles/app.scss'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

import "../vitepress/styles/test.css"

import VPApp, {globals} from '../vitepress'

import {define} from '../utils/types'
import type {Theme} from 'vitepress'

export default define<Theme>({
    Layout: VPApp,
    enhanceApp: ({app}) => {
        // @ts-ignore
        app.use(sweetheartDesign)

        globals.forEach(([name, Comp]) => {
            // @ts-ignore
            app.component(name, Comp)
        })
    },
})
