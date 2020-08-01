import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState({});

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/videos-por-categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setDadosIniciais(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      {dadosIniciais.length && (
        <>
          <BannerMain
            videoTitle="O Melhor da Culinária para Você Aprender!"
            url={dadosIniciais[0].videos[0].url}
          />

          {dadosIniciais.map((categoria) => (
            <Carousel
              ignoreFirstVideo
              category={categoria}
            />
          ))}
        </>
      )}

      <Footer />
    </div>
  );
}

export default Home;
