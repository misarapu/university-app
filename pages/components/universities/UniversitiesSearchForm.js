import countries from "../../../countries";

function UniversitiesSearchForm(props) {
  return (
    <form className="row" onSubmit={props.onSubmit}>
      {/* univesity name input */}
      <div className="col-md-6">
        <input
          type="search"
          className="form-control form-control-lg"
          placeholder="university name"
          onChange={props.onNameChange}
        />
      </div>
      {/* countries select */}
      <div className="col-md-4">
        <select
          className="form-select form-select-lg"
          defaultValue=""
          onChange={props.onCountryChange}
        >
          <option value="" className="text-secondary">
            -- Country --
          </option>
          {countries.map((c) => (
            <option key={c.code} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      {/* submit */}
      <div className="col-md-2">
        <button
          type="submit"
          className="btn btn-primary btn-lg w-100"
          value="Search"
        >
          <i className="bi bi-search px-2"></i>
          <span className="d-md-none d-lg-inline">Search</span>
        </button>
      </div>
    </form>
  );
}

export default UniversitiesSearchForm;
