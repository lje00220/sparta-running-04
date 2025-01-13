import { describe, it, expect, jest } from "@jest/globals";
import { filterTodosByKeyword } from "../07.js";

describe("filterTodosByKeyword 테스트", () => {
  it("fetch 함수를 사용하는지 확인", () => {
    expect(filterTodosByKeyword.toString().includes("fetch")).toBe(true);
  });

  it("keyword가 포함된 title만 필터링하여 반환", async () => {
    const mockData = [
      { id: 1, title: "Hello World" },
      { id: 2, title: "foo bar" },
      { id: 3, title: "hello kitty" },
    ];
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await filterTodosByKeyword("hello");
    expect(result).toEqual([
      { id: 1, title: "Hello World" },
      { id: 3, title: "hello kitty" },
    ]);
  });

  it("keyword와 일치하는 항목이 없으면 빈 배열 반환", async () => {
    const mockData = [
      { id: 1, title: "Hello World" },
      { id: 2, title: "foo bar" },
    ];
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await filterTodosByKeyword("xyz");
    expect(result).toEqual([]);
  });

  it("fetch 함수를 한 번만 호출", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
    });

    await filterTodosByKeyword("hello");
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
