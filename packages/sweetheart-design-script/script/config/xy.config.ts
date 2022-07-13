import { pathExistsSync } from 'fs-extra'
import { merge } from 'lodash'
import { XY_CONFIG, SITE_CONFIG } from '../shared/constant'
import { outputFileSyncOnChange } from '../shared/fsUtils'


export function getXyConfig(emit = false): Record<string, any> {
    let config: any = {}

    if (pathExistsSync(XY_CONFIG)) {
        delete require.cache[require.resolve(XY_CONFIG)]
        config = require(XY_CONFIG)
    }
    delete require.cache[require.resolve('../../sweetheart.default.config.js')]
    const defaultConfig = require('../../sweetheart.default.config.js')

    const mergedConfig = merge(defaultConfig, config)

    if (emit) {
        const source = JSON.stringify(mergedConfig, null, 2)
        outputFileSyncOnChange(SITE_CONFIG, source)
    }

    return mergedConfig
}
