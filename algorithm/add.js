const a = "9223372036854775807";
const b = "9223372036854775808";
const answer = [];

const aArray = a.split("");
const bArray = b.split("");

let upNumber = 0;
while (aArray.length && bArray.length) {
  const target1 = aArray.pop();
  const target2 = bArray.pop();
  let next = Number(target1) + Number(target2) + upNumber;
  if (next >= 10) {
    upNumber = 1;
    next = next % 10;
  } else {
    upNumber = 0;
  }
  answer.push(next);
}

while (aArray.length) {
  // 123 + 7
  const target = aArray.pop();
  let next = Number(target) + upNumber;
  if (next >= 10) {
    upNumber = 1;
    next = next % 10;
  } else {
    upNumber = 0;
  }
  answer.push(next);
}

while (bArray.length) {
  const target = bArray.pop();
  let next = Number(target) + upNumber;
  if (next >= 10) {
    upNumber = 1;
    next = next % 10;
  } else {
    upNumber = 0;
  }
  answer.push(next);
}

if (upNumber) answer.push(upNumber);
answer.reverse();

console.log(answer.join(""));
