import { describe, it, expect } from "@jest/globals";
import { createTodo } from "../02.js";

describe("createTodo 테스트", () => {
  it("새로운 할 일을 기존 배열에 추가 후 반환", () => {
    const todos = [
      { id: 1, title: "산책하기", completed: false },
      { id: 2, title: "장보기", completed: true },
    ];
    const result = createTodo(todos, "코드 작성");
    expect(result.length).toBe(3);
    expect(result[2].title).toBe("코드 작성");
    expect(result[2].completed).toBe(false);
  });

  it("id가 고유한지 확인", () => {
    const todos = [
      { id: 1, title: "산책하기", completed: false },
      { id: 2, title: "장보기", completed: true },
    ];
    const result = createTodo(todos, "코드 작성");
    expect(result[2].id).not.toBe(1);
    expect(result[2].id).not.toBe(2);
  });

  it("기존 배열을 변경하지 않고 새로운 배열을 반환", () => {
    const todos = [
      { id: 1, title: "산책하기", completed: false },
      { id: 2, title: "장보기", completed: true },
    ];
    const result = createTodo(todos, "코드 작성");
    expect(result).not.toBe(todos);
  });
});
