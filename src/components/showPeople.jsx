// import getCharacters from "./helper";

// const RandomCharacters = () => {
//   const randomIndex = Math.floor(Math.random() * getCharacters().length);
//   const selectedCharacter = getCharacters()[randomIndex];

//   return (
//     <div>
//       <h1>{selectedCharacter.name}</h1>
//     </div>
//   );
// };

// export default RandomCharacters;

import React, { useEffect, useState } from 'react';
import getCharacters from './helper';

const RandomCharacters = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharactersData(data);
    };

    fetchData();
  }, []);

  const randomIndex = Math.floor(Math.random() * charactersData.length);
  const selectedCharacter = charactersData[randomIndex];

  return (
    <div>
      <h1>{selectedCharacter?.name}</h1>
      <p>Gender: {selectedCharacter?.gender}</p>
      <p>Birth Year: {selectedCharacter?.birth_year}</p>
      <p>Skin Color: {selectedCharacter?.skin_color}</p>
      <p>Height: {selectedCharacter?.height}</p>
      <p>Eye Color: {selectedCharacter?.eye_color}</p>
    </div>
  );
};

export default RandomCharacters;

