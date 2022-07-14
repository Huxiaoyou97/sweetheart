import Button from "../src/button"
import Avatar from "../src/avatar"
import CollapseTransition from "../src/collapse-transition"
import Container from "../src/container"
import Context from "../src/context"
import Divider from "../src/divider"
import Icon from "../src/icon"
import Loading from "../src/loading"
import Locale from "../src/locale"
import Ripple from "../src/ripple"


function install(app) {
    Button.install && app.use(Button)
    Avatar.install && app.use(Avatar)
    CollapseTransition.install && app.use(CollapseTransition)
    Container.install && app.use(Container)
    Context.install && app.use(Context)
    Divider.install && app.use(Divider)
    Icon.install && app.use(Icon)
    Loading.install && app.use(Loading)
    Locale.install && app.use(Locale)
    Ripple.install && app.use(Ripple)
}


export default {
    install,
    Button,
    CollapseTransition,
    Container,
    Context,
    Divider,
    Icon,
    Loading,
    Locale,
    Ripple
}
