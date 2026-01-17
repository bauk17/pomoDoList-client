import styled from "styled-components";

export const TodoTask = styled.div`
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-radius: 4px;
  margin-bottom: 25px;
  opacity: 0.9;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  height: 38.5px;
  width: 100%;
`;

export const TodoEditInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

export const TodoTaskOptions = styled.div`
  width: 95px;

  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoTaskOptionButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
