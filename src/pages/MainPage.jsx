import Navbar from "../components/Navbar";
import { supabase } from "../features/db";

const handleClick = async () => {
  const { data, error } = await supabase.from('answers').select('*')
  console.log(data);
}

const changeLocation = () => {
  window.open("https://github.com/bdominguez99/Escomplicado", "_blank");
}

const MainPage = () => {
  return (
    <Navbar>
      <h2>Sobre nosotros</h2>
      <hr />
      <p>
        ESCOMplicado es un videojuego ambientado en la Escuela Superior de
        Cómputo (ESCOM) en donde el jugador tendrá como objetivo pasar las
        materias para poder terminar la escuela. El jugador podrá además
        reforzar los conocimientos aprendidos en las materias impartidas en la
        Escuela Superior de Cómputo, ya que para pasar las materias, se
        necesitará saber algunos aspectos de la materia para poder aprobarla.
      </p>
      <button className="btn btn-primary" onClick={changeLocation}>Ver repositorio</button>
      <button className="btn btn-secondary mx-3" onClick={handleClick}>Test</button>
    </Navbar>
  );
};
export default MainPage;
