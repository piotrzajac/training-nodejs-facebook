import { Component } from "./component";

export class PostComponent extends Component {

    constructor(post) {
        super()
        this.post = post
        this.template = `<div class="post">${this.post.body}</div>`
    }
}