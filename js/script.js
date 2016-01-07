

$(document).ready(function(){
	
    showGrid(16) //to create a default 16x16 sketch pad
	hoverEffect()
$('#clearBtn').click(function() {
	buttonClear();
    });

$('#newBtn').click(function() {
	var size = prompt("how many square grids would you like?");
	showGrid(size);
	// newGrid();
	hoverEffect()
    });

});

//creates a grid
function showGrid(size){

	$("div.rows").remove(); 	//removes all rows created previously


	var rowsHeight = $('.container').height()/size;
	var rowsWidth = $('.container').width();

	//loops to create  rows
	for(i=0; i <size; i++){
		$("<div class='rows'></div>").appendTo(".container").height(rowsHeight).width(rowsWidth);
	}
	//creating squares
	for(j=0; j<size; j++){
		$("<div class='elements'></div>").appendTo(".rows")
	}

	//assign elements height and width
	$('.elements').width(rowsHeight-2);
	$('.elements').height((rowsWidth/size)-2);
}

function hoverEffect(){
	//changes color of each small square
	//credits to https://github.com/tu98
	$(".elements").hover(function() {
			$(this).css('background-color', 'rgb('+(Math.floor(Math.random() *256))+','
			+(Math.floor(Math.random() *256))+','+(Math.floor(Math.random() *256))+')');
		}
		
)};

//changes the color of all the squares to black (default)
function buttonClear(){
	$(".elements").css("background","white");
}

//creates a new grid calling the same showGrid function
function newGrid(){
	var gridNo = prompt("")
	buttonClear();
	$(".elements").remove();
	showGrid(gridNo);
	
}