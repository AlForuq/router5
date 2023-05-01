import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { s } from "../../mock";

import { useHistory, useParams } from "react-router-dom";
// console.log(useHistory);
export const Home = () => {
  const params = useParams();
  const history = useHistory();
  const [students] = useState(s);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    let res = students.filter((v) => v.id === Number(params?.id));
    setSelected(...res);
  }, [params?.id, students]);

  return (
    <Container>
      <div>
        {students.map((v) => {
          return (
            <div key={v.id}>
              <h3>Name: {v.name}</h3>
              <h3>Email: {v.email}</h3>
              <button onClick={() => history.push(`/Home/${v.id}`)}>
                Click
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Selected: {selected?.email}</h1>
      </div>
    </Container>
  );
};
