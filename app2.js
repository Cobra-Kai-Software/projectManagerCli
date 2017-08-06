$(document).ready(() => {
})
const url = 'http://localhost:8080/'

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
      console.log('bye');
    }
  })
})
