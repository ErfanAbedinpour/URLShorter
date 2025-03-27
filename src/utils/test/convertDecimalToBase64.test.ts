import test, { describe } from "node:test";
import assert from "node:assert";
import { convertToBase62 } from "../convertToBase62";

test("should be convert 11157 to 2TX", () => {
  assert.strictEqual(convertToBase62(11157), "2tx");
});

test("should be convert 12345 To 3D7", () => {
  assert.strictEqual(convertToBase62(12345), "3D7");
});

test("should be return 0", () => {
  assert.strictEqual(convertToBase62(0), "0");
});
