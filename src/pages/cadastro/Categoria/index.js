import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { useState } from 'react';

function CadastroCategoria() {
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Value Inicial');

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
