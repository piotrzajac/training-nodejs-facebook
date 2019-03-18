import { Component } from "./component";
import { PostComponent } from "./post.component";
import { fetchPostList } from "../services/posts.service";

export class PostListComponent extends Component {
    template = `<div class="post-list"></div>`

    async render($holder) {
        super.render($holder)

        const posts = await fetchPostList()

        posts.forEach((post) => {
            const c = new PostComponent(post)
            c.render(this.$element)
        });
    }
}