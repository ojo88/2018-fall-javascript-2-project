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


function showTopPriority(toDo) {
   var priority = [];

  toDo.toDos.forEach(toDos => {
    priority.push(toDos.priorityTag)
  })

  var countedPriority = priority.reduce((allPriorites, priority) => {
      if(priority in allPriorites){
        allPriorites[priority]++;
      }
      else{
        allPriorites[priority] = 1;
      }
      return allPriorites;
  }, {});
  
  return Object.keys(countedPriority).reduce((a, b) => countedPriority[a] > countedPriority[b] ? a : b);

 }
function toDosHtml() {
  return pastToDos
    .map(toDo => {
        index++; 
        return toDoHtml(toDo);
      })
    .join("")
}

function toDoHtml(toDo) {
  var topPriority = showTopPriority(toDo);

  return `
    <div class="card">
      <div class="card-body"> 
        ${toDo.day}
        <button id="card${index}" type="button" class="btn btn-info" onclick="showDetails(pastDetails${index})">Details</button>
      </div>
      <div class="card-body">
        <ul id="pastDetails${index}">
        <h3>Top priority for the day: ${topPriority}</h3>
        <div id="progressBarId${index}" class="progress"></div>
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

function showDetails(index) {

  $(index).toggle();
}

function showPercentComplete(){
  var progressNumber = 0;
  var progressBar = "";
  var progress = "";
  var toDos = "";
  var doneToDos = []

  doneToDos = pastToDos.map(toDo => toDo.toDos.map(x => x.done))
  console.log(doneToDos[0])

  for( var i = 1; i <= pastToDos.length; i++) {

    progressNumber = ((doneToDos[i-1].filter(t => t).length) / doneToDos[i-1].length) * 100;

    progressBar = `<div class="progress-bar" role="progressbar" style="width: ${progressNumber}%" aria-valuenow="${progressNumber}" aria-valuemin="0" aria-valuemax="100"></div>`
    progress = document.getElementById("progressBarId" + i)
    progress.innerHTML = progressBar

    }
   }

render()
showPercentComplete()

console.log(pastToDos.flatMap(toDo => toDo.toDos))
console.log(pastToDos.flatMap(toDo => toDo.toDos.map(x => x.done)))