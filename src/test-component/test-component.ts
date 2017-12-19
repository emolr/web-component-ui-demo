export class TestComponent extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
            <style>
                @style('src/test-component/test-component.scss')
            </style>
            <slot></slot>
        `
    }
}

window.customElements.define('test-component', TestComponent)