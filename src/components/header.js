export default (() => {

  class Header extends HTMLElement {

    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
      this.render()
    }

    render() {
      this.shadow.innerHTML =
      /*html*/`
      <style>
        *{
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #0C0C2E;
          
          height: 10vh;
          width: 100%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
      </style>

      <header>
        <slot></slot>
      </header>
      `

    }

  }

  customElements.define('header-component', Header);
})()