import styled from 'styled-components';

export const Li = styled.li`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

export const Btn = styled.button`
  font-size: 18px;
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: red;
    color: white;
  }
  :active {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.8);
  }
`;

export const Name = styled.span`
  color: #eae8d9;
  font-size: 26px;
  font-weight: 500;
`;

export const Num = styled.span`
  color: #eae8d9;
  font-size: 26px;
  font-weight: 600;
`;
