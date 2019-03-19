import page from 'page';
import { PostListComponent } from "./components/post-list.component";
import { PostComponent } from "./components/post.component";
import { fetchPostList, fetchPostById } from "./services/posts.service";

page('*', async(context, next) => {
    console.log(context.path, context.params)

    const $outlet = document.querySelector('router-outlet')
    $outlet.innerHTML = ''

    next()
})

page('/', () => {
    page.redirect('/posts');
});

page('/posts', async() => {
    const $outlet = document.querySelector('router-outlet')

    const posts = await fetchPostList()
    if (!posts) {
        console.log('No post found')
    } else {
        const c = new PostListComponent()
        c.setData(posts)
        c.render($outlet)
    }
})

page('/posts/:id', async(context) => {
    const $outlet = document.querySelector('router-outlet')

    const post = await fetchPostById(context.params.id)
    if (!post) {
        console.log('No post found')
    } else {
        const c = new PostComponent()
        c.setData(post)
        c.render($outlet)
    }
})

export function start() {
    page()
}