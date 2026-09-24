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
          height: 90vh;
          padding: 1rem 2rem;
          gap: 2rem;
          background-color: #F8FAFC;
        }

        @media (max-width: 768px){
          main{
            grid-template-columns: 1fr;
            padding: 1rem 2rem; 
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