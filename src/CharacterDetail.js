import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const API_URL = "https://rickandmortyapi.com/api/character";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <Card>
      <Image src={character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>{character.species} - {character.gender}</Card.Meta>
        <Card.Description>Status: {character.status}</Card.Description>
        <Card.Description>Origin: {character.origin.name}</Card.Description>
        <Card.Description>Location: {character.location.name}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CharacterDetail;
