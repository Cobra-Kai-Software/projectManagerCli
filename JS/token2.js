$(document).ready(() => {})

if (localStorage.getItem('token') === null){
    window.location.replace('../HTML/taskPage.html')
}

$(`#home`).click(function() {
  window.location.replace('../HTML/tokenProjects.html')
})

function getTasks(project) {
  $.get(url + project, function(tasksData) {
    addTasks(tasksData)
  })
}
getTasks(localStorage.project)

$('.littleMain').click(function(event) {
  event.preventDefault();
  const destroy = $(event.target).attr('data-id')
  $(`#card${destroy}`).remove()
  if (destroy != null){
    $.ajax({
    url: url + 'tasks/' + destroy,
    type: 'DELETE',
    success: function(result) {
      window.location.reload();
    }
  })}
})

$('#postButton').click(function(event) {
  const newTaskProject = $('#projectID').attr('data-projectId')
  const newTaskName = $('#task-name').val()
  const newTaskDescription = $('#description-text').val()
  const newTask = {
    "name": newTaskName,
    "todo": true,
    "inprogress": false,
    "finished": false,
    "icebox": false,
    "member_id": 1,
    "project_id": localStorage.project
  }
  $.ajax({
    url: url + newTaskProject,
    type: 'POST',
    data: newTask,
    success: function(result) {
       window.location.reload();
    }
  })

})


$('#logout').click(function(){
  event.preventDefault()
  localStorage.removeItem('token')
  window.location.replace('../HTML/taskPage.html')
})
