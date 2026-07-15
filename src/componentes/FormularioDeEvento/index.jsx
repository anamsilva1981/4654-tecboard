import './formulario-de-eventos-estilos.css';
import { TituloFormulario } from '../TituloFormulario';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { LabelFormulario } from '../LabelFormulario';
import { InputDoFormulario } from '../InputDoFormulario';
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';


export function FormularioDeEvento({ temas }) {

  function onsubmit(FormData) {
    console.log('Envia dados do formulario', FormData)
    const evento = {
      capa: FormData.get('capa'),
      tema: temas.find(function (item) { return item.id == FormData.get('tema')}),
      data: new Date(FormData.get('dataDoEvento')),
      titulo: FormData.get('nomeDoEvento')
    }
    console.log('Esse é o evento', evento)
  }

  return (
    <form className="form-evento" action={onsubmit}>
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
            name='nomeDoEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <LabelFormulario htmlFor="capa">
            Qual o endereço da capa do evento?
          </LabelFormulario>
          <InputDoFormulario
            type="text"
            id='capaDoEvento'
            placeholder='http://...'
            name='capa'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <LabelFormulario htmlFor="dataDoEvento">
            Data do evento
          </LabelFormulario>
          <InputDoFormulario
            type="date"
            id='dataDoEvento'
            name='dataDoEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <LabelFormulario htmlFor="temaDoEvento">
            Tema do evento
          </LabelFormulario>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>

      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>

    </form>
  )
}