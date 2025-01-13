import { describe, it, expect } from "@jest/globals";
import { transformUsers } from "../06.js";

describe("transformUsers 테스트", () => {
  it("map 메서드를 사용하는지 확인", () => {
    expect(transformUsers.toString().includes("map")).toBe(true);
  });

  it("fullName과 isAdult를 올바르게 변환", () => {
    const users = [
      { firstName: "Alice", lastName: "Lee", age: 25 },
      { firstName: "Bob", lastName: "Kim", age: 17 },
    ];
    const result = transformUsers(users);
    expect(result).toEqual([
      { fullName: "Alice Lee", isAdult: true },
      { fullName: "Bob Kim", isAdult: false },
    ]);
  });

  it("빈 배열이 주어졌을 때 빈 배열 반환", () => {
    const result = transformUsers([]);
    expect(result).toEqual([]);
  });

  it("새로운 배열의 길이는 기존 배열과 같아야 함", () => {
    const users = [
      { firstName: "Alice", lastName: "Lee", age: 25 },
      { firstName: "Bob", lastName: "Kim", age: 17 },
    ];
    const result = transformUsers(users);
    expect(result.length).toBe(users.length);
  });
});
