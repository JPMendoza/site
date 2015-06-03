@extends('layout.default')

@section('title')
{{ $title }}
@stop

@section('content')
<div align="center"> <h1> Mixed Proverbs </h1></div>
<div id="mixed" align="center"> 
Click the button for new proverbs!
 </div>
 <div>&nbsp;</div>
 <div align="center">

 	<input id="clickMe" type="button" value="Mix it up!" onclick="getProverb();" >
 	
</div>
<div>&nbsp;</div>


<script>
function getProverb() {
	 $.get("/api/v1/proverb", function (data) {
		$("#mixed").html(data);
	});
}
</script>

@stop