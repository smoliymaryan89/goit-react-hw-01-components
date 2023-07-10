import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 200px;
  padding: 8px 8px;
  border-radius: 8px;
  box-shadow: -3px 2px 6px -2px rgba(0, 0, 0, 0.75);

  p {
    font-weight: 700;
  }
`;

export const Status = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
