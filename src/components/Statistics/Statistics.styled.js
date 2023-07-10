import styled from 'styled-components';

export const Section = styled.section`
  width: 400px;
  height: 150px;
  margin: 50px auto;

  h2 {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #ffffff;
    text-align: center;
  }
`;

export const Stat = styled.ul`
  display: flex;
  align-items: center;

  li {
    padding: 10px;
    width: 100%;

    span {
      display: block;
      color: #ffffff;

      text-align: center;
    }
    span:nth-child(2) {
      font-size: 25px;
      text-align: center;
      margin-top: 10px;
    }
  }
`;
