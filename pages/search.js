import { useEffect, useState } from "react";

function Universities() {
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState();
  const [name, setname] = useState();

  const getData = async () => {
    const searchParams = [];

    if (country) searchParams.push("country=" + country);
    if (name) searchParams.push("name=" + name);
    if (searchParams.length == 0) setUniversities([]);

    await fetch(
      "http://universities.hipolabs.com/search?" + searchParams.join("&")
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUniversities([...universities, ...data]);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return <p> </p>;
}

export default Universities;
