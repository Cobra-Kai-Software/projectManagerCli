function getProjects() {
  $('.tasks').css('display', 'none');
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

function addTasks(tasksData) {
  for (var i = 0; i < tasksData.length; i++) {
    if (tasksData[i].todo === true) {
      $('.todo').append(`
      <div class="card-block" id="card${tasksData[i].project_id}" style="height: auto ;border: solid 1px;margin:1vh;">
            <div class ="top">
            </div>
            <h6 class="card-title" style="margin-top:-2vh;" id="projectID" data-projectId="${tasksData[i].project_id}">${tasksData[i].task_name}</h6>
            <p class="card-text"style="margin-top:-2vh;margin-bottom: ;"><small class="text-muted">${tasksData[i].description}</p></small></p>
            </div>
        `)
  }
  if (tasksData[i].icebox === true) {
    $('.icebox').append(`
        <div class="card-block" id="card${tasksData[i].project_id}" style="height: auto ;border: solid 1px;margin:1vh;">
              <div class ="top">
              </div>
              <h6 class="card-title" style="margin-top:-2vh;" id="projectID" data-projectId="${tasksData[i].project_id}">${tasksData[i].task_name}</h6>
              <p class="card-text"style="margin-top:-2vh;margin-bottom: ;"><small class="text-muted">${tasksData[i].description}</p></small></p>
              </div>
        `)
  }
  if (tasksData[i].finished === true) {
    $('.done').append(`
        <div class="card-block" id="card${tasksData[i].project_id}" style="height: auto ;border: solid 1px;margin:1vh;">
        <div class ="top">
        </div>
        <h6 class="card-title" style="margin-top:-2vh;" id="projectID" data-projectId="${tasksData[i].project_id}">${tasksData[i].task_name}</h6>
        <p class="card-text"style="margin-top:-2vh;margin-bottom: ;"><small class="text-muted">${tasksData[i].description}</p></small></p>
        </div>
        `)
  }
}

}
