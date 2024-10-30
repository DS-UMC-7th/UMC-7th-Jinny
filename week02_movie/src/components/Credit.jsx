import styled from "styled-components";

const Credit = ({ creditKey, id, profile_path, name, original_name }) => {
  return (
    <CreditContDiv key={creditKey}>
      <CreditDiv>
        {profile_path ? (
          <img src={`https://image.tmdb.org/t/p/original/${profile_path}`} style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
        ) : (
          <></>
        )}
      </CreditDiv>
      <CreditP style={{ fontWeight: "bold" }}>{name}</CreditP>
      <CreditP>{original_name}</CreditP>
    </CreditContDiv>
  );
};

export default Credit;

const CreditContDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const CreditDiv = styled.div`
  width: 5vw;
  height: 5vw;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid white;
`;

const CreditP = styled.p`
  color: white;
  margin: 2px 0;
  font-size: 12px;
  text-align: center;
`;
