import { Component } from "./component";
import { PostComponent } from "./post.component";
import { fetchPostList } from "../services/posts.service";

export class PostListComponent  extends Component {
    template = `<div class="post-list"></div>`

    render($holder) {
        super.render($holder)

        const posts = await fetchPostList()
        console.log(posts);

        // posts.forEach(post => {
        //     const c = new PostComponent(post)
        //     c.render(this.$element)
        // });
    }
}