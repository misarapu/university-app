import { useEffect, useState } from "react";
import UniversitiesList from "./components/universities/UniversitiesList";
import UniversitiesSearchForm from "./components/universities/UniversitiesSearchForm";
import countries from "../countries";
import { getUniversities as fetchUniversities } from "./api/university";

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
    fetchUniversities(filter.country, filter.name).then((res) =>
      setUniversities(res)
    );
  };

  return (
    <div className="container-fluid py-5 px-xl-5">
      <UniversitiesSearchForm
        onNameChange={(e) => {
          setFilter({ ...filter, ...{ name: e.target.value } });
        }}
        onCountryChange={(e) => {
          setFilter({ ...filter, ...{ country: e.target.value } });
        }}
        onSubmit={(e) => {
          e.preventDefault();
          getUniversities();
        }}
      />
      <div className="row mt-4">
        <div className="col">
          <UniversitiesList universities={universities} />
        </div>
      </div>
    </div>
  );
}

export default Home;
