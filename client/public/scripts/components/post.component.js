import { Component } from "./component";

export class PostComponent extends Component {
    template() {
        return `<div class="root">
            <a href='/posts/${this.data.id}'>${this.data.body}</a>
        </div>`
    }
}