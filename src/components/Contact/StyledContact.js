import { styled } from 'styled-components';

export const StyledContact = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid #aaa;
  border-radius: 10px;
  min-width: 300px;
  padding: 10px;

  p {
    margin: 0;
  }
  p:first-child {
    margin: 0 0 10px 0;
  }
  span {
    font-weight: bold;
  }

  button {
    align-self: flex-end;
    max-width: fit-content;
    padding: 5px;
    border: 1px solid #aaa;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 250ms;
    &:focus,
    &:hover {
      background-color: #2196f3;
    }
  }
`;
