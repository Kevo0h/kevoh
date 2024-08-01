import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    comentario: "",
  });

  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "comentario") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos del formulario:", formData);
  };

  return (
    <section
      className="  bg-gray-900 text-white w-screen h-screen flex  justify-center"
      id="Contacto"
    >
      <div className="flex flex-col items-center text-center p-4 lg:p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-semibold mb-8">
          Tenes alguna duda? Contactanos!
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 mb-4">
            <div>
              <label
                htmlFor="nombre"
                className="block text-left mb-2 text-sm font-semibold"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="apellido"
                className="block text-left mb-2 text-sm font-semibold"
              >
                Apellido
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 mb-4">
            <div>
              <label
                htmlFor="celular"
                className="block text-left mb-2 text-sm font-semibold"
              >
                Celular
              </label>
              <input
                type="tel"
                id="celular"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left mb-2 text-sm font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="comentario"
              className="block text-left mb-2 text-sm font-semibold"
            >
              Comentario
            </label>
            <textarea
              id="comentario"
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              maxLength="500"
              rows="4"
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu comentario aquí..."
            />
            <p className="text-gray-400 text-xs mt-1">
              {charCount}/500 caracteres
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
