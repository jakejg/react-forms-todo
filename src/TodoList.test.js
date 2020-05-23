import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList ';

it('renders without crashing', ()=> {
    render(<TodoList />)
});

it('matches snapshot', () => {
  const { asFragment } = render(<TodoList />)
  expect(asFragment()).toMatchSnapshot();
})

it('keeps track of form data', () => {
  const { getByLabelText} = render(<TodoList />);
  const TodoInput = (getByLabelText("Add a Todo"));
  fireEvent.change(TodoInput, {target: {value: "test"}})

  expect(TodoInput.value).toEqual("test")
})


it('it should add a todo to the DOM', () => {
  const { getByLabelText, getByText} = render(<TodoList />);
  const TodoInput = getByLabelText("Add a Todo");
  const btn = getByText("Add");
  fireEvent.change(TodoInput, {target: {value: "test"}});
  fireEvent.click(btn)  

  expect(getByText("test")).toBeInTheDocument();

})

it('it should edit a todo', () => {
  const { getByText, getByTestId} = render(<TodoList />);
  const editBtn = getByText("Edit");
  fireEvent.click(editBtn)  

  const EditInput = getByTestId("editInput");
  const btn = getByText("Change");
  fireEvent.change(EditInput, {target: {value: "new test"}});
  fireEvent.click(btn)  

  expect(getByText("new test")).toBeInTheDocument();

})

it('should delete a todo from the DOM', () => {
  const { getByLabelText, getByText} = render(<TodoList />);
  const TodoInput = getByLabelText("Add a Todo");

  const todo = getByText("test");
  const deleteBtn = getByText("Delete");
  fireEvent.click(deleteBtn)

  expect(todo).not.toBeInTheDocument;

});