import Loading from "../src/loading"
import Button from "../src/button"

import Ripple from "../src/ripple"

function install(app) {
    Button.install && app.use(Button)
    Loading.install && app.use(Loading)
    Ripple.install && app.use(Ripple)
}


export default {
    install,
    Button,
    Loading,
    Ripple
}
