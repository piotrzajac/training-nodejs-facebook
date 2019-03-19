import { RootComponent } from './components/root.component'
import { start } from './router'
async function bootstrap() {
    start()

    const $page = document.querySelector('#page')
    const c = new RootComponent()
    c.render($page)
}

bootstrap().catch((err) => console.error(err))