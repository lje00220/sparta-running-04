/**
 * [03.js]
 *
 * - todos 배열과 수정 대상 todo의 id, 그리고 변경할 title이 주어집니다.
 * - updateTodoTitle 함수를 작성하여,
 *   1) 해당 id를 가진 todo의 title을 찾아서 새로운 title로 업데이트하세요.
 *   2) 업데이트된 새로운 todos 배열을 반드시 반환해야 합니다.
 *   3) 해당 id가 존재하지 않으면 기존 배열을 그대로 반환하세요.
 *
 * @param {Array} todos
 * @param {number} id
 * @param {string} newTitle
 * @returns {Array} 새로운 todos 배열
 */
function updateTodoTitle(todos, id, newTitle) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todos, title: newTitle } : todo
  );
  return todos;
}

// export 수정 불가
export { updateTodoTitle };
