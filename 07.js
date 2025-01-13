/**
 * [07.js]
 *
 * - https://jsonplaceholder.typicode.com/todos 에서 Todo 목록을 받아옵니다.
 * - filterTodosByKeyword 함수를 작성하세요.
 *   1) title에서 특정 keyword가 포함된 항목만 필터링합니다.
 *   2) 대소문자는 구분하지 않아도 됩니다.
 *   3) 필터링된 새로운 배열을 반환하세요.
 *
 * @param {string} keyword
 * @returns {Promise<Array>}
 */

async function filterTodosByKeyword(keyword) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  const filteredTodo = todos.filter((x) => x.title.includes(keyword));
  return filteredTodo;
}

// export 수정 불가
export { filterTodosByKeyword };
