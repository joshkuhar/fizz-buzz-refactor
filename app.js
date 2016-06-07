/*$('div').mouseenter(function(){
  alert("Hello");
});*/

function fizzBuzz(fbNmbr) {
  if ((fbNmbr % 3 === 0) && (fbNmbr % 5 === 0)){
        return "fizz buzz";
      }
      else if (fbNmbr % 3 === 0) {
         return "fizz";
      }
      else if (fbNmbr % 5 === 0){
        return "buzz";
      }
      else {
        return fbNmbr;
      }
  }

$(".enter").click(function() {
  $(".output").empty();
	   var inputNumber = $(".text-box").val();
     var x = 1;
     while (x <= inputNumber) {
        $(".output").append("<div>"+fizzBuzz(x)+"</div>");
        x++;
      }
	$(".text-box").val("");
	console.log("check");
	});

// use enter to add list items
$('.text-box').keyup(function(e){
	if(e.keyCode == 13) {
		//event.preventDefault();
		$('.enter').click();
	};
});	

