//BoilerPlate code
import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import CustomTasks from "../CustomTasks";
import CustomTestClass from "../testUtils";

let testContainer = null;

beforeEach(() => {
  testContainer = new CustomTestClass();
});

afterEach(() => {
  testContainer.clear();
  testContainer = null;
});

// Actual tests
it("Checks if component renders", async () => {
  await act(async () => {
    render(<CustomTasks />, testContainer.container);
  });

  expect(testContainer.container.querySelectorAll(".todo-item").length).toEqual(
    1
  );

  expect(
    testContainer.container.querySelectorAll(".todo-item")[0].textContent
  ).toEqual("todo-1");
});
it("Checks if component renders 1", async () => {
  await act(async () => {
    render(<CustomTasks />, testContainer.container);
  });

  expect(testContainer.container.querySelectorAll(".todo-item").length).toEqual(
    1
  );

  expect(
    testContainer.container.querySelectorAll(".todo-item")[0].textContent
  ).toEqual("todo-1");
});
it("Checks if component renders 2", async () => {
  await act(async () => {
    render(<CustomTasks />, testContainer.container);
  });

  expect(testContainer.container.querySelectorAll(".todo-item").length).toEqual(
    1
  );

  expect(
    testContainer.container.querySelectorAll(".todo-item")[0].textContent
  ).toEqual("todo-1");
});

it("Checks if component renders 3", async () => {
  await act(async () => {
    render(<CustomTasks />, testContainer.container);
  });

  expect(testContainer.container.querySelectorAll(".todo-item").length).toEqual(
    1
  );

  expect(
    testContainer.container.querySelectorAll(".todo-item")[0].textContent
  ).toEqual("todo-1");
});

it("Checks if component renders 4", async () => {
  await act(async () => {
    render(<CustomTasks />, testContainer.container);
  });

  expect(testContainer.container.querySelectorAll(".todo-item").length).toEqual(
    1
  );

  expect(
    testContainer.container.querySelectorAll(".todo-item")[0].textContent
  ).toEqual("todo-1");
});

it("Checks if component renders 5", async () => {
  await act(async () => {
    render(<CustomTasks />, testContainer.container);
  });

  expect(testContainer.container.querySelectorAll(".todo-item").length).toEqual(
    1
  );

  expect(
    testContainer.container.querySelectorAll(".todo-item")[0].textContent
  ).toEqual("todo-1");
});

it("Checks if component renders 6", async () => {
  await act(async () => {
    render(<CustomTasks />, testContainer.container);
  });

  expect(testContainer.container.querySelectorAll(".todo-item").length).toEqual(
    1
  );

  expect(
    testContainer.container.querySelectorAll(".todo-item")[0].textContent
  ).toEqual("todo-1");
});

it("Checks if component renders 7", async () => {
  await act(async () => {
    render(<CustomTasks />, testContainer.container);
  });

  expect(testContainer.container.querySelectorAll(".todo-item").length).toEqual(
    1
  );

  expect(
    testContainer.container.querySelectorAll(".todo-item")[0].textContent
  ).toEqual("todo-1");
});

it("Checks if component renders 8", async () => {
  await act(async () => {
    render(<CustomTasks />, testContainer.container);
  });

  expect(testContainer.container.querySelectorAll(".todo-item").length).toEqual(
    1
  );

  expect(
    testContainer.container.querySelectorAll(".todo-item")[0].textContent
  ).toEqual("todo-1");
});

it("Checks if component renders 9", async () => {
  await act(async () => {
    render(<CustomTasks />, testContainer.container);
  });

  expect(testContainer.container.querySelectorAll(".todo-item").length).toEqual(
    1
  );

  expect(
    testContainer.container.querySelectorAll(".todo-item")[0].textContent
  ).toEqual("todo-1");
});
