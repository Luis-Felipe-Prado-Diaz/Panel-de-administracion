export default (() => {

  class Form extends HTMLElement {

    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.data = []
    }

    connectedCallback() {
      this.loadData()
      this.render()
    }

    loadData() {
      this.data = [
        {
          label: 'Nombre',
          type: 'text',
          name: 'nombre'
        },
        {
          label: 'Email',
          type: 'email',
          name: 'email'
        },
        {
          label: 'Fecha de creación',
          type: 'date',
          name: 'fecha_creacion'
        },
        {
          label: 'Fecha de actualización',
          type: 'date',
          name: 'fecha_actualizacion'
        }

      ]
    }

    render() {
      this.shadow.innerHTML =
      /*html*/`
        <style>
          *{box-sizing: border-box; margin: 0; padding: 0;}

          .formulario{
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          }

          .formulario .paginacion{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 10px;
            width: 100%;
            border-bottom: 3px solid #0C0C2E;
          }
          .formulario .paginacion .titulo-paginacion{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            width: 100%;
          }
          .formulario .paginacion .titulo-paginacion .pagina {
            background-color: #6B8AA7;
            padding: 10px;
            color: white;
            font-size: 1rem;
            font-weight: 700;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
            transition: color 0.3s ease;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            transition: background-color 0.3s ease,transform 0.8s ease; 
          }
          .formulario .paginacion .titulo-paginacion .pagina:hover{
            background-color: #384959;
            transform: scale(1.05);
            transition: background-color 0.3s ease, transform 0.8s ease ;
          }
          .formulario .paginacion .titulo-paginacion .pagina:active{
            transform: scale(1.01);
            transition: background-color 0.3s ease, transform 0.8s ease;
          }


          .formulario .paginacion .titulo-paginacion .pagina.active{
            background-color: #0C0C2E;
            box-shadow: 0px -5px 10px 0px #002A4C;
            transform: scale(1.05);
            transition: background-color 0.3s ease, transform 0.5s ease;
          }

          .formulario .paginacion .titulo-paginacion .pagina:hover{
            color: white;
            transition: color 0.3s ease;
          }

          .formulario .paginacion .botones-paginacion{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 10px;
            width: 100%;
          }

          .botones-paginacion .boton-paginacion {
            width: 40px;
            height: 40px;
            padding: 5px;
            fill: white;
            background-color: #6B8AA7;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .formulario .paginacion .botones-paginacion .boton-paginacion:hover{
            background-color: #0C0C2E;
            transform: scale(1.05);
            transition: fill 0.3s ease, transform 0.3s ease;
            transform: scale(1.05);
            transition: fill 0.3s ease, transform 0.3s ease;
          }

          /* imput y labels*/

          form {
            background-color: #C8EBFF;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
            column-gap: 20px;
            width: 100%;
            padding: 0px 10px;
            margin-top: 0px;
            border-top: none;
            min-height: 150px;
            border-radius: 0 0 5px 5px ;
            box-shadow:0px 10px 20px 0px #002A4C;
          }
          
        
          form .campo-formulario {
            width: 100%;
            display: none;
            flex-direction: column;
            gap: 10px;
            padding: 20px 10px;
          }

          form .campo-formulario.active {
            display: flex;
          }

          /*labels y inputs*/

          form .campo-formulario .label-formulario label{
            font-weight: 700;
            color: #0a0a0a;
            font-family: 'Poppins', sans-serif;
          }

          form .campo-formulario .input-formulario  input{
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            font-family: 'Poppins', sans-serif;
            box-shadow: -5px 5px 5px -5px #3a3a3a;
            outline: none;
            transition: all 0.3s ease;
          }
          form .campo-formulario .input-formulario  input:hover{
            transform: translateY(-3px);
            box-shadow: 0px 5px 10px 0px #3a3a3a;
            transition: all 0.3s ease;
          }

          form .campo-formulario .input-formulario  input:focus{
            outline: none;
            box-shadow: 0px 5px 10px 0px #3a3a3a;
          }

          form .campo-formulario .input-formulario  input::placeholder{
            color: #7e7e7eff;
            font-weight: 700;
          }

        </style>
        
          <div class="formulario">
            <div class="paginacion">
              <div class="titulo-paginacion">
                <div class="pagina active" data-tab="general"> 
                  <span>General</span>
                </div>
                <div class="pagina" data-tab="direccion"> 
                  <span>Dirección</span>
                </div>
              </div>
              <div class="botones-paginacion">
                <button class="boton-paginacion"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg></button>
                <button class="boton-paginacion"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg></button>
              </div>
            </div>
            <form action="">
              <div class="campo-formulario active" data-tab="general">
                <div class="label-formulario">
                  <label for="nombre">Nombre</label>
                </div>
                <div class="input-formulario">
                  <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre">
                </div>
              </div><div class="campo-formulario active" data-tab="general">
                <div class="label-formulario">
                  <label for="email">Email</label>
                </div>
                <div class="input-formulario">
                  <input type="email" id="email" name="email" placeholder="Ingrese su email">
                </div>
              </div>

              <div class="campo-formulario" data-tab="direccion">
                <div class="label-formulario">
                  <label for="direccion">Dirección</label>
                </div>
                <div class="input-formulario">
                  <input type="text" id="direccion" name="direccion" placeholder="Ingrese su dirección">
                </div>
              </div><div class="campo-formulario" data-tab="direccion">
                <div class="label-formulario">
                  <label for="ciudad">Ciudad</label>
                </div>
                <div class="input-formulario">
                  <input type="text" id="ciudad" name="ciudad" placeholder="Ingrese su ciudad">
                </div>
              </div>

              
            </form>
          </div>
      `
      this.shadow.querySelector('.formulario').addEventListener('click', (event) => {
        if(event.target.closest('.pagina')){
          const tab = event.target.closest('.pagina')

          this.shadow.querySelector('.pagina.active').classList.remove('active')
          tab.classList.add('active')

          this.shadow.querySelectorAll('.campo-formulario.active').forEach(campo => campo.classList.remove('active'))
          this.shadow.querySelectorAll(`.campo-formulario[data-tab="${tab.dataset.tab}"]`).forEach(campo => campo.classList.add('active'))
        }
      })
    }

  }

  customElements.define('form-component', Form);
})()