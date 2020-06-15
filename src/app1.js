import "./app1.css";
import $ from "jquery";

const $numbers = $("#numbers");
const $add1 = $("#add1");
const $minus1 = $("#minus1");
const $mul2 = $("#mul2");
const $div2 = $("#div2");
const n = parseInt(localStorage.getItem("n"));
$numbers.text(n || 100);

$add1.on("click", () => {
  let n = parseInt($numbers.text());
  n += 1;
  localStorage.setItem("n", n);
  $numbers.text(n);
});
$minus1.on("click", () => {
  let n = parseInt($numbers.text());
  n -= 1;
  localStorage.setItem("n", n);
  $numbers.text(n);
});
$mul2.on("click", () => {
  let n = parseInt($numbers.text());
  n *= 2;
  localStorage.setItem("n", n);
  $numbers.text(n);
});
$div2.on("click", () => {
  let n = parseInt($numbers.text());
  n /= 2;
  localStorage.setItem("n", n);
  $numbers.text(n);
});
