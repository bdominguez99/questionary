import DataList from "..//DataList";

import { useState } from "react";
import { supabase } from "../../features/db";
import { strategies } from "../../utils/options";
import { useSelector } from "react-redux";
import { goal } from "../../utils/strings";

export const experience = [
  "Menos de 1 año",
  "De 1 a 5 años",
  "De 6 a 10 años",
  "De 11 a 15 años",
  "De 16 a 20 años",
  "Mas de 20 años",
];

const initialState = {
  type: "graduated",
  experience: "",
  subjects: 0,
  hours: 0,
  strategy: "",
};

const GraduatedForm = () => {
  const redux = useSelector((state) => state.dataReducer);
  const [State, setState] = useState(initialState);

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("answers")
      .insert([{ ...State, topics: redux }]);
    if (error) return console.log(error);
    alert("Gracias por tu respuesta");
    window.location.reload(false);
  };

  return (
    <>
      <h3>Formulario para egresados</h3>
      <hr />
      <div className="m-3">
        <label className="form-label">
          Indique el tiempo que ha pasado desde que se graduo
        </label>
        <select
          className="form-select"
          value={State.experience}
          onChange={(e) => setState({ ...State, experience: e.target.value })}
        >
          <option>Sin seleccionar</option>
          {experience.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="m-3">
        <label className="form-label">
          Indique cuantas materias reprobó en la carrera
        </label>
        <input
          type="number"
          className="form-control"
          value={State.subjects}
          onChange={(e) => setState({ ...State, subjects: e.target.value })}
        />
      </div>

      <div className="m-3">
        <label className="form-label">
          Indique las horas que solía estudiar a la semana por materia
        </label>
        <input
          type="number"
          className="form-control"
          value={State.hours}
          onChange={(e) => setState({ ...State, hours: e.target.value })}
        />
      </div>

      <div className="m-3">
        <label className="form-label">
          Indique cual considera que es la mejor forma para retener información
          por mas tiempo
        </label>
        <input
          className="form-control"
          list="datalistOptions"
          placeholder="Escribe para auto-completar"
          value={State.strategy}
          onChange={(e) => setState({ ...State, strategy: e.target.value })}
        />
        <datalist id="datalistOptions">
          {strategies.map((option, index) => (
            <option value={option} key={index} />
          ))}
        </datalist>
      </div>

      <div className="m-3">
        <label className="form-label">{goal}</label>
      </div>

      <DataList />

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          type="submit"
          className="btn btn-primary text-center"
          onClick={handleSubmit}
        >
          Enviar respuesta
        </button>
      </div>
    </>
  );
};
export default GraduatedForm;
