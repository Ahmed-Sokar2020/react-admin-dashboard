import type { GridColDef } from "@mui/x-data-grid";
import "./Add.scss";

type AddProps = {
  slug: string;
  columns: GridColDef[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ slug, columns, setIsOpen }: AddProps) => {
  const handelSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send the data to the server
    // Add new item
    // axios.Post(`/api/${slug}/s`,{})
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setIsOpen(false)}>
          x
        </span>

        <h2 className="title">Add new {slug}</h2>

        <form onSubmit={handelSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label htmlFor="formElement">{column.headerName}</label>
                <input
                  id="formElement"
                  type={column.type}
                  placeholder={column.field}
                  required
                />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
