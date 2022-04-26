import styled from "styled-components";

export const Header = styled.div`
  color: #fff;
  /* background: green; */
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  h1,
  p {
    margin: 15px 0 20px 0;
  }
  h1 {
    font-size: 60px;
    font-weight: bold;
  }
  img {
    width: 50px;
  }
  .container {
  }
`;

export const Search = styled.div`
  display: flex;
  input {
    background-color: white;
    border: 15px solid white;
    border-radius: 5px 0 0 5px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    background-color: white;
    border: none;
    width: 40px;
    cursor: pointer;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background-color: white;
  width: 350px;
  padding: 10px;
  border-radius: 5px;
  h3 {
    text-align: center;
    margin: 5px 0 10px 0;
  }
  span {
    margin-bottom: 5px;
  }
`;
