import React, { useState, useEffect } from "react";
import axios from "axios";

function SinglePoke(props) {
  const url = "/pokemon/" + props.match.params.slug;
  const [poke, setPoke] = useState({});
  const [loading, setLoading] = useState(true);
  const image_url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  useEffect(() => {
    axios.get(url).then((response) => {
      setPoke(response.data);
      setLoading(false);
    });
  }, [url]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="container">
      <div className="poke-description">
        <h1 className="poke-name">{poke.species.name}</h1>
        <div className="types-wrapper">
          {poke.types.map((type) => (
            <p>{type.type.name}</p>
          ))}
        </div>
        <div className="poke-info">
          <img
            className="poke-image"
            src={image_url + poke.species.url.split("/")[6] + ".png"}
          />
          <div className="moves-list">
            <h5>Moves:</h5>
            <ul>
              {poke.moves.slice(0, 10).map((move) => (
                <li>{move.move.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePoke;
