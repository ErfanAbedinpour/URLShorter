export function convertToBase62(number: number) {
  /*
   * NOTE: The Hash Function contains 0-9 | a-z | A-Z
   *
   * 1. Devide number to 62
   * 2. store remaining
   * 3. Devide again until reviced 0
   * 0123456789
   *
   * abcdefghijklmnopqrstuvwxyz
   *
   * ABCDEFGHIJKLMNOPQRSTUVWXYZ
   * o
   * */
  const remaining: number[] = [];

  const BASE62_CHARS =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (number === 0) return "0";
  let result = "";
  while (number > 0) {
    let remainder = number % 62;
    result = BASE62_CHARS[remainder] + result;
    number = Math.floor(number / 62);
  }

  return result;
}

console.log(convertToBase62(11157));
