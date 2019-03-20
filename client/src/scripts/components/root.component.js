import { Component } from "./component";

export class RootComponent extends Component {
    template() {
        return `<div class="root">
            <router-outlet></router-outlet>
        </div>`
    }
}