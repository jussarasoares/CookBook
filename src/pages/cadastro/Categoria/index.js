import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { useState } from 'react';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: '#000'
  }
  const [values, setValues] = useState(valoresIniciais);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function HandleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
      }}>
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              onChange={function funcaoHandler(infosDoEvento) {
                // setNomeDaCategoria(infosDoEvento.target.value)
              }}
            />
          </label>

          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descrição}
              onChange={function funcaoHandler(infosDoEvento) {
                // setNomeDaCategoria(infosDoEvento.target.value)
              }}
            />
          </label>

          <label>
            Color:
            <input
              type="color"
              value={values.cor}
              onChange={function funcaoHandler(infosDoEvento) {
                // setNomeDaCategoria(infosDoEvento.target.value)
              }}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
