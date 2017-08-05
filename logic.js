function addTasks(tasksData){
$('.projects').css('display', 'none');
// $('.littleMain').remove()
$('.littleMain').append(`<section class="tasks">
    <div class="todo">

    </div>
    <div class="icebox">

    </div>
    <div class="done">

    </div>
  </section>`)
  for (var i = 0; i < tasksData.length; i++) {
    if (tasksData[i].todo === true){
      $('.todo').append(`
        <div class="card-block" id="card${tasksData[i].id}" style="height: auto;border: solid 1px;margin:1vh;">
        <div class ="top">
        <button type="button" data-id="" class="close" id=""aria-label="Close">
        <span aria-hidden="true" data-id="${tasksData[i].id}" id="span${tasksData[i].id}">&times;</span> </button>
        </div>
        <h6 class="card-title" style="margin-top:-2vh;"> ${tasksData[i].task_name} </h6>
        <p class="card-text"style="margin-top:vh;"><small class="text-muted">${tasksData[i].description}</p></small></p><br><br>
        <p class="card-text"style="margin-bottom:-4vh;margin-top: -2vh;"><small class="text-muted">Task ID: ${tasksData[i].id}</p></small></p>
        </div>
        `)
    }
    if (tasksData[i].icebox === true){
      $('.icebox').append(`
        <div class="card-block" id="card${tasksData[i].id}" style="height: auto ;border: solid 1px;margin:1vh;">
        <div class ="top">
        <button type="button" data-id="" class="close" id=""aria-label="Close">
        <span aria-hidden="true" data-id="${tasksData[i].id}" id="span${tasksData[i].id}">&times;</span> </button>
        </div>
        <h6 class="card-title" style="margin-top:-2vh;">${tasksData[i].task_name}</h6>
        <p class="card-text"style="margin-top:-2vh;"><small class="text-muted">${tasksData[i].description}</p></small></p><br><br>
        <p class="card-text"style="margin-bottom:-4vh;margin-top: -2vh;"><small class="text-muted">Task ID: ${tasksData[i].id}</p></small></p>
        </div>
        `)
    }
    if (tasksData[i].finished === true){
      $('.done').append(`
        <div class="card-block" id="card${tasksData[i].id}" style="height: auto ;border: solid 1px;margin:1vh;">
        <div class ="top">
        <button type="button" data-id="" class="close" id=""aria-label="Close">
        <span aria-hidden="true" data-id="${tasksData[i].id}" id="span${tasksData[i].id}">&times;</span> </button>
        </div>
        <h6 class="card-title" style="margin-top:-2vh;">${tasksData[i].task_name}</h6>
        <p class="card-text"style="margin-top:-2vh;"><small class="text-muted">${tasksData[i].description}</p></small></p><br><br>
        <p class="card-text"style="margin-bottom:-4vh;margin-top: -2vh;"><small class="text-muted">Task ID: ${tasksData[i].id}</p></small></p>
        </div>
        `)
    }
  }
}

function getProjects(){
  $('.tasks').css('display', 'none');
  $('.littleMain').append(
    `<section class="projects">
    </section>`
  )
  $.get(url, function(projectData){
    for (var i = 0; i < projectData.length; i++) {
  $('.projects').append(
      `<div class="card card-outline-danger mb-3 text-center" data-project="${projectData[i].id} id="card${projectData[i].id}">
      <div class="card-block" style="height: 8vh; display:flex; justify-content: center;align-items:center;">
        <button class="btn btn-outline-danger my-2 my-sm-0" data-project="${projectData[i].id}" type="submit" style="width: 32vw; height:6vh;">${projectData[i].name}</button>
      </div>`
)}
})
}
