@extends('layout.default')

@section('title')
{{ $title }}
@stop

@section('content')


<style>

	body {
		font-size: 20px;
		font-weight: 350;
	}
	.titles {
		margin-left: 10px;
		margin-top: 5px;
		margin-bottom: 5px

	}
</style>


<div class="container">
	<div  align="center"> <h1> Projects </h1></div>
	<div style="background-color: #D3D3D3; text-align:center;" class="row">
		<div class="col-md-12 titles">
			<b>Games</b>
		</div>
	</div>
	<div class="row">
		<div align="center" class=" container col-xs-4">
			<a href="{{ asset('/site/public/projects/alienabduction/alienabduction.html') }}" >Alien Abduction</a><br>
			*Chrome doesn't support unity anymore
		</div>
		<div align="center" class="container col-md-4">
			<a href="{{ asset('/site/public/projects/heart4u/heart4u.html') }}" >Heart4u</a>

		</div>
		<div align="center" class="container col-md-4">
			<a href="{{ asset('/site/public/projects/cubeclicker/cubeclicker.html') }}" >CubeClicker</a>
		</div>
	</div>

</div>


@stop