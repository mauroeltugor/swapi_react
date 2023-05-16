const apiUrl = 'https://swapi.py4e.com/api/people';


const getCharacters = async () => {
    const info = await fetch(apiUrl);
    const data = await info.json();
    const character = data.results;
    const charactersData = character.map((character) => ({
        name: character.name,
        gender: character.gender,
        birth_year: character.birth_year,
        skin_color: character.skin_color,
        height: character.height,
        eye_color: character.eye_color,
    }));
    console.log(charactersData);//borar
    return charactersData
}

// getCharacters();

export default getCharacters;