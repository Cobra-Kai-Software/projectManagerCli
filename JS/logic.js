// const url = 'http://localhost:8080/'
const url = 'https://still-bayou-84038.herokuapp.com/'

function getProjects() {
  $('.tasks').css('display', 'none');
  $.get(url, function(projectData) {
    for (var i = 0; i < projectData.length; i++) {
      $('.projects').append(
        `<div class="card card-outline-primary mb-3 text-center" id="card${projectData[i].id}">
      <div class="card-block" style="height: 8vh; display:flex; justify-content: center;align-items:center;">
        <button class="btn btn-primary my-2 my-sm-0" data-project="${projectData[i].id}" type="submit" style="width: 32vw; height:6vh;">${projectData[i].name}</button>
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
            </div>
            <br>
            <h6 class="card-title" id="projectID" data-projectId="${tasksData[i].project_id}" style="font-size="1.2em;">${tasksData[i].task_name}</h6>
            </div>
            `)
          } else {
            $('.todo').append(`
                <div class="card-block" id="card${tasksData[i].id}" style="height: auto;border: solid 1px;margin:1vh;background-color:mediumseagreen;">
                <div class ="top">
                </div>
                <h6 class="card-title" id="projectID" data-projectId="${tasksData[i].project_id}" style="margin-top:;">${tasksData[i].task_name}</h6>
                <p class="text-muted" style="font-size:.7em;">Task Started by <strong>${tasksData[i].member_name}</strong></p>
                </div>
                `)
          }
    }
    if (tasksData[i].icebox === true) {
      $('.icebox').append(`
        <div class="card-block" id="card${tasksData[i].project_id}" style="height: auto ;border: solid 1px;margin:1vh;">
              <div class ="top">
              </div>
              <h6 class="card-title" style="margin-top:-2vh;" id="projectID" data-projectId="${tasksData[i].project_id}">${tasksData[i].task_name}</h6>
              </div>
        `)
    }
    if (tasksData[i].finished === true) {
      $('.done').append(`
        <div class="card-block" id="card${tasksData[i].project_id}" style="height: auto ;border: solid 1px;margin:1vh;">
        <div class ="top">
        </div>
        <div class="card-group">
        <h6 class="card-title" style="margin-top:-2vh;" id="projectID" data-projectId="${tasksData[i].project_id}">${tasksData[i].task_name}</h6>
        </div>
        `)
    }
  }

}
