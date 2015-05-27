@extends('layout.default')

@section('title')
{{ $title }}
@stop

@section('content')
<div class="container">
	<div align="center"> <h1> Jorge Peradilla Mendoza </h1></div>
	<div class="row">
		<div class="col-xs-6">
			San Francisco, California
		</div>
		<div align="right" class="col-md-6">
			https://github.com/JPMendoza
		</div>
	</div>
	<div class="row">
		<div class="col-xs-6">
			jorge.mendoza415@gmail.com
		</div>
		<div align="right" class="col-xs-6">
			https://linkedin.com/in/jorgepmendoza
		</div>
	</div>
	<div style="background-color: #D3D3D3;" class="row">
		<div class="col-xs-6">
			<b>Objective</b>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			To grow as a programmer by learning as many new types of skills sets related to the Computer Science field to be a well rounded 
			Software Engineer
		</div>
	</div>
	<div class="row">
	</div>
	<div style="background-color: #D3D3D3;" class="row">
		<div class="col-md-6">
			<b>Skills</b>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			Java, JavaScript, C, C++, C#, HTML, SQL, JDBC, PHP, CSS, Python, Ruby, jQuery, Vim, Eclipse, Microsoft
			Visual Studio, Bash, Yii, REST, Junit, XML, CSV, LATEX, SVN, Git, Mercurial, UNIX, Linux, Jira, Agile
			Development
		</div>
	</div>
	<div style="background-color: #D3D3D3;" class="row">
		<div class="col-md-6">
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
	
	<div style="background-color: #D3D3D3;" class="row">
		<div class="col-md-6">
			<b>Projects</b>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			See <a href="/projects">project page</a> 
		</div>
	</div>
	<div style="background-color: #D3D3D3;" class="row">
		<div class="col-md-6">
			<b>Education</b>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-6">
			<ul>
				<li> 
					California Polytechnic State University <br>
					Bachelor of Science in Computer Science
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