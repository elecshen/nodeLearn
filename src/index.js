import * as task1_1 from "./Day1/Task1.mjs";
import * as task1_2 from "./Day1/Task2.mjs";
import * as task1_3 from "./Day1/Task3.mjs";
import * as task1_4 from "./Day1/Task4.mjs";
import * as task2_1 from "./Day2/Task1.mjs";
import * as task2_2 from "./Day2/Task2.mjs";
import * as task2_3 from "./Day2/Task3.mjs";
import * as task3_1 from "./Day3/Task1.mjs";
import * as task3_2 from "./Day3/Task2.mjs";
import * as task3_3 from "./Day3/Task3.mjs";
import * as task4_1 from "./Day4/Task1.mjs";
import * as task4_2 from "./Day4/Task2.mjs";
import * as task4_3 from "./Day4/Task3.mjs";
import * as task5_1 from "./Day5/Task1.mjs";
import * as task5_2 from "./Day5/Task2.mjs";
import * as task5_3 from "./Day5/Task3.mjs";

function printTask(taskName, taskInput, taskResult) {
  console.log(`Running ${taskName}...`);
  console.log("Input value:\n", taskInput);
  console.log("Result:\n", taskResult);
  console.log();
}

console.log("Day 1\n");
printTask("Task 1", task1_1.input, task1_1.findUnique(task1_1.input));
printTask("Task 2", task1_2.input, task1_2.replaceOnFirstLetter(task1_2.input));
printTask(
  "Task 3",
  task1_3.input,
  task1_3.makePalindromeFromArr(task1_3.input),
);
printTask("Task 4", task1_4.input, await task1_4.fetchData(task1_4.input));

console.log("Day 2\n");
printTask("Task 1", task2_1.input, task2_1.findPrime(task2_1.input));
printTask("Task 2", task2_2.input, task2_2.findFib(task2_2.input));
printTask(
  "Task 3",
  task2_3.input,
  task2_3.whatIsTime(task2_3.input.month, task2_3.input.year),
);

console.log("Day 3\n");
printTask(
  "Task 1",
  task3_1.input,
  task3_1.sortAndFind(task3_1.input.arr.slice(), task3_1.input.numToFound),
);
printTask(
  "Task 2",
  task3_2.input,
  task3_2.sortAndJoin(task3_2.input.numArr.slice(), task3_2.input.wordArr),
);
printTask("Task 3", task3_3.input, task3_3.sortAndJoin(task3_3.input.slice()));

console.log("Day 4\n");
printTask("Task 1", task4_1.input, task4_1.toKeyValue(task4_1.input));
{
  let tmp = new task4_2.Worker(...task4_2.input);
  printTask("Task 2", task4_2.input, {
    ...tmp,
    salary: tmp.getSalary(),
  });
}
{
  let tmp = new task4_3.Worker(...task4_3.input);
  printTask("Task 3", task4_3.input, {
    name: tmp.name,
    surname: tmp.surname,
    rate: tmp.rate,
    days: tmp.days,
    salary: tmp.getSalary(),
  });
}

console.log("Day 5\n");
{
  let tmp = new task5_1.Worker(...task5_1.input);
  tmp.rate = 80000;
  tmp.days = 3;
  printTask("Task 1", task5_1.input, {
    name: tmp.name,
    surname: tmp.surname,
    rate: tmp.rate,
    days: tmp.days,
    salary: tmp.getSalary(),
  });
}
{
  let tmp = new task5_2.MyString();
  printTask("Task 2", task5_2.input, {
    reverse: tmp.reverse(task5_2.input.toRevStr),
    ucFirst: tmp.ucFirst(task5_2.input.toUCStr),
    ucWords: tmp.ucWords(task5_2.input.toUCStr),
  });
}
{
  let tmp = new task5_3.Calculation(task5_3.input.calculationLine);
  let result = {
    calculationLine: tmp.calculationLine,
    newCalculationLine: undefined,
    lastSymbol: undefined,
    calculationLineAfterDelete: undefined,
  };
  tmp.setLastSymbolCalculationLine(task5_3.input.lastSymbol);
  result.newCalculationLine = tmp.calculationLine;
  result.lastSymbol = tmp.lastSymbol;
  tmp.deleteLastSymbol();
  result.calculationLineAfterDelete = tmp.calculationLine;
  printTask("Task 3", task5_3.input, result);
}
