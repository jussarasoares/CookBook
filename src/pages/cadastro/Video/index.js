import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
// import { SliderItem } from '../../../components/Carousel/components/Slider';
// import VideoCard from '../../../components/Carousel/components/VideoCard';

function CadastroVideo() {
  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const [videos, setVideos] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/videos';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setVideos(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setVideos([
          ...videos,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo:"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <ul>
        {videos.map((video) => (
          <li key={`${video.id}`}>
            {video.titulo}
          </li>
        ))}
      </ul>

      {/* <Slider>
        {videos.map((video) => (
          <SliderItem key={video.titulo}>
            <VideoCard
              videoTitle={video.titulo}
              videoURL={video.url}
              categoryColor={video.color}
            />
          </SliderItem>
        ))}
      </Slider> */}

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
