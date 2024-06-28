const characters = [
    {
      name: "Rick Sanchez (C-137)",
      race: "Human",
      intelligenceLevel: "Genius",
      profession: "Scientist/Inventor",
      associationWithFamily: "Patriarch",
      image: "path-to-character-image.jpg"  // Update with actual image paths
    },
    // Add additional characters here...
  ]; 
  
  characters.forEach(character => {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character');
    characterDiv.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <p>Race: ${character.race}</p>
      <p>Intelligence Level: ${character.intelligenceLevel}</p>
      <p>Profession: ${character.profession}</p>
      <p>Association with the Sanchez Family: ${character.associationWithFamily}</p>
    `;
    document.getElementById('characters').appendChild(characterDiv);
  });