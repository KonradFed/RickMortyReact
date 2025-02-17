import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Image, Button, Dropdown } from "semantic-ui-react";

const API_URL = "https://rickandmortyapi.com/api/character";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/?page=${page}&status=${status}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results || []));
  }, [page, status]);

  const statusOptions = [
    { key: "", text: "All", value: "" },
    { key: "alive", text: "Alive", value: "alive" },
    { key: "dead", text: "Dead", value: "dead" },
    { key: "unknown", text: "Unknown", value: "unknown" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Dropdown
        placeholder="Filter by Status"
        selection
        options={statusOptions}
        onChange={(e, { value }) => setStatus(value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {characters.map((char) => (
          <Card key={char.id} onClick={() => navigate(`/character/${char.id}`)}>
            <Image src={char.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{char.name}</Card.Header>
              <Card.Meta>{char.species} - {char.gender}</Card.Meta>
              <Card.Description>Status: {char.status}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default CharacterList;
