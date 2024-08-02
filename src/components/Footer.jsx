import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl  md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">ComidasRAP</h1>
          <p className="text-sm">
            Déjate llevar por una sinfonía de sabores, donde cada plato es un lienzo de excelencia culinaria.
        </p>
        </div>
       
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Lo mas Vendido</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Tasty Pizza
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Mega Dibu
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Bacon Burger
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contactanos</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              comidas.rap@gmail.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +54 123 456 789
            </a>
            
            <ul className="flex gap-2">
                <a href="/"> <li><BsFacebook/></li> </a> 
                <a href="/"> <li><RiTwitterXFill/></li> </a>
                <a href="/"> <li><BsInstagram/></li> </a>
            </ul>
            
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright Desarrollado por
            <a target="_blank" href="https://davidcordoba.netlify.app/"><span className=" text-brightColor"> David Cordoba</span></a>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;