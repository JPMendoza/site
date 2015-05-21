<!--<html>
	<head>
		
		
		<link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>


	</head>

	<body>
		<div class="container">
			
		</div>
		<div class="container">
			<div class="content">
				<div class="title">Jorge P. Mendoza</div>
				<div class="quote">Spending more time on my website</div>
			</div>
		</div>
	</body>
</html>
-->

@extends('layout.default')

@section('title', 'Page Title')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@stop

@section('content')
    <p>This is my body content.</p>
@stop