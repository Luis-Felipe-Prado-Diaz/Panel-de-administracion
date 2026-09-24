export default (() => {

  class Logo extends HTMLElement {

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



        .nombre-logo{
          color: white;
          font-size: clamp(0.3rem, 1vw + 0.5rem, 1rem);
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 1px;
        }

        .imagen-logo{
          padding: 10px;
          background-color: #FE9C04;
          border-radius: 50%;
        }

        .imagen-logo svg{
          width: 20px;
          height: 20px;
          fill: #0C0C2E;
          cursor: pointer;
        }

        .logo{
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 30px 50px;
          
        }

        @media (max-width: 768px){
          .logo{
            padding: 0px 20px ;
          }
        }
  
      </style>
      <div class="logo">
        <div class="imagen-logo">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
        </div>
        <div class="nombre-logo">
          <h1>Go kart - Usuarios</h1>
        </div>
      </div>
      `
    }

  }

  customElements.define('logo-component', Logo);
})()