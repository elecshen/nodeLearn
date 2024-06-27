import * as task1_1 from "./Day1/Task1.mjs";
import * as task1_2 from "./Day1/Task2.mjs";
import * as task1_3 from "./Day1/Task3.mjs";
import * as task1_4 from "./Day1/Task4.mjs";
import * as task2_1 from "./Day2/Task1.mjs";
import * as task2_2 from "./Day2/Task2.mjs";
import * as task2_3 from "./Day2/Task3.mjs";

function PrintTask(taskName, taskInput, taskResult) {
  console.log(`Running ${taskName}...`);
  console.log("Input value:\n", taskInput);
  console.log("Result:\n", taskResult);
  console.log();
}

console.log("Day 1...\n");
PrintTask("Task 1", task1_1.input, task1_1.FindUnique(task1_1.input));
PrintTask("Task 2", task1_2.input, task1_2.ReplaceOnFirstLetter(task1_2.input));
PrintTask(
  "Task 3",
  task1_3.input,
  task1_3.MakePalindromeFromArr(task1_3.input),
);
PrintTask("Task 4", task1_4.input, await task1_4.FetchData(task1_4.input));

console.log("Day 2...\n");
PrintTask("Task 1", task2_1.input, task2_1.FindPrime(task2_1.input));
PrintTask("Task 2", task2_2.input, task2_2.FindFib(task2_2.input));
PrintTask("Task 3", task2_3.input, task2_3.WhatIsTime(...task2_3.input));
