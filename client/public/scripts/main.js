import { RootComponent } from './components/root.component'
import { start } from './router'
async function bootstrap() {
    const $page = document.querySelector('#page')
    const c = new RootComponent()
    c.render($page)

    start()
}

bootstrap().catch((err) => console.error(err))