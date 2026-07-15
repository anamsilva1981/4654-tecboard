import './App.css'
import { useState } from 'react'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema } from './componentes/Tema'
import { Banner } from './componentes/Banner'
import { CardEvento } from './componentes/CardEvento'


function App() {

  const temas = [
    {id: 1, nome: 'front-end'},
    {id: 2, nome: 'back-end'},
    {id: 3, nome: 'devops'},
    {id: 4, nome: 'inteligencia artifical'},
    {id: 5, nome: 'data science'},
    {id: 6, nome: 'cloud'}
  ]

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no front'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png',
      tema: temas[1],
      data: new Date(),
      titulo: 'Back-end raiz'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_3.png',
      tema: temas[2],
      data: new Date(),
      titulo: 'DevOps na pratica'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_4.png',
      tema: temas[3],
      data: new Date(),
      titulo: 'IA para devs'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_5.png',
      tema: temas[4],
      data: new Date(),
      titulo: 'Dados em acao'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_6.png',
      tema: temas[5],
      data: new Date(),
      titulo: 'Cloud sem misterio'
    }
  ])

  function adicionarEvento(evento){
    setEventos([...eventos, evento])
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} onSubmit={adicionarEvento}/>
      {temas.map(function (item){
        return (
          <section key={item.id}>
            <Tema tema={item}/>
            {eventos
              .filter(function (evento) {
                return evento.tema.id === item.id
              })
              .map(function (evento) {
                return <CardEvento key={evento.titulo} evento={evento}/>
              })}
          </section>
        )
      })}

    </main>
  )
}

export default App
