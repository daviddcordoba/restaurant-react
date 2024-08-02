import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-150px)] flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contactanos</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brightColor"
              placeholder="David Cordoba"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brightColor"
              placeholder="tuemail@ejemplo.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Comentario</label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brightColor"
              rows="4"
              placeholder="Las mejores hamburguesas del mundo. Las recomiendo!!"
            ></textarea>
          </div>
          <button
            className="w-full bg-brightColor text-white font-semibold py-2 rounded-md hover:bg-brightColor-dark transition duration-200"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;