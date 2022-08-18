import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { score, subjects, getTopics } from "../utils/options";
import { pushData } from "../features/slices/dataSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const [Subject, setSubject] = useState();
  const [Score, setScore] = useState(new Array(5).fill(false));
  const [Topics, setTopics] = useState([]);

  const handleSubmit = () => {
    const score = Score.indexOf(true);
    const aux = Topics.filter((item) => item.value);
    const topics = aux.map((item) => item.topic);
    if (aux.length && topics.length) {
      dispatch(pushData({ id: Date.now(), subject: Subject, score, topics }));
      setSubject();
    } else {
      alert("Debes seleccionar una opción valida");
    }
  };

  const handleRadioButton = (index) => {
    const newScore = new Array(5).fill(false);
    newScore[index] = true;
    setScore(newScore);
  };

  const handleCheckbox = (position) => {
    setTopics(
      Topics.map((item, index) => ({
        topic: item.topic,
        value: index === position ? !item.value : item.value,
      }))
    );
  };

  useEffect(() => {
    setScore(new Array(5).fill(false));
    setTopics(getTopics(Subject));
  }, [Subject]);

  return (
    <div className="modal fade" id="modal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Nueva calificación</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <div className="m-3">
              <label className="form-label">Seleccione una materia</label>
              <select
                className="form-select"
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option>Sin seleccionar</option>
                {subjects.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="m-3">
              <label className="form-label">Califique su dificultad</label>
              <br />
              {score.map((option, index) => {
                return (
                  <div className="form-check form-check-inline" key={index}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="score"
                      value={option}
                      checked={Score[index]}
                      onChange={() => handleRadioButton(index)}
                    />
                    <label className="form-check-label">{option}</label>
                  </div>
                );
              })}
            </div>

            <div className="m-3">
              <label className="form-label">
                Seleccione los temas que considere mas importantes para entender
                la materia
              </label>
              <br />
              {Topics.map((option, index) => {
                return (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="topic"
                      value={option.topic}
                      checked={option.value}
                      onChange={() => handleCheckbox(index)}
                    />
                    <label className="form-check-label">{option.topic}</label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
