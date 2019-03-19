import page from 'page';

page('/', () => {
    console.log('/')
})

page('/posts/:id', () => {
    console.log('/posts/:id')
})

page('*', () => {
    console.log('fallback')
})

export function start() {
    page()
}