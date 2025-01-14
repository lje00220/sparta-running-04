/**
 * [06.js]
 *
 * - users 배열이 주어집니다(각 객체는 firstName, lastName, age 속성을 가집니다).
 * - transformUsers 함수를 작성하세요.
 *   1) fullName은 firstName + " " + lastName으로 만드세요.
 *   2) isAdult는 age가 20 이상인지에 따라 true 또는 false가 되어야 합니다.
 *   3) 변환된 새 배열을 반환하세요.
 *
 * @param {Array} users
 * @returns {Array}
 */
function transformUsers(users) {
  return users.map((user) => {
    return {
      fullName: user.firstName + " " + user.lastName,
      isAdult: user.age >= 20 ? true : false,
    };
  });
}

// export 수정 불가
export { transformUsers };
