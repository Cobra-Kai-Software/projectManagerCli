function getProjects() {
  $('.tasks').css('display', 'none');
  $('.littleMain').append(
    `<section class="projects">
    </section>`
  )
  $.get(url, function(projectData) {
    for (var i = 0; i < projectData.length; i++) {
      $('.projects').append(
        `<div class="card card-outline-danger mb-3 text-center" data-project="${projectData[i].id} id="card${projectData[i].id}">
      <div class="card-block" style="height: 8vh; display:flex; justify-content: center;align-items:center;">
        <button class="btn btn-outline-danger my-2 my-sm-0" data-project="${projectData[i].id}" type="submit" style="width: 32vw; height:6vh;">${projectData[i].name}</button>
      </div>`
      )
    }
  })
}
function addPost(){
  $('.littleMain').append(`
    <div class="add">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Task</button><br>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="form-control-label">Task Name:</label>
            <input type="text" class="form-control" id="task-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="form-control-label">Task Description:</label>
            <textarea class="form-control" id="description-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button id="postButton" type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
    </div>
    `
  )
}



function addTasks(tasksData) {
  $('.projects').css('display', 'none');
  addPost()
  $('.littleMain').append(`<section class="tasks">
    <div class="todo" id="projectID" data-projectId="${tasksData[0].project_id}">

    </div>
    <div class="icebox">

    </div>
    <div class="done">

    </div>
  </section>`)

  for (var i = 0; i < tasksData.length; i++) {
    if (tasksData[i].todo === true) {
      $('.todo').append(`
        <div class="card-block" id="card${tasksData[i].id}" style="height: auto;border: solid 1px;margin:1vh;">
        <div class ="top">
        <button type="button" data-id="" class="close" id=""aria-label="Close">
        <span aria-hidden="true" data-id="${tasksData[i].id}" id="span${tasksData[i].id}">&times;</span> </button>
        </div>
        <h6 class="card-title" id="projectID" data-projectId="${tasksData[i].project_id}" style="margin-top:-2vh;">${tasksData[i].task_name}</h6>
        <p class="card-text"style="margin-top:-2vh;margin-bottom: ;"><small class="text-muted">${tasksData[i].description}</p></small></p>
        <button id="icebox${tasksData[i].id}" class="btn btn-outline-primary my-2 my-sm-0" data-icebox="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small class="text-muted" data-icebox="${tasksData[i].id}">IceBox</small></button>
        <button id="done${tasksData[i].id}"class="btn btn-outline-primary my-2 my-sm-0" data-done="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small class="text-muted" data-done="${tasksData[i].id}">Done</small></button>
        </div>
        `)
    }
    if (tasksData[i].icebox === true) {
      $('.icebox').append(`
        <div class="card-block" id="card${tasksData[i].id}" style="height: auto ;border: solid 1px;margin:1vh;">
        <div class ="top">
        <button type="button" data-id="" class="close" id=""aria-label="Close">
        <span aria-hidden="true" data-id="${tasksData[i].id}" id="span${tasksData[i].id}">&times;</span> </button>
        </div>
        <h6 class="card-title" id="projectID" data-projectId="${tasksData[i].project_id}" style="margin-top:-2vh;">${tasksData[i].task_name}</h6>
        <p class="card-text"style="margin-top:-2vh;margin-bottom: ;"><small class="text-muted">${tasksData[i].description}</p></small></p>
        <button id="todo${tasksData[i].id}" class="btn btn-outline-primary my-2 my-sm-0" data-todo="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small data-todo="${tasksData[i].id}" class="text-muted">Todo</small></button>
        <button id="done${tasksData[i].id}" class="btn btn-outline-primary my-2 my-sm-0" data-done="${tasksData[i].id}" type="submit" style="height: 5vh; width:7vw;"><small data-done="${tasksData[i].id}" class="text-muted">Done</small></button>
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
        <p class="card-text"style="margin-top:-2vh;margin-bottom: ;"><small class="text-muted">${tasksData[i].description}</p></small></p>
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
    $.ajax({
      url: url + `tasks/` + todo,
      type: 'PUT',
      data: todoNew,
      success: function(result) {
        }
    })
  })

  $('button').click(function(event) {
    const icebox = $(event.target).attr('data-icebox')
    console.log(icebox);
    let iceNew = {
      "todo": false,
      "inprogress": false,
      "finished": false,
      "icebox": true
    }
     $.ajax({
      url: url + `tasks/` + icebox,
      type: 'PUT',
      data: iceNew,
      success: function(result) {
        }
      })
  })

  $('button').click(function(event) {
    const done = $(event.target).attr('data-done')
    console.log(done);
    const doneNew = {
      "todo": false,
      "inprogress": false,
      "finished": true,
      "icebox": false
    }
    $.ajax({
      url: url + `tasks/` + done,
      type: 'PUT',
      data: doneNew,
      success: function(result) {
      }
    })
  })
  $('#postButton').click(function(event) {
    const newTaskProject = $('#projectID').attr('data-projectId')
    const newTaskName = $('#task-name').val()
    const newTaskDescription = $('#description-text').val()
    const newTask = {
      "name": newTaskName,
      "description": newTaskDescription,
      "todo": true,
      "inprogress": false,
      "finished": false,
      "icebox": false,
      "project_id": newTaskProject
    }
    console.log(newTaskProject);
    $.ajax({
      url: url + newTaskProject,
      type: 'POST',
      data: newTask,
      success: function(result) {
        }
    })
  })
}
