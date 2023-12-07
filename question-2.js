// Question #2: User Task List
// add newtask
// reassign task
// delete last task
// show the massage of last task "Task id: 4, Go to the gym"
const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
userTaskList.push({id: 5, task: "Walk the dog"})
userTaskList[3]={ id: 4, task: "Go to the gym" }
userTaskList.pop();

console.log(`task id: ${userTaskList[3].id}, ${userTaskList[3].task}`)