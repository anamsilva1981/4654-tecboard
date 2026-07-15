import './formulario-de-eventos-estilos.css';
import { TituloFormulario } from '../TituloFormulario';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { LabelFormulario } from '../LabelFormulario';
import { InputDoFormulario } from '../InputDoFormulario';
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';


export function FormularioDeEvento({ temas, onSubmit }) {
  function criarEvento(formData) {
    console.log('Envia dados do formulário', formData);

    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(
        item => item.id === Number(formData.get('tema'))
      ),
      data: new Date(formData.get('dataDoEvento')),
      titulo: formData.get('nomeDoEvento')
    };

    onSubmit(evento);
  }

  return (
    <form className="form-evento" action={criarEvento}>
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
