import React from 'react';
import PageDefault from '../../components/PageDefault';
import gifFood from '../../assets/img/Food.gif';
import './index.css';

export default function NotFound() {
  return (
    <PageDefault>
      <div className="notFound">
        <img alt="Food" src={gifFood} height="400px" />
        <h1>Página não encontrada! =( </h1>
      </div>
    </PageDefault>
  );
}
