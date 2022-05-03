import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid blue;
  padding-bottom: 2.25rem;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 5rem;
    object-fit: cover;
    margin: 1.5rem;
  }
`;
