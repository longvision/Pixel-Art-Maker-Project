// Select color input


// Select size input

// When size is submitted by the user, call makeGrid()


const rows = $('#input_width');
const columns = $('#input_height');




function makeGrid() {
  let wid = rows.val();
  let hei = columns.val();
  $('#pixel_canvas').empty();
      for(let y=0;y < wid;y++){
        $('#pixel_canvas').append('<tr></tr>');
        for(let i=0;i<hei;i++){
        $('tr').last().append('<td class="cells"></td>');
        }
    }
}

$('#sizePicker').submit(function(event){
  event.preventDefault();
  makeGrid();

});


$("#pixel_canvas").mousedown(function() {
  if (true){
    $('tr').css("background-color", "black");
  }
});

$("#pixel_canvas").mousedown(function() {
  if ($('tr').empty():true) {
    $('tr').empty();
  }
  });
