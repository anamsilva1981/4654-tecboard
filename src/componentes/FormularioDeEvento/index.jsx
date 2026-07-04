import './formulario-de-eventos-estilos.css';
import { TituloFormulario } from '../TituloFormulario';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { LabelFormulario } from '../LabelFormulario';
import { InputDoFormulario } from '../InputDoFormulario';
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';


export function FormularioDeEvento ({temas}) {

  return (
    <form className="form-evento">
      <TituloFormulario>
      Preencha para criar um evento:
      </TituloFormulario>
      <div className='camposFormulario'>
        <CampoDeFormulario>
          <LabelFormulario htmlFor="nomeDoEvento">
            Qual o nome do evento?
          </LabelFormulario>
          <InputDoFormulario 
            type="text" 
            id='nomeDoEvento' 
            placeholder='Summer dev hits'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <LabelFormulario htmlFor="capa">
            Qual o endereço da capa do evento?
          </LabelFormulario>
          <InputDoFormulario 
            type="text" 
            id='nomeDoEvento' 
            placeholder='http://...'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <LabelFormulario htmlFor="dataDoEvento">
            Data do evento
          </LabelFormulario>
          <InputDoFormulario 
            type="date" 
            id='dataDoEvento' 
          />
        </CampoDeFormulario>
        
        <CampoDeFormulario>
          <LabelFormulario htmlFor="temaDoEvento">
            Tema do evento
          </LabelFormulario>
          <ListaSuspensa id="tema" name="tema" itens={temas}/>
        </CampoDeFormulario>
        
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
      
    </form>
  )
}