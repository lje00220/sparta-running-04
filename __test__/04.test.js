import { describe, it, expect } from "@jest/globals";
import { deleteTodo } from "../04.js";

describe("deleteTodo 테스트", () => {
  it("filter 메서드를 사용하는지 확인", () => {
    expect(deleteTodo.toString().includes("filter")).toBe(true);
  });

  it("특정 id의 todo를 제거하고 새로운 배열을 반환", () => {
    const todos = [
      { id: 1, title: "첫 번째 할 일", completed: false },
      { id: 2, title: "두 번째 할 일", completed: true },
    ];
    const result = deleteTodo(todos, 1);
    expect(result).not.toBe(todos);
    expect(result).toEqual([
      { id: 2, title: "두 번째 할 일", completed: true },
    ]);
  });

  it("존재하지 않는 id가 주어졌을 때 기존 배열을 그대로 반환", () => {
    const todos = [
      { id: 1, title: "첫 번째 할 일", completed: false },
      { id: 2, title: "두 번째 할 일", completed: true },
    ];
    const result = deleteTodo(todos, 999);
    expect(result).toEqual(todos);
  });

  it("새로운 배열의 길이는 기존 배열보다 1 작아야 함", () => {
    const todos = [
      { id: 1, title: "첫 번째 할 일", completed: false },
      { id: 2, title: "두 번째 할 일", completed: true },
    ];
    const result = deleteTodo(todos, 1);
    expect(result.length).toBe(todos.length - 1);
  });
});
