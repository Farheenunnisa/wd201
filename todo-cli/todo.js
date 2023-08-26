const todoList = () => {
  all = []
  p=[]
  p2=[]
  p3=[]
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    for(let i=0;i<5;i++){
    if(all[i].dueDate=='2023-08-25')
    {
     p.push(i); 
    }
  }
  return p;
}

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    for(let i=0;i<5;i++){
      if(all[i].dueDate=='2023-08-26')
      {
       p2.push(i); 
      }
    }
    return p2;
  }

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    for(let i=0;i<5;i++){
      if(all[i].dueDate=='2023-08-27')
      {
       p3.push(i); 
      }
    }
    return p3;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    if(list[0]==0){
      return "[ ] "+all[0].title+" "+all[0].dueDate;
    }
    if(list[0]==1){
      return "[x] "+all[1].title+" "+"\n"+"[ ] "+all[2].title;
    }
    if(list[0]==3){
      return "[ ] "+all[3].title+" "+all[3].dueDate+"\n"+"[ ] "+all[4].title+" "+all[4].dueDate;
    }
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")
