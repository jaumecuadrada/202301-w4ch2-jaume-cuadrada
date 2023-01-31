import { SetStateAction, useState } from "react";

interface FormProps {
  captureTag: (tag: string) => void;
}

const Form = ({ captureTag }: FormProps) => {
  const [tag, setTag] = useState("");

  const handleTag = (event: { target: { value: SetStateAction<string> } }) => {
    setTag(event.target.value);
  };

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    captureTag(tag);
  };

  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <div className="row">
        <label htmlFor="search" className="col-1 col-form-label">
          Search:{" "}
        </label>
        <div className="col-4">
          <input
            type="text"
            id="search"
            className="search form-control"
            onChange={handleTag}
          />
        </div>
        <button type="submit" className="btn btn-info btn-sm col-1">
          Go
        </button>
      </div>
    </form>
  );
};

export default Form;
