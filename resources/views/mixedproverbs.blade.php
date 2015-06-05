@extends('layout.default')

@section('title')
{{ $title }}
@stop

@section('content')



<style>
.result {
	font-size: large ;
}
</style>
<div align="center"> <h1> Mixed Sayings </h1></div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div class="row">
	<div class="col-md-4">

		<div align="center" > 
			<div ><span style="font-weight:bold;" id="SA1A"> Saying one part A</span><span id="SA1B">, Saying one part B </span></div>
			<div><b>+</b></div>
			<div> <span style="font-weight:bold;" id="SA2A"> Saying two part A</span><span  id="SA2B">, Saying two part B </span></div>
			<div><b>=</b></div>
			<div class="result" id="mixedA" class="clip_button" data-clipboard-text="Copy Me!" data-first-id="" data-second-id=""> Saying one part A + Saying two part A </div>



		 </div>
		 <div>&nbsp;</div>
		 <div align="center">

		 	<input id="clickMe" class="btn btn-primary" type="button" value="Mix it up!" onclick="getProverb('a');" >
		 	<input id="YES" class="btn btn-success" type="button" value="Switch!" onclick="swap('a');" >

		 	
		</div>
	</div>
	<div class="col-md-4">
		<div align="center" > 
			<div ><span style="font-weight:bold;" id="S1A"> Saying one part A</span><span id="S1B">, Saying one part B </span></div>
			<div>+</div>
			<div> <span  id="S2A"> Saying two part A, </span><span style="font-weight:bold;" id="S2B"> Saying two part B </span></div>
			<div>=</div>
			<div class="result" id="mixedPrime" data-first-id="" data-second-id=""> Saying one part A + Saying two part B</div>



		 </div>
		 <div>&nbsp;</div>
		 <div align="center">

		 	<input id="clickMe" class="btn btn-primary" type="button" value="Mix it up!" onclick="getProverb('prime');" >
		 	<input id="YES"  class="btn btn-success" type="button" value="Switch!" onclick="swap('prime');" >
		 	
		</div>
	</div>
	<div class="col-md-4">
		<div align="center" > 
			<div ><span id="SB1A"> Saying one part A, </span><span style="font-weight:bold;" id="SB1B"> Saying one part B </span></div>
			<div>+</div>
			<div> <span id="SB2A"> Saying two part A, </span><span style="font-weight:bold;" id="SB2B"> Saying two part B </span></div>
			<div>=</div>
			<div class="result" id="mixedB" data-first-id="" data-second-id=""> Saying one part B + Saying two part B </div>



		 </div>
		 <div>&nbsp;</div>
		 <div align="center">

		 	<input id="clickMe" class="btn btn-primary" type="button" value="Mix it up!" onclick="getProverb('b');" >
		 	<input id="YES" class="btn btn-success" type="button" value="Switch!" onclick="swap('b');" >
		 	
		</div>
	</div>
	<div>&nbsp;</div>
	<div align="center"> Click 'Mix It Up!' to mash up something.<br>
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
			 	


			 	$("#S1A").html(data[0]["partA"] + " ");
			 	$("#S1B").html(data[0]["partB"]);
			 	$("#S2A").html(data[1]["partA"] + " ");
			 	$("#S2B").html(data[1]["partB"]);


				$("#mixedPrime").html(data[0]["partA"] + " " + data[1]["partB"]);
				break;
			case "a":
				$("#mixedA").attr("data-first-id", data[0]["id"]);
			 	$("#mixedA").attr("data-second-id", data[1]["id"]);
			 	


			 	$("#SA1A").html(data[0]["partA"] + " ");
			 	$("#SA1B").html(data[0]["partB"]);
			 	$("#SA2A").html(data[1]["partA"] + " ");
			 	$("#SA2B").html(data[1]["partB"]);

				$("#mixedA").html(data[0]["partA"] + " " + data[1]["partA"]);
				break;
			case "b":
				$("#mixedB").attr("data-first-id", data[0]["id"]);
			 	$("#mixedB").attr("data-second-id", data[1]["id"]);
			 	


			 	$("#SB1A").html(data[0]["partA"] + " ") ;
			 	$("#SB1B").html(data[0]["partB"]);
			 	$("#SB2A").html(data[1]["partA"] + " ");
			 	$("#SB2B").html(data[1]["partB"]);

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



			if (a || b) {
				$.get("/api/v1/proverb/"+ b + "/" + a , function (data) {

					if(data[0] || data[0]) {

					 	$("#mixedPrime").attr("data-first-id", data[0]["id"]);
					 	$("#mixedPrime").attr("data-second-id", data[1]["id"]);
					 	
					 	$("#S1A").html(data[0]["partA"] + " ");
					 	$("#S1B").html(data[0]["partB"]);
					 	$("#S2A").html(data[1]["partA"] + " ");
					 	$("#S2B").html(data[1]["partB"]);

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



			if (a || b) {
				$.get("/api/v1/proverb/"+ b + "/" + a , function (data) {

					if(data[0] || data[0]) {

					 	$("#mixedA").attr("data-first-id", data[0]["id"]);
					 	$("#mixedA").attr("data-second-id", data[1]["id"]);
					 	
					 	$("#SA1A").html(data[0]["partA"] + " ");
					 	$("#SA1B").html(data[0]["partB"]);
					 	$("#SA2A").html(data[1]["partA"] + " ");
					 	$("#SA2B").html(data[1]["partB"]);

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



			if (a || b) {
				$.get("/api/v1/proverb/"+ b + "/" + a , function (data) {

					if(data[0] || data[0]) {

					 	$("#mixedB").attr("data-first-id", data[0]["id"]);
					 	$("#mixedB").attr("data-second-id", data[1]["id"]);
					 	
					 	$("#SB1A").html(data[0]["partA"] + " ");
					 	$("#SB1B").html(data[0]["partB"]);
					 	$("#SB2A").html(data[1]["partA"] + " ");
					 	$("#SB2B").html(data[1]["partB"]);

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


}

</script>


@stop