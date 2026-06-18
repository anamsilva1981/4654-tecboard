import './formulario-de-eventos-estilos.css';
import { TituloFormulario } from '../TituloFormulario';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { LabelFormulario } from '../LabelFormulario';
import { InputDoFormulario } from '../InputDoFormulario';


export function FormularioDeEvento () {

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