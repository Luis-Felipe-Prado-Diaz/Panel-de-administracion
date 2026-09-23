export default (() => {

  class Main extends HTMLElement {

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
    main{
      display: grid;
      grid-template-columns: 1fr 3fr;
      width: 100%;
      height: calc(100vh - 10vh);
      padding: 30px 50px;
      gap: 50px;
      background-color: #F8FAFC;
    }

    @media (max-width: 768px){
      main{
        grid-template-columns: 1fr;
        padding: 15px 20px 
      }
    }

    </style>
    <main>
      <slot></slot>
    </main>
      
      `

    }

  }

  customElements.define('main-component', Main);
})()