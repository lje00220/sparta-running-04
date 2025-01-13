import { describe, it, expect } from "@jest/globals";
import { filterUserTodos } from "../05.js";

describe("filterUserTodos 테스트", () => {
  it("filter 메서드를 사용하는지 확인", () => {
    expect(filterUserTodos.toString().includes("filter")).toBe(true);
  });

  it("map 메서드를 사용하는지 확인", () => {
    expect(filterUserTodos.toString().includes("map")).toBe(true);
  });

  it("조건에 맞는 title만 배열로 반환", () => {
    const userTodos = [
      {
        userId: 1,
        title: "자바스크립트 공부",
        completed: false,
        priority: "high",
      },
      { userId: 2, title: "마트 가기", completed: true, priority: "low" },
      { userId: 1, title: "운동하기", completed: false, priority: "low" },
      { userId: 1, title: "청소하기", completed: false, priority: "high" },
    ];
    const result = filterUserTodos(userTodos, 1, "low");
    expect(result).toEqual(["운동하기"]);
  });

  it("조건에 맞는 항목이 없으면 빈 배열 반환", () => {
    const userTodos = [
      {
        userId: 1,
        title: "자바스크립트 공부",
        completed: false,
        priority: "high",
      },
      { userId: 2, title: "마트 가기", completed: true, priority: "low" },
      { userId: 1, title: "운동하기", completed: false, priority: "low" },
    ];
    const result = filterUserTodos(userTodos, 999, "high");
    expect(result).toEqual([]);
  });

  it("새로운 배열의 길이는 기존 배열보다 작거나 같아야 함", () => {
    const userTodos = [
      {
        userId: 1,
        title: "자바스크립트 공부",
        completed: false,
        priority: "high",
      },
      { userId: 2, title: "마트 가기", completed: true, priority: "low" },
      { userId: 1, title: "운동하기", completed: false, priority: "low" },
      { userId: 1, title: "청소하기", completed: false, priority: "high" },
    ];
    const result = filterUserTodos(userTodos, 1, "high");
    expect(result.length).toBeLessThanOrEqual(userTodos.length);
  });
});
