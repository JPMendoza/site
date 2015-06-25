@extends('layout.default')

@section('title')
{{ $title }}
@stop




@section('content')

<style>
	ul {
	    margin-bottom: 0px;
	}
	body {
		font-size: 20px;
		font-weight: 350;
	}
	.titles {
		margin-left: 10px;
		margin-top: 5px;
		margin-bottom: 5px

	}
	.skills {
		margin-left: 7%;
		margin-right: 10%;
	}
</style>

<div class="container">
	<div  align="center"> <h1> Resume </h1></div>
	<!--<div align="center"> <h1> Jorge Peradilla Mendoza </h1></div> -->
	<div class="row">
		<div class="col-xs-6">
			San Francisco, California <br>
		</div>
		<div align="right" class="col-md-6">
			<a href="https://github.com/JPMendoza"> https://github.com/JPMendoza</a>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-6">
			jorge.mendoza415@gmail.com
		</div>
		<div align="right" class="col-xs-6">
			<a href="https://linkedin.com/in/jorgepmendoza">https://linkedin.com/in/jorgepmendoza </a>
		</div>
	</div>
	<!--<div style="background-color: #D3D3D3;" class="row ">
		<div  class="col-xs-6 titles">
			<b>Objective</b>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			To grow as a programmer by learning new types of skill sets related to the Computer Science field
		</div>
	</div> -->
	<div class="row">
	</div>
	<div style="background-color: #D3D3D3;" class="row">
		<div class="col-md-6 titles">
			<b>Skills</b>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<ul>
				<li>Programming Languages/Mark up</li>
			</ul>
				<span class="skills"> Java, JavaScript, C, C++, C#, PHP, Python, Ruby, Bash, Scala, CSS, MySQL, OracleSQL/HTML, CSV, XML, LaTex
				</span>
			<ul>
				<li>IDEs/Text Editor</li>
			</ul>
				<span class="skills"> Eclipse, Microsoft Visual Studio, Sublime, Vim </span>
			<ul>
				<li>Frameworks/Libraries</li>
			</ul>
				<span class="skills"> Junit, Handlebars, Backbone, Play framework, Yii, Laravel, JDBC/jQuery </span>
			<ul>
				<li>Version Control</li>
			</ul>
				<span class="skills"> SVN, Mercurial, Git </span>
			<ul>
				<li>Other Skills</li>
			</ul>
			  	<span class="skills"> REST, Agile Development, Jria </span>
			
		</div>

	</div>
	<div style="background-color: #D3D3D3;" class="row">
		<div class="col-md-6 titles">
			<b>Work Experience</b>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-6">
			<ul>
				<li> 
					appbackr <br>
					Operational Engineer
				</li>
			</ul>
		</div>
		<div style="padding-right: 2%;" align="right" class="col-xs-6"> 
				Palo Alto, CA <br>
				January 2014 - December 2014
		</div>
		<div style="padding-left: 8%;padding-right: 10%;" class="row">
			<div class="col-xs-12">
				<ul>
					<li type="circle"> 
						Responsibilities included maintaining and creating new frontend and backend features on top of Yii
						web codebase.
					</li>
					<li type="circle"> 
						Designed and developed a Chrome and a Firefox web extension using HTML, CSS, JS and a PHP
						backend to add extra information to app stores like Google play and Amazon Appstore.
					</li>
					<li type="circle"> 
						Designed and developed a tool that gathered information using the Android SDK and performed
						analytics on that information to determine an apps performance.
					</li>
					<li type="circle"> 
						Developed and expanded on a web scraper using Ruby to gather information for analytics.
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-6">
			<ul>
				<li> 
					Cal Poly Institute for Advanced Technology and Public Policy <br>
					User Interface Developer
				</li>
			</ul>
		</div>
		<div style="padding-right: 2%;" align="right" class="col-xs-6"> 
				San Luis Obispo, CA<br>
				Summer 2013
		</div>
		<div style="padding-left: 8%;padding-right: 10%;" class="row">
			<div class="col-xs-12">
				<ul>
					<li type="circle"> 
						Developed and implemented many parts of the Transparent Legislature Project’s frontend and
						backend based on the provided mock-ups. This included integrating a search functionality and a
						YouTube API, on top of the Play Framework.
					</li>
				</ul>
			</div>
		</div>
	</div>
	
	<!--<div style="background-color: #D3D3D3;" class="row">
		<div class="col-md-6 titles">
			<b>Projects</b>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			See <a href="/projects">project page</a> 
		</div>
	</div> -->
	<div style="background-color: #D3D3D3;" class="row">
		<div class="col-md-6 titles">
			<b>Education</b>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-6">
			<ul>
				<li> 
					California Polytechnic State University <br>
					Bachelor of Science in <b>Computer Science </b>
				</li>
			</ul>
			
		</div>
		<div style="padding-right: 2%;" align="right" class="col-xs-6"> 
				San Luis Obispo <br>
				September 2009 - December 2013
		</div>
	</div>
	<div style="padding-left: 8%;padding-right: 10%;" class="row">
		<div class="col-xs-12">
			<ul>
				<li type="circle"> 
					Related coursework: CS fundamentals, Graphics, Artificial Intelligence, Interactive Design,
					Programming Languages, Design and Analysis of Algorithms, Databases, Software Engineering,
					Discrete Math, TechnicalWriting, Business and Professional Communication 
				</li>
			</ul>
		</div>
	</div>
</div>


@stop