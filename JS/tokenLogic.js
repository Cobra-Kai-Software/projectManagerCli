// const url = 'http://localhost:8080/'
const url = 'https://still-bayou-84038.herokuapp.com/'

function getProjects() {
  $('.tasks').css('display', 'none');
  $('.littleMain').append(
    `<section class="projects">
    </section>`
  )
  $.get(url, function(projectData) {
    for (var i = 0; i < projectData.length; i++) {
      $('.projects').append(
        `<div class="card card-outline-danger mb-3 text-center card${projectData[i].id}" data-project="${projectData[i].id} id="">
      <div class="card-block" style="height: 8vh; display:flex; justify-content: center;align-items:center;">
       <button class="btn btn-primary my-2 my-sm-0" data-project="${projectData[i].id}" type="submit" style="width: 25vw; height:6vh;">${projectData[i].name}</button>
      <button class="btn btn-danger my-2 my-sm-0" id="deleteProject" data-projectDelete="${projectData[i].id}" type="submit"style="margin-left:1vw;">Delete</button>
      </div>`
      )
    }
  })
}

function addTasks(tasksData) {
  for (var i = 0; i < tasksData.length; i++) {
    if (tasksData[i].todo === true) {
      if (tasksData[i].inprogress === false) {
        $('.todo').append(`
        <div class="card-block" id="card${tasksData[i].id}" style="height: auto;border: solid 1px;margin:1vh;">
        <div class ="top">
        <button type="button" data-id="" class="close" id=""aria-label="Close">
        <span aria-hidden="true" data-id="${tasksData[i].id}" id="span${tasksData[i].id}">&times;</span> </button>
        </div>
        <br>
        <h6 class="card-title" id="projectID" data-projectId="${tasksData[i].project_id}" style="font-size="1.2em;">${tasksData[i].task_name}</h6>
        <button id="icebox${tasksData[i].id}" class="btn btn-outline-primary my-2 my-sm-0" data-icebox="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small class="text-muted" data-icebox="${tasksData[i].id}">IceBox</small></button>
        <button id="done${tasksData[i].id}"class="btn btn-outline-primary my-2 my-sm-0" data-done="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small class="text-muted" data-done="${tasksData[i].id}">Done</small></button>
        <div class="card-group" style="margin-top:.5vh;">
        <hr>
        <button id="inprogress${tasksData[i].id}"class="btn btn-success btn-sm" data-inprogress="${tasksData[i].id}" type="submit" ><small data-inprogress="${tasksData[i].id}">Start Task</small> </button>
        </div>
        `)
      } else {
        $('.todo').append(`
            <div class="card-block" id="card${tasksData[i].id}" style="height: auto;border: solid 1px;margin:1vh;background-color:mediumseagreen;">
            <div class ="top">
            <button type="button" data-id="" class="close" id=""aria-label="Close">
            <span aria-hidden="true" data-id="${tasksData[i].id}" id="span${tasksData[i].id}">&times;</span> </button>
            </div>

            <h6 class="card-title" id="projectID" data-projectId="${tasksData[i].project_id}" style="margin-top:;">${tasksData[i].task_name}</h6>
            <p class="text-muted" style="font-size:.7em;">Task Started by <strong>${tasksData[i].member_name}</strong></p>
            <button id="icebox${tasksData[i].id}" class="btn btn-outline-primary my-2 my-sm-0" data-icebox="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small class="text-muted" data-icebox="${tasksData[i].id}">IceBox</small></button>
            <button id="done${tasksData[i].id}"class="btn btn-outline-primary my-2 my-sm-0" data-done="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small class="text-muted" data-done="${tasksData[i].id}">Done</small></button>
            </div>
            `)
      }
    }
    if (tasksData[i].icebox === true) {
      $('.icebox').append(`
            <div class="card-block" id="card${tasksData[i].project_id}" style="height: auto ;border: solid 1px;margin:1vh;">
            <div class ="top">
            <button type="button" data-id="" class="close" id=""aria-label="Close">
            <span aria-hidden="true" data-id="${tasksData[i].id}" id="span${tasksData[i].id}">&times;</span> </button>
            </div>
            <h6 class="card-title" style="margin-top:2vh;" id="projectID" data-projectId="${tasksData[i].project_id}">${tasksData[i].task_name}</h6>
            <button id="todo${tasksData[i].id}" class="btn btn-outline-primary my-2 my-sm-0" data-todo="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small data-todo="${tasksData[i].id}" class="text-muted" >Todo</small></button>
            <button id="done${tasksData[i].id}" class="btn btn-outline-primary my-2 my-sm-0" data-done="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small data-done="${tasksData[i].id}" class="text-muted" >Done</small></button>
            </div>
            `)
    }
    if (tasksData[i].finished === true) {
      $('.done').append(`
        <div class="card-block" id="card${tasksData[i].project_id}" style="height: auto ;border: solid 1px;margin:1vh;">
        <div class ="top">
        <button type="button" data-id="" class="close" id=""aria-label="Close">
        <span aria-hidden="true" data-id="${tasksData[i].id}" id="span${tasksData[i].id}">&times;</span> </button>
        </div>
        <h6 class="card-title" style="margin-top:-2vh;" id="projectID" data-projectId="${tasksData[i].project_id}">${tasksData[i].task_name}</h6>
        <button id="todo${tasksData[i].id}" class="btn btn-outline-primary my-2 my-sm-0" data-todo="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small data-todo="${tasksData[i].id}" class="text-muted" >Todo</small></button>
        <button id="icebox${tasksData[i].id}" class="btn btn-outline-primary my-2 my-sm-0" data-icebox="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small data-icebox="${tasksData[i].id}" class="text-muted" >IceBox</small></button>
        </div>
        `)
    }
  }
  $('button').click(function(event) {
    const todo = $(event.target).attr('data-todo')
    let todoNew = {
      "todo": true,
      "inprogress": false,
      "finished": false,
      "icebox": false
    }
    if (todo != null) {
      $.ajax({
        url: url + `tasks/` + todo,
        type: 'PUT',
        data: todoNew,
        success: function(result) {
          window.location.reload();
        }
      })
    }
  })

  $('button').click(function(event) {
    const icebox = $(event.target).attr('data-icebox')
    let iceNew = {
      "todo": false,
      "inprogress": false,
      "finished": false,
      "icebox": true
    }
    if (icebox != null) {
      $.ajax({
        url: url + `tasks/` + icebox,
        type: 'PUT',
        data: iceNew,
        success: function(result) {
          window.location.reload();
        }
      })
    }
  })

  $('button').click(function(event) {
    const done = $(event.target).attr('data-done')
    const doneNew = {
      "todo": false,
      "inprogress": false,
      "finished": true,
      "icebox": false
    }
    if (done != null) {
      $.ajax({
        url: url + `tasks/` + done,
        type: 'PUT',
        data: doneNew,
        success: function(result) {
          window.location.reload();
        }
      })
  }
})

  $('button').click(function(event) {
    event.preventDefault()
    let progress = $(event.target).attr('data-inprogress')
    let progressNew = {
      "todo": true,
      "inprogress": true,
      "finished": false,
      "icebox": false,
      "member_id": tokenId
    }
    if (progress != null) {
      $.ajax({
        url: url + `tasks/` + progress,
        type: 'PUT',
        data: JSON.stringify(progressNew),
        contentType: "application/json",
        success: function(result) {
          window.location.reload();
        }
      })
    }
  })
}
function parseJwt (token) {
            let base64Url = token.split('.')[1];
            let base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        };
const token = localStorage.getItem('token')
const tokenParsed = parseJwt(token)
const tokenId = tokenParsed.id
