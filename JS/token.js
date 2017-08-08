$(document).ready(() => {})

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
  $(`.card${projectDestroy}`).fadeOut()
  if (destroy != null){
    $.ajax({
    url: url + destroy,
    type: 'DELETE',
    success: function(result) {
    }
  })}
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
  $.ajax({
    url: url,
    type: 'POST',
    data: newProject,
    success: function(result) {
      window.location.reload();
    }
  })
})
