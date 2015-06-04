@extends('layout.default')

@section('title')
{{ $title }}
@stop

@section('content')
<div align="center"> <h1> Mixed Sayings </h1></div>
<div class="row">
	<div class="col-xs-4">
		<div align="center" > 
			<div id="proverbAA"> Saying A, Part A </div>
			<div>+</div>
			<div id="proverbBA"> Saying B, Part A </div>
			<div>=</div>
			<div id="mixedA" data-first-id="" data-second-id=""> AA + BA </div>



		 </div>
		 <div>&nbsp;</div>
		 <div align="center">

		 	<input id="clickMe" type="button" value="Mix it up!" onclick="getProverb('a');" >
		 	<input id="YES" type="button" value="Switch!" onclick="swap('a');" >
		 	
		</div>
	</div>
	<div class="col-xs-4">
		<div align="center" > 
			<div id="proverbA"> Saying A, Part A </div>
			<div>+</div>
			<div id="proverbB"> Saying B, Part B </div>
			<div>=</div>
			<div id="mixedPrime" data-first-id="" data-second-id=""> AA + BB</div>



		 </div>
		 <div>&nbsp;</div>
		 <div align="center">

		 	<input id="clickMe" type="button" value="Mix it up!" onclick="getProverb('prime');" >
		 	<input id="YES" type="button" value="Switch!" onclick="swap('prime');" >
		 	
		</div>
	</div>
	<div class="col-xs-4">
		<div align="center" > 
			<div id="proverbAB"> Saying A, Part B </div>
			<div>+</div>
			<div id="proverbBB"> Saying B, Part B </div>
			<div>=</div>
			<div id="mixedB" data-first-id="" data-second-id=""> AB + BB </div>



		 </div>
		 <div>&nbsp;</div>
		 <div align="center">

		 	<input id="clickMe" type="button" value="Mix it up!" onclick="getProverb('b');" >
		 	<input id="YES" type="button" value="Switch!" onclick="swap('b');" >
		 	
		</div>
	</div>
	<div>&nbsp;</div>
	<div align="center"> Click 'Mix It Up!' to mash up something up.<br>
							 Click 'Switch!' to reverse the mash up! </div>
</div>
<div>&nbsp;</div>


<script>
function getProverb(type) {
	 $.get("/api/v1/proverb", function (data) {

	 	switch (type) {

	 		case "prime":

			 	$("#mixedPrime").attr("data-first-id", data[0]["id"]);
			 	$("#mixedPrime").attr("data-second-id", data[1]["id"]);
			 	
			 	console.log(data[1]["id"]);

			 	$("#proverbA").html(data[0]["proverb"]);
			 	$("#proverbB").html(data[1]["proverb"]);

				$("#mixedPrime").html(data[0]["partA"] + " " + data[1]["partB"]);
				break;
			case "a":
				$("#mixedA").attr("data-first-id", data[0]["id"]);
			 	$("#mixedA").attr("data-second-id", data[1]["id"]);
			 	
			 	console.log(data[1]["id"]);

			 	$("#proverbAA").html(data[0]["proverb"]);
			 	$("#proverbBA").html(data[1]["proverb"]);

				$("#mixedA").html(data[0]["partA"] + " " + data[1]["partA"]);
				break;
			case "b":
				$("#mixedB").attr("data-first-id", data[0]["id"]);
			 	$("#mixedB").attr("data-second-id", data[1]["id"]);
			 	
			 	console.log(data[1]["id"]);

			 	$("#proverbAB").html(data[0]["proverb"]);
			 	$("#proverbBB").html(data[1]["proverb"]);

				$("#mixedB").html(data[0]["partB"] + " " + data[1]["partB"]);
				break;
		}
	});
}

function swap(type) {
	switch (type) {
		case "prime":
			var a = $("#mixedPrime").attr("data-first-id");
			var b = $("#mixedPrime").attr("data-second-id");

			console.log(a);

			if (a || b) {
				$.get("/api/v1/proverb/"+ b + "/" + a , function (data) {

					if(data[0] || data[0]) {

					 	$("#mixedPrime").attr("data-first-id", data[0]["id"]);
					 	$("#mixedPrime").attr("data-second-id", data[1]["id"]);
					 	
					 	$("#proverbA").html(data[0]["proverb"]);
					 	$("#proverbB").html(data[1]["proverb"]);

						$("#mixedPrime").html(data[0]["partA"] + " " + data[1]["partB"]);

					} else {
						$("#proverbA").html("You changed the HTML");
					 	$("#proverbB").html("DIDJA!? I covered my bases!");

						$("#mixedPrime").html("Primum non nocere");
					}
				});
			}
			break;
		case 'a':
			var a = $("#mixedA").attr("data-first-id");
			var b = $("#mixedA").attr("data-second-id");

			console.log(a);

			if (a || b) {
				$.get("/api/v1/proverb/"+ b + "/" + a , function (data) {

					if(data[0] || data[0]) {

					 	$("#mixedA").attr("data-first-id", data[0]["id"]);
					 	$("#mixedA").attr("data-second-id", data[1]["id"]);
					 	
					 	$("#proverbAA").html(data[0]["proverb"]);
					 	$("#proverbBA").html(data[1]["proverb"]);

						$("#mixedA").html(data[0]["partA"] + " " + data[1]["partB"]);

					} else {
						$("#proverbAA").html("You changed the HTML");
					 	$("#proverbBA").html("DIDJA!? I covered my bases!");

						$("#mixedA").html("Primum non nocere");
					}
				});
			}
			break;
		case 'b':
			var a = $("#mixedB").attr("data-first-id");
			var b = $("#mixedB").attr("data-second-id");

			console.log(a);

			if (a || b) {
				$.get("/api/v1/proverb/"+ b + "/" + a , function (data) {

					if(data[0] || data[0]) {

					 	$("#mixedB").attr("data-first-id", data[0]["id"]);
					 	$("#mixedB").attr("data-second-id", data[1]["id"]);
					 	
					 	$("#proverbAB").html(data[0]["proverb"]);
					 	$("#proverbBB").html(data[1]["proverb"]);

						$("#mixedB").html(data[0]["partA"] + " " + data[1]["partB"]);

					} else {
						$("#proverbAB").html("You changed the HTML");
					 	$("#proverbBB").html("DIDJA!? I covered my bases!");

						$("#mixedB").html("Primum non nocere");
					}
				});
			}
			break;
	}

	//console.log(a['firstId']);
}
</script>

@stop