@extends('layout.default')

@section('title')
{{ $title }}
@stop

@section('content')
<div align="center"> <h1> Mixed Proverbs </h1></div>
<div id="mixed" align="center"> 
&nbsp;
 </div>
 <div align="center">
 	<input id="clickMe" type="button" value="clickme" onclick="getProverb();" >
</div>


<script>
function getProverb() {
	 $.get("/api/v1/proverb", function (data) {
		$("#mixed").html(data);
	});
}
</script>

@stop