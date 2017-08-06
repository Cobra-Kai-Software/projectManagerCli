$(document).ready(() => {})
const url = 'http://localhost:8080/'
// const url = 'https://still-bayou-84038.herokuapp.com/'


$(`#home`).click(function() {
  window.location.replace('./index.html')
})

function getTasks(project) {
  $.get(url + project, function(tasksData) {
    addTasks(tasksData)
  })
}
getTasks(localStorage.project)

$('.littleMain').click(function(event) {
  const destroy = $(event.target).attr('data-id')
  $(`#card${destroy}`).remove()
  $.ajax({
    url: url + `tasks/` + destroy,
    type: 'DELETE',
    success: function(result) {
      window.location.reload();
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
