import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Label } from '../Label'
import { TituloFormulario } from '../TituloFormulario'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'

export function FormularioDeEvento({ temas, aoSubmeter }) {
  function criarDataLocal(data) {
    const [ano, mes, dia] = data.split('-')
    return new Date(Number(ano), Number(mes) - 1, Number(dia))
  }

  function aoFormSubmetido(formData) {
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id === Number(formData.get('tema'))
      }),
      data: criarDataLocal(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento'),
    }

    aoSubmeter(evento)
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
            required
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem de capa?</Label>
          <CampoDeEntrada
            type="url"
            id="capa"
            placeholder="https://..."
            name="capa"
            required
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            name="dataEvento"
            required
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} required />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}
