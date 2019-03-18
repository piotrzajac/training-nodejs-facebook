import { RootComponent } from './components/root.component'

async function bootstrap() {
    const $page = document.querySelector('#page')
    const c = new RootComponent()
    c.render($page)
}

bootstrap().catch((err) => console.error(err))