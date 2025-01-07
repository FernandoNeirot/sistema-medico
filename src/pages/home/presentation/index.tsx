
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
        className="relative w-full overflow-hidden bg-transparent "
        style={{ height: "calc(100vh - 115px)", zIndex: 10 }}
      >
        <div className="text-[5em]">Bienvenido</div>        
        <div className="text-[2em] bg-white opacity-50">Podra buscar turnos disponibles por especialista</div>
        <div className="text-[2em] bg-white opacity-50 mt-5">Ver su historial medico</div>
      </div>
      <div
        className="relative w-full overflow-hidden bg-cyan-900"
        style={{
          backgroundImage: 'url("https://media.licdn.com/dms/image/D4E12AQGg6srPMZpHmg/article-cover_image-shrink_720_1280/0/1720630344992?e=2147483647&v=beta&t=n2LKULldShuNHMH-RKPcAZiMEQDg236s33MvFWOpEP4"',
          backgroundSize: "cover",
          backgroundPosition: "center",
          // position: "fixed",
          width: "100%",
          height: "calc(100vh - 50px)",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <div className="flex items-center justify-center h-full gap-10" >
          <div className="w-[350px] bg-blue-100 p-10 rounded-2xl">Laboratorio</div>
          <div className="w-[350px] bg-blue-100 p-10 rounded-2xl ">Diagnostico por imagenes</div>
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
