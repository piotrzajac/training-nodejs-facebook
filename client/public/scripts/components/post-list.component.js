import { Component } from "./component";
import { PostComponent } from "./post.component";
import { fetchPostList } from "../services/posts.service";

export class PostListComponent extends Component {
    template() {
        return `<div class="post-list"></div>`
    }


    async render($holder) {
        super.render($holder)

        const posts = await fetchPostList()

        posts.forEach((post) => {
            const c = new PostComponent()
            c.setData(post)
            c.render(this.$element)
        });
    }
}