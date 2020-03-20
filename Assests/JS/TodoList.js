//checked li greyed and checked out
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
//     //if li is grey
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//          //turn it black
//          $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     //else 
//     else{
//         //turn it grey
//         $(this).css({
//             color: "grey",
//             textDecoration: "line-through"
//         });
//     }
});

//click on X to delete a To-Do 
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){  //.parent to retrieve the li that's enclosing the span clicked on
        $(this).remove();
    });
    event.stopPropagation(); //stops bubbling up effect to other elements
});

//creating new to-dos
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        //grabbing new todo from input
        var todoText = $(this).val();
        //clearing up the input
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

$("#toggle").click(function(){
    $("input[type='text']").fadeToggle();
});
