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
      position: relative;
      display: grid;
      grid-template-columns: 1fr 3fr;
      width: 100vw;
      height: calc(100vh - 60px);
      padding: 15px 50px;
      gap: 50px;
      justify-content: center;
      background-color: white;
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