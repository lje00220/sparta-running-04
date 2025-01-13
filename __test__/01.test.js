import { describe, it, expect } from "@jest/globals";
import { getIncompleteTodos } from "../01.js";

describe("getIncompleteTodos 테스트", () => {
  it("필터를 사용하는지 확인", () => {
    expect(getIncompleteTodos.toString().includes("filter")).toBe(true);
  });

  it("완료되지 않은 할 일만 반환", () => {
    const todos = [
      { id: 1, title: "잠자기", completed: false },
      { id: 2, title: "밥먹기", completed: true },
      { id: 3, title: "코딩하기", completed: false },
    ];
    const result = getIncompleteTodos(todos);
    expect(result).toEqual([
      { id: 1, title: "잠자기", completed: false },
      { id: 3, title: "코딩하기", completed: false },
    ]);
  });
});
