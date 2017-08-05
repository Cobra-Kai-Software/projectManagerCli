$(document).ready(() => {
  getProjects()
})
const url = 'http://localhost:8080/'

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

// $('.littleMain').click(function(event) {
//   const destroy = $(event.target).attr('data-id')
//   $(`#card${destroy}`).remove()
//   $.ajax({
//     url: url + `tasks/` + destroy,
//     type: 'DELETE',
//     success: function(result) {
//       console.log('bye');
//     }
//   })
// })

$('.littleMain').click(function(event) {
  const todo = $(event.target).attr('data-todo')
  console.log(todo)
  let todoNew = {
    "todo": true,
    "inprogress": false,
    "finished": false,
    "icebox": false
  }
  $(`#card${todo}`).remove()
  $.ajax({
    url: url + `tasks/` + todo,
    type: 'PUT',
    data: todoNew,
    success: function(result) {
        addTasks()
      }
  })
})

$('.littleMain').click(function(event) {
  const icebox = $(event.target).attr('data-icebox')
  console.log(icebox);
  let iceNew = {
    "todo": false,
    "inprogress": false,
    "finished": false,
    "icebox": true
  }
  $(`#card${icebox}`).remove()
  $.ajax({
    url: url + `tasks/` + icebox,
    type: 'PUT',
    data: iceNew,
    success: function(result) {
      console.log(result);
        addTasks()
      }
    })
  })


$('.littleMain').click(function(event) {
  const done = $(event.target).attr('data-done')
  console.log(done);
  const doneNew = {
    "todo": false,
    "inprogress": false,
    "finished": true,
    "icebox": false
  }
  $.ajax({
    url: url + `tasks/` + done,
    type: 'PUT',
    data: doneNew,
    success: function(result) {
      console.log(result);
      $(`#card${done}`).remove()
        addTasks()
      }
  })
})
