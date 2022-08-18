import { useSelector, useDispatch } from "react-redux";
import { popData } from "../features/slices/dataSlice";

const DataList = () => {
  const data = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          type="button"
          className="btn btn-link"
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
          + Añade una calificación
        </button>
      </div>
      <div className="accordion accordion-flush my-4" id="list">
        {data.map((item) => {
          return (
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#item-${item.id}`}
                  aria-expanded="false"
                  aria-controls={`item-${item.id}`}
                >
                  <a
                    className="btn-close"
                    onClick={() => dispatch(popData(item.id))}
                    style={{ marginRight: "10px" }}
                  />
                  {item.subject.toUpperCase()}
                </button>
              </h2>
              <div
                id={`item-${item.id}`}
                className="accordion-collapse collapse"
                data-bs-parent="#list"
              >
                <div className="accordion-body">{item.topics.join(", ")}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default DataList;
