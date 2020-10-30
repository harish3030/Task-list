$('#btnAddTask').click(()=>{
  let newTask={
      name:$('#inpTaskName').val(),
      desc:$('#inpTaskDes').val()
  }
  $.post('/tasks',newTask,(data)=>{
    refreshTasks()

  })
})
function refreshTasks(){
    $('#taskList').empty()
    $.get('/tasks',(data)=>{
        data.forEach((task)=> {
            $('#taskList').append(
                $('<li></li>')
                .append($(`<div> <b> ${task.name}</b></div>`))
                .append($(`<div><small> ${task.description}</small></div>`))

                )
            
        })
    })
}
refreshTasks()