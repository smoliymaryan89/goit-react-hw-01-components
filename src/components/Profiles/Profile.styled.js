import styled from 'styled-components';

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 50px auto;
  width: 350px;
  height: 350px;

  border-radius: 8px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    margin-bottom: 20px;
  }

  p {
    color: #443b3b;
  }

  p:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const ProfileTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const ProfileStats = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;

    span:first-child {
      color: #443b3b;
    }
    span:nth-child(2) {
      font-weight: 700;
    }
  }
`;
