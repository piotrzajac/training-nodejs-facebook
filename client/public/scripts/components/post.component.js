import { Component } from "./component";

export class PostComponent extends Component {
    template() {
        return `<div class="root">${this.data.body}</div>`
    }
}