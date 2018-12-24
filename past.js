var pastToDos = [
  {
    day: "2018-12-01",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: true, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Family"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "Family"}
    ]
  },
  {
    day: "2018-12-02",
    toDos: [
      {name: 'foo', level: 1, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: true, priorityTag: "Family"}
    ]
  },
  {
    day: "2018-12-03",
    toDos: [
      {name: 'foo', level: 1, done: false, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'baz', level: 3, done: false, highlight: true, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: false, highlight: false, priorityTag: "OKCoders"}
    ]
  },
  {
    day: "2018-12-04",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Health"},
      {name: 'bar', level: 2, done: true, highlight: true, priorityTag: "Family"},
      {name: 'baz', level: 3, done: false, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "Family"}
    ]
  },
  {
    day: "2018-12-05",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Health"},
      {name: 'baz', level: 3, done: false, highlight: true, priorityTag: "Health"},
      {name: 'buzz', level: 4, done: true, highlight: false, priorityTag: "OKCoders"}
    ]
  },
  {
    day: "2018-12-06",
    toDos: [
      {name: 'foo', level: 1, done: true, highlight: false, priorityTag: "Family"},
      {name: 'bar', level: 2, done: true, highlight: false, priorityTag: "Family"},
      {name: 'baz', level: 3, done: true, highlight: false, priorityTag: "OKCoders"},
      {name: 'buzz', level: 4, done: true, highlight: true, priorityTag: "Family"}
    ]
  }
]

function toDosHtml() {
  return pastToDos
    .map(toDo => toDoHtml(toDo))
    .join("")
}

function toDoHtml(toDo) {
  return `
    <div class="card">
      <div class="card-body"> 
        ${toDo.day}
        <button type="button" class="btn btn-info" onclick="showDetails()" >Details</button>
      </div>
    </div>
    `
}

function render() {
  var element = document.getElementById("past-to-dos")
  element.innerHTML = toDosHtml()
}

function showDetails() {
$("#past-to-dos").hide();
}

render()

console.log(pastToDos.flatMap(toDo => toDo.toDos))
console.log(pastToDos.flatMap(toDo => toDo.toDos.map(x => x.done)))
