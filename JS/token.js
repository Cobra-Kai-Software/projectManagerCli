$(document).ready(() => {})
const url = 'http://localhost:8080/'
// const url = 'https://still-bayou-84038.herokuapp.com/'
if (localStorage.getItem('token') === null){
    window.location.replace('../index.html')
}
getProjects()

$(`#home`).click(function() {
  window.location.replace('../HTML/tokenProjects.html')
})

$(`.littleMain`).click(function(event) {
  const targetOfClick = $(event.target).attr('data-project')
  if (targetOfClick >= 1){
  localStorage.project = targetOfClick
  window.location.replace('../HTML/tokenTasks.html')
}
})

$('.littleMain').click(function(event){
  event.preventDefault()
  let projectDestroy = $(event.target).attr('data-projectDelete')
  $.ajax({
    url: url + projectDestroy,
    type: 'DELETE',
    success: function(result) {
      console.log(result);
        window.location.reload();
    }
  })
})

function getTasks(project) {
  $.get(url + project, function(tasksData) {
    addTasks(tasksData)
  })
}

$('#logout').click(function(){
  event.preventDefault()
  localStorage.removeItem('token')
  window.location.replace('../index.html')
})

$('#addProject').click(function(event) {
  const newProjectName = $('#project-name').val()
  const newProject = {
    "name": newProjectName,
  }
  console.log(newProject);
  $.ajax({
    url: url,
    type: 'POST',
    data: newProject,
    success: function(result) {
      window.location.reload();
    }
  })
})
