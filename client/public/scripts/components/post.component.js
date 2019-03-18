import { Component } from "./component";

export class PostComponent extends Component {
    template = `<div class="post"></div>`

    constructor(post) {
        this.post = post
    }

}