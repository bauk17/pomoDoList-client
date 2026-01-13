import styled from "styled-components";

export const TodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoContainer = styled.div`
  width: 42vw;
  margin-top: 200px;
`;

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

export const TodoNewTask = styled.div`
  margin-bottom: 30px;
  width: 42vw;
  height: 50px;
  background-color: white;
  border: 0;
  border-radius: 4px;
  display: flex;
  font-size: 18px;
  align-items: center;
  color: black;
  cursor: text;
  opacity: 0.85;
`;

export const TodoNewTaskInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding-left: 20px;
  font-size: 14px;
  border-radius: 4px;
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
