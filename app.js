$(document).ready(() => {})
const url = 'http://localhost:8080/'
// const url = 'https://still-bayou-84038.herokuapp.com/'

getProjects()

$(`#home`).click(function() {
  $('.projects').remove()
  getProjects()
}) 

$(`.littleMain`).click(function(event) {
  const targetOfClick = $(event.target).attr('data-project')
  localStorage.project = targetOfClick
  window.location.replace('taskPage.html')
})

function getTasks(project) {
  $.get(url + project, function(tasksData) {
    addTasks(tasksData)
  })
}

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
