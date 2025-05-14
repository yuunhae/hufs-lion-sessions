import { useState } from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.2em;
  color: #333;
  font-weight: bold;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #007bff;
`;

interface RouteParms {
  coinId: string;
}

interface RouteState {
  "name": string;
  "symbol": string,
  "rank": number,
  "is_new": boolean,
  "is_active": boolean,
  "type": string
}

function Coin() {
  const { coinId } = useParams<RouteParms>();
  const [loading, setLoading] = useState(false);
  const { state } = useLocation<RouteState>();

  console.log(state.is_active);

  return (
    <Container>
      <Header>
        <Title>
          {state ? (
            <>
              coin: {coinId}<br />
            </>
          ) : (
            "loading..."
          )}
        </Title>
      </Header>
      {loading ? (
        "Loading..."
      ) : (
        <>
          이름 : {state.name || "loading..."}<br />
          순위 : {state.rank || "loading..."}<br />
          심볼 : {state.symbol || "loading..."}<br />
          타입 : {state.type || "loading..."}<br />
        </>
      )}
    </Container>
  )
}
export default Coin;
