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

var cardIndex = [];
var index = 0;

function toDosHtml() {
  return pastToDos
    .map(toDo => {index++; return toDoHtml(toDo);})
    .join("")
}

function toDoHtml(toDo) {
  //var highlight = toDo.toDos[1].highlight ? 'highlight': ''
  //var highlight = toDo.map( x => {x.highlight ? 'highlight' : ''} )
  return `
    <div class="card">
      <div class="card-body"> 
        ${toDo.day}
        <button id="card${index}" type="button" class="btn btn-info" onclick="showDetails(pastDetails${index})">Details</button>
      </div>
      <div class="card-body">
        <ul id="pastDetails${index}">
          <li>
            <span class="badge badge-primary badge-pill">${toDo.toDos[0].level}</span>
            <span>${toDo.toDos[0].name}</span>
          </li>
          <li>
            <span class="badge badge-primary badge-pill">${toDo.toDos[1].level}</span>
            <span>${toDo.toDos[1].name}</span>
          </li>
          <li>
            <span class="badge badge-primary badge-pill">${toDo.toDos[2].level}</span>
            <span>${toDo.toDos[2].name}</span>
          </li>
          <li>
            <span class="badge badge-primary badge-pill">${toDo.toDos[3].level}</span>
            <span>${toDo.toDos[3].name}</span>
          </li>
        </ul>
      </div>
    </div>
    `
}

function render() {
  var element = document.getElementById("past-to-dos")
  element.innerHTML = toDosHtml()
}

// function renderDetails() {
//   var element = document.getElementById("pastDetails")
//   element.innerHTML = pastTodosHtml(index)
// }

function showDetails(index) {
  //var detailCard = document.getElementById(`pastDetails${index}`)
  //$(`#pastDetails${index}`).toggle();
  $(index).toggle();
}

render()
// renderDetails()

console.log(pastToDos.flatMap(toDo => toDo.toDos))
console.log(pastToDos.flatMap(toDo => toDo.toDos.map(x => x.done)))
