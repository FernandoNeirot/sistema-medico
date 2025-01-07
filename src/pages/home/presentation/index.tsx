import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="relative h-[115px]" />
      <div
        style={{
          backgroundImage: 'url("https://i.ibb.co/yywkpvQ/imagen.jpg"',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <div
        className="w-full overflow-hidden bg-transparent flex items-center justify-center"
        style={{ height: "calc(100vh - 115px)", zIndex: 10 }}
      >
        <div>hola</div>
      </div>
      <div
        className="relative w-full overflow-hidden bg-cyan-900"
        style={{ height: "calc(100vh - 50px)", zIndex: 1 }}
      >
        <div>
          <div>Central de Turnos</div>
          <div>Laboratorio</div>
          <div>Diagnostico por imagenes</div>
          <div></div>
        </div>
      </div>
      <div
        className="relative w-full overflow-hidden bg-cyan-900"
        style={{ height: "auto", zIndex: 1 }}
      >
        <img src="https://www.hospitalitaliano.org.ar/images/nuevaWeb/trabaja.png" className="w-full" />
      </div>
      <div
        className="relative w-full overflow-hidden "
        style={{ height: "calc(100vh - 50px)", zIndex: 1 }}
      >
        <div>hola</div>
      </div>
    </div>
  );
};

export default HomePage;
