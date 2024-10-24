import { useState, setValue } from "react";

export default function FunctionalExample() {

  const [value, setValue] = useState("Enter github user");

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.GITHUB_BASE_URL}/${value}`);
        const result = await response.json();
        setValue(result);
      } catch (error) {
      } finally {
      }
    };
    fetchData();
  };

  return (
    <div>
      <h1>GitHub react app</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={changeValue}></input>
        <button type="submit">
          Submit Data
        </button>
      </form>
    </div>
  );
}
