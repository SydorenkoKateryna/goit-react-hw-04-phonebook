import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.p`
  width: 150px;
`;

export const Number = styled.p`
  width: 120px;
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  height: 20px;

  font-weight: 700;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: rgb(60, 60, 253);
    border-color: rgb(60, 60, 253);
  }
`;
