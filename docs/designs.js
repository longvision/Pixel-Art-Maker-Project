// Select size input
$('#sizePicker').submit(function(event){
  event.preventDefault();
  makeGrid();
});
// When size is submitted by the user, call makeGrid()
const rows = $('#input_width');
const columns = $('#input_height');

function makeGrid() {
  let width = columns.val();
  let heigth = rows.val();
  $('#pixel_canvas').empty();
    for(let y=0;y < width;y++){
      $('#pixel_canvas').append('<tr></tr>');
        for(let i=0;i<heigth;i++){
          $('tr').last().append('<td></td>');
      }
    }
}
//reset the grid
$('#reset_grid').click(function(){
  $('td').css('background-color', '');
});

//When mouse is pressed
let mousePressed;

$('#pixel_canvas').mousedown(function(){
    mousePressed = true;
});

$('#pixel_canvas').mouseup(function(){
    mousePressed = false;
});

//paint on hover
$('#pixel_canvas').on('mouseover','td',function(){
  let colorSelected = $('#colorPicker').val();
    if(mousePressed){
      $(this).css('background-color',colorSelected);
      $('#pixel_canvas').css('cursor','default');
    }
    //paint on click.
    else{
      $('#pixel_canvas').on('click','td', function(){
        $(this).css('background-color', colorSelected);
      });
    }
});
