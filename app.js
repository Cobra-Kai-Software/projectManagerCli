$(document).ready(() => {
})
const url = 'http://localhost:8080/'
  getProjects()
$(`#home`).click(function() {
  $('.projects').remove()
  getProjects()
})

$(`.littleMain`).click(function(event) {
  const targetOfClick = $(event.target).attr('data-project')
  getTasks(targetOfClick)
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
      console.log('bye');
    }
  })
})
