export default (() => {

  class Menu extends HTMLElement {

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

        *{padding: 0; margin: 0; box-sizing: border-box;}

        .lateral-bar {
          position: fixed;
          top: 60px;
          right: 0;
          width: 200px;
          height:100vh;
          z-index: 100;
          display: none;
          flex-direction: column;
          padding-top: 2rem;
          padding-left: 1rem;
          padding-right: 1rem;
          background-color: #0C0C2E; 
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          transition: transform 0.5s ease;
        }

        .lateral-bar.active {
          transform: translateX(0);
          transition: transform 0.5s ease;
          display: flex;
        }

        .lateral-bar ul{
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          gap: 1rem;
          transition: all 0.8s ease;
        }

        .lateral-bar ul li:hover{
          transform: translateX(0.3rem);
          transition: transform 0.5s ease;
          background-color: #181855ff;
          border-radius: 5px;
        }

        .lateral-bar ul li{
          padding: 10px 20px;
          width:100%;
        }

        .lateral-bar ul li a{
          text-decoration: none;
          color: #fff;
          font-size: 1.2rem;
          font-weight: 500;
          transition: color 0.3s ease;
          width: 100%;
          border-radius: 5px;
          box-sizing: border-box;
          cursor: pointer;
        }

        .lateral-bar ul li a:hover{
          color: #FE9C04;
        }
        .menu-toggle {
            position: absolute;
            top: 15px;
            right: 17px;
            z-index: 300;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            cursor: pointer;
            align-items: end;
            margin-right: 2rem;
          }
          
          .menu-toggle span {
            display: block;
            width: 40px;
            height: 4px;
            background-color: #FE9C04;
            transition: all 0.3s ease;
            border-radius: 2px;
          }

          .menu-toggle span:nth-child(1) {
            transform: rotate(0deg) translate(0);
          }

          .menu-toggle span:nth-child(2) {
            opacity: 1;
          }

          .menu-toggle span:nth-child(3) {
            transform: rotate(0deg) translate(0);
          }

          .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(7px, 9px);
          }

          .menu-toggle.active span:nth-child(2) {
            opacity: 0;
          }

          .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -10px);
          }
      </style>

      <div class="menu-toggle" id="menuToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>

      
        <nav class="lateral-bar">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Usuarios</a></li>
            <li><a href="#">Pedidos</a></li>
          </ul>
        </nav>
  
      `

      const menuToggle = this.shadow.querySelector('.menu-toggle');
      const nav = this.shadow.querySelector('.lateral-bar');

      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
          menuToggle.classList.add('active');
        } else {
          menuToggle.classList.remove('active');
        }
      });
    }

  }

  customElements.define('menu-component', Menu);
})()