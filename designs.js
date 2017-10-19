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
        $('<tr>').last().append('<td></td>');
        }
    }
}

$('#sizePicker').submit(function(event){
  event.preventDefault();
  makeGrid();

});
