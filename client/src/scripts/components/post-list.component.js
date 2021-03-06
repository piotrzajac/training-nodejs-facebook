import { Component } from "./component";
import { PostComponent } from "./post.component";

export class PostListComponent extends Component {
    template() {
        return `<div class="post-list"></div>`
    }

    render($holder) {
        super.render($holder)

        const posts = this.data

        if (Array.isArray(posts)) {
            posts.forEach((post) => {
                const c = new PostComponent()
                c.setData(post)
                c.render(this.$element)
            })
        } else {
            this.$element.appendChild(document.createTextNode("No posts"))
        }
    }
}