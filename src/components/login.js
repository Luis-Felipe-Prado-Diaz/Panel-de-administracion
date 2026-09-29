  class Login extends HTMLElement {

    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.data = []
      this.labelTitulo = JSON.parse(this.getAttribute("label-titulo")) || ''
    }

    connectedCallback() {
      this.loadData()
      this.render()
    }

    loadData() {
      this.data = [
        {
          titulo: this.labelTitulo.titulo
        }
      ]
    }

    render() {
      this.shadow.innerHTML =
      /*html*/`
      <style>
        *{box-sizing: border-box; margin: 0; padding: 0;}
        
        .login{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          gap: 10px;
          width: 500px;
        }

        .login h1{
          font-size: 5rem;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          color: black;
          text-shadow: 3px 5px 2px #236cb1ff;
          text-align: center;
        }

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
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px 10px;
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
        form .campo-formulario .input-formulario  input:-webkit-autofill, {
          -webkit-box-shadow: 0 0 0 30px #C8EBFF inset !important;
          -webkit-text-fill-color: #000000 !important;
        }

        form .campo-formulario input[type="submit"]{
          margin-top: 20px;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-family: 'Poppins', sans-serif;
          box-shadow: -5px 5px 5px -5px #3a3a3a;
          outline: none;
          transition: all 0.3s ease;
          color: white;
          background-color: #384959;
          font-weight: 700;
          cursor: pointer;
          font-size: 1.2rem;
        }

        form .campo-formulario input[type="submit"]:hover{
          transform: translateY(-3px);
          box-shadow: 0px 5px 10px 0px #3a3a3a;
          transition: all 0.3s ease;
        }
        form .campo-formulario input[type="submit"]:active{
          transform: scale(0.95);
          transition: all 0.3s ease;
        }
      </style>

      <div class="login">
        <form action="">
          <div class="campo-formulario ">
            <div class="label-formulario">
              <label for="email">Email</label>
            </div>
            <div class="input-formulario">
              <input type="email" id="email" name="email" autocomplete="email"  required>
            </div>
          </div>
          <div class="campo-formulario">
            <div class="label-formulario">
              <label for="password">Password</label>
            </div>
            <div class="input-formulario">
              <input type="password" id="password" name="password" autocomplete="current-password" required>
            </div>
          </div>
          <div class="campo-formulario">
            <input type="submit" value="Iniciar sesión">
          </div>
        </form>
      </div>
      `

      this.data.forEach(item => {
        const login = this.shadow.querySelector('.login')
        
        Object.entries(item).forEach(([key,value]) => {
          const h1 = document.createElement('h1')
          login.prepend(h1)
          if(key === 'titulo'){
            h1.textContent = value
          }
        })

      })  

      const form =this.shadow.querySelector("form")

      form.addEventListener("submit",event =>{
        event.preventDefault()
        alert("estas ingresando al panel de administracion")
      })

    }

  }

  customElements.define('login-component', Login);