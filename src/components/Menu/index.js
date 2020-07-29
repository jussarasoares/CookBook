import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="CookBook Logo" />
      </Link>
      <Button className="ButtonLink" to="cadastro/Video" as={Link} >
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;
