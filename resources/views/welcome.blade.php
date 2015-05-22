@extends('layout.landing')

@section('title')
{{ $title }}
@stop

@section('content')
		<link rel="stylesheet" href="site/public/css/normalize.css">
        <link rel="stylesheet" href="site/public/css/main.css">
        <script src="site/public/js/modernizr-2.7.1.min.js"></script>
		<div id="preload">
	       	<img src="site/public/img/bcg_slide-1.jpg">
	       	<img src="site/public/img/bcg_slide-2.jpg">
	       	<img src="site/public/img/bcg_slide-3.jpg">
	       	<img src="site/public/img/masseffectjorge.jpg">
       	</div>
       	
       	<main>
       	 
	        <section id="slide-1" class="homeSlide">
	        	<div class="bcg">
		        	<div class="hsContainer">
			    		<div class="hsContent">
				    		<h2>My name is Jorge P. Mendoza</h2>
			    		</div>
		        	</div>
	        	</div>
		    </section>
		    
		    <section id="slide-2" class="homeSlide">
		    	<div class="bcg">
			    	<div class="hsContainer">
			    		<div class="hsContent">
				    		<h2>I am from San Francisco.</h2>
			    		</div>
		        	</div>
		    	</div>
		    </section>
		    
			<section id="slide-3" class="homeSlide">
				<div class="bcg">
			    	<div class="hsContainer">
		    			<div class="hsContent">
				    		<h2>Welcome to my website!</h2>
			    		</div>
			    	</div>
			    	
			    </div>
			</section>
			
			<section id="slide-4" class="homeSlide">
				<div class="bcg">
			    	<div class="hsContainer">
		    			<div class="hsContent">
				    		<h2>This is me.</h2>
			    		</div>
			    	</div>
			    	
			    </div>
			</section>
		    
		</main>
    <script src="site/public/js/imagesloaded.js"></script>
    <script src="site/public/js/skrollr.js"></script>
    <script src="site/public/js/_main.js"></script>
@stop