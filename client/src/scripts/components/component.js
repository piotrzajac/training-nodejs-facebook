export class Component {
    $element = null
    data = null

    template() {
        return ''
    }

    setData(data) {
        this.data = data
    }

    compile(html) {
        const document = new DOMParser().parseFromString(html, 'text/html')

        return document.body.firstElementChild
    }

    render($holder) {
        this.$element = this.compile(this.template())
        $holder.appendChild(this.$element)
    }
}