import { useEffect, useState } from "react";
import UniversitiesList from "./components/universities/UniversitiesList";
import countries from "../countries";
import { getUniversities as fetchUnivesities} from "./api/university";

function Home() {
  const [universities, setUniversities] = useState([]);
  const [filter, setFilter] = useState({
    country: "",
    name: "",
  });

  useEffect(() => {
    getUniversities();
  }, []);

  const getUniversities = () => {
    universities = [];
    fetchUnivesities(filter.country, filter.name).then((res) =>
      setUniversities(res)
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getUniversities();
        }}
      >
        <input
          type="search"
          placeholder="university name"
          onChange={(e) => {
            setFilter({ ...filter, ...{ name: e.target.value } });
          }}
        ></input>
        <select
          defaultValue=""
          onChange={(e) => {
            setFilter({ ...filter, ...{ country: e.target.value } });
          }}
        >
          <option value="">---</option>
          {countries.map((c) => (
            <option key={c.code} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        <button type="submit" value="Search">
          Search
        </button>
      </form>
      <UniversitiesList universities={universities} />
    </div>
  );
}

export default Home;
