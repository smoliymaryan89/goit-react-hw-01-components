import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;

  width: 500px;
  box-shadow: 1px 6px 18px 1px rgba(111, 80, 80, 0.75);

  thead {
    background-color: #3a8d91;
    color: #ffffff;
    height: 40px;
  }

  tbody {
    tr:nth-child(2n) {
      background-color: #dfdfdf;
    }
  }

  td {
    height: 40px;
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
  }
`;
