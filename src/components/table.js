export default (() => {

  class Table extends HTMLElement {

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

      .table-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      gap: 20px;
      z-index: 2;
      }

      .table-container .info-container{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 20px;
      background: transparent;
      width: 100%; 
      border-bottom: 3px solid #FE9C04;
      border-radius: 5px;
      z-index: 10;
      }

      .table-container .info-container .filter-container{
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
      }

      .table-container .info-container .filter-container svg{
        width: 40px;
        height: 40px;
        background-color: #FE9C04;
        padding: 7px;
        fill: white;
        cursor: pointer;
        transition: fill 0.3s ease;
      }
      .table-container .info-container .filter-container svg:hover{
        fill: #0C0C2E;
        transition: fill 0.3s ease;
      }

      .table-container .info-container .pagination-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        color: white;
        background-color: #0C0C2E;
        border-radius: 5px;
        padding: 5px;
        
      } 

      .table-container .info-container .pagination-container .pagination-button{
        width: 30px;
        height: 30px;
        color: white;
        font-size: 15px;
        font-weight: 700;
        background-color: #FE9C04;
        border-radius: 5px;
        fill: #ffffffff;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: color 0.3s ease;
      }

      .table-container .info-container .pagination-container .pagination-button:hover{
        color: #0C0C2E;
        transition: color 0.3s ease;
      }

      .table-container .list-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 10px 0px;
      min-height: 130px;
      overflow: hidden;
      border: 3px solid #CBD5E1;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      background: white;

      }

      
      .table-container .list-container ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style: none;
        gap: 10px;
        width: 100%;
        padding: 10px;
      }
      .data{
        gap: 20px;
        font-weight: 700;
        color: #0a0a0a;
        padding: 5px;
      }


    </style>
    <div class="table-container">
      <div class = "info-container">
        <div class = "filter-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
        </div>
        <div class = "pagination-container">
        <button class = "pagination-button"><</button>
        <span class = "pagination-separator">1 / 1</span>
        <button class = "pagination-button">></button>
        </div>
      </div>
      <div class = "list-container">
        <ul>
          <li><span class = "data">Nombre: </span></li>
          <li><span class = "data">Email: </span></li>
          <li><span class = "data">Fecha de creación: </span></li>
          <li><span class = "data">Fecha de actualización: </span></li>
        </ul>
      </div>
    </div>
            `

    }

  }

  customElements.define('table-component', Table);
})()