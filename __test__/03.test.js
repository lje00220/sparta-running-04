import { describe, it, expect } from "@jest/globals";
import { updateTodoTitle } from "../03.js";

describe("updateTodoTitle 테스트", () => {
  it("map 메서드를 사용하는지 확인", () => {
    expect(updateTodoTitle.toString().includes("map")).toBe(true);
  });

  it("특정 id의 title을 변경 후 새로운 배열을 반환", () => {
    const todos = [
      { id: 1, title: "청소하기", completed: false },
      { id: 2, title: "운동하기", completed: false },
    ];
    const result = updateTodoTitle(todos, 1, "청소 완료");
    expect(result).not.toBe(todos);
    expect(result[0].title).toBe("청소 완료");
    expect(result[1].title).toBe("운동하기");
  });

  it("존재하지 않는 id가 주어졌을 때 기존 배열을 그대로 반환", () => {
    const todos = [
      { id: 1, title: "청소하기", completed: false },
      { id: 2, title: "운동하기", completed: false },
    ];
    const result = updateTodoTitle(todos, 999, "없는 할 일");
    expect(result).toEqual(todos);
  });

  it("새로운 배열의 길이는 기존 배열과 같아야 함", () => {
    const todos = [
      { id: 1, title: "청소하기", completed: false },
      { id: 2, title: "운동하기", completed: false },
    ];
    const result = updateTodoTitle(todos, 1, "청소 완료");
    expect(result.length).toBe(todos.length);
  });
});
