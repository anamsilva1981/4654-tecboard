import './App.css'

// no react, componentes são FUNÇÕES

function TituloFormulario(props){
  return(
    <h2>{props.children}</h2>
  )
}

function CampoDeFormulario({children}){
  return(
    <fieldset>
      {children}
    </fieldset>
  )
}

function LabelFormulario({children, htmlFor}){
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function InputDoFormulario(props){
  return <input {...props}/>
}

function FormularioDeEvento () {

  return (
    <form className="form-evento">
      <TituloFormulario>
      Preencha para criar um evento:
      </TituloFormulario>
      <CampoDeFormulario>
        <LabelFormulario htmlFor="nome">
          Qual o nome do evento?
        </LabelFormulario>
        <InputDoFormulario type="text" id='nome'/>
      </CampoDeFormulario>
    </form>
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
