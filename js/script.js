

$(document).ready(function(){
	
    showGrid(16) //to create a default 16x16 sketch pad
	hoverEffect()
$('#clearBtn').click(function() {
	buttonClear();
    });

$('#newBtn').click(function() {
	newGrid();
	hoverEffect()
    });

});

//creates a grid
function showGrid(size){
	//removes all elements created previously
	$('.elements').remove();
	var box = (640/size)-2;
	//loops to create  reccuring elements
	for (i = 0; i < size; i++) {
		for(j=0; j < size; j++){
			$("<div class='elements'></div>").appendTo(".container");
			}
    }
    //adjust the size of squares according to the input value
    	$("div").find('.elements').css({'width': box+"px", 'height': box + "px"});

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
		$(".elements").css("background","black");
   
}

//creates a new grid calling the same showGrid function
function newGrid(){
	var gridNo = prompt("how many square grids would you like?")
	buttonClear();
	showGrid(gridNo);
}