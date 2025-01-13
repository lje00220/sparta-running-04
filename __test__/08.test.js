import { describe, it, expect, jest } from "@jest/globals";
import { extractNames } from "../08.js";

describe("extractNames 테스트", () => {
  it("fetch 함수를 사용하는지 확인", () => {
    expect(extractNames.toString().includes("fetch")).toBe(true);
  });

  it("records 내부의 name 값을 배열로 반환", async () => {
    const mockData = {
      status: "ok",
      result: {
        records: [
          { id: 1, detail: { name: "A" } },
          { id: 2, detail: { name: "B" } },
        ],
      },
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await extractNames("http://fakeurl.com");
    expect(result).toEqual(["A", "B"]);
  });

  it("records가 비어있으면 빈 배열 반환", async () => {
    const mockData = {
      status: "ok",
      result: {
        records: [],
      },
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await extractNames("http://fakeurl.com");
    expect(result).toEqual([]);
  });

  it("fetch 함수를 한 번만 호출", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ result: { records: [] } }),
    });

    await extractNames("http://fakeurl.com");
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
