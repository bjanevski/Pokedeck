import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";

function FetchPoke() {
  const url = "/pokemon/?limit=50";
  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const image_url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokes(response.data.results);
      setLoading(false);
    });
  }, [url]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {pokes.map((poke, index) => (
          <div
            key={index}
            className="single-poke-wrapper col-lg-3 col-md-4 col-sm-6 col-12"
          >
            <Link to={"/poke/" + poke.name}>
              <div className="single-poke-listing">
                <p>{poke.name}</p>
                <img src={image_url + poke.url.split("/")[6] + ".png"} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchPoke;
