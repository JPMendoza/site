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
		margin-left: 4%;
		margin-right: 0%;
	}
</style>

<div class="container">
	<div  align="center"> <h1> Resume </h1></div>
	<!--<div align="center"> <h1> Jorge Peradilla Mendoza </h1></div> -->
	<div class="row">
		<div class="col-xs-6">
			Ballston Lake, New York <br>
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
				<div class="skills"> Java, JavaScript, TypeScript C, C++, C#, PHP, Python, Ruby, Bash, CSS, MySQL, OracleSQL/ HTML, CSV, XML, LaTex
				</div>	
			</ul>

				
			<ul>
				<li>IDEs/Text Editor</li>
				<div class="skills"> Eclipse, Microsoft Visual Studio, Sublime, Vim </div>
			</ul>
				
			<ul>
				<li>Frameworks/Libraries</li>
				<div class="skills"> Junit, C#.Net, Play framework, Yii, Laravel, JDBC/jQuery </div>
			</ul>
				
			<ul>
				<li>Version Control</li>
				<div class="skills"> SVN, Mercurial, Git </div>
			</ul>
				
			<ul>
				<li>Other Skills</li>
				<div class="skills"> REST, Agile Development </div>
			</ul>
			  	
			
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
					<b>BMPC</b> <br>
					Associate Software Developer
				</li>
			</ul>
		</div>
		<div style="padding-right: 2%;" align="right" class="col-xs-6"> 
				West Milton, NY <br>
				November 2015 - Current
		</div>
		<div style="padding-left: 8%;padding-right: 10%;" class="row">
			<div class="col-xs-12">
				<ul>
					<li type="circle"> 
						Developing the frontend and backend for a project named MANTIS (Multi Architectured Network
						Training Information System). This is web application used to track navy students through their naval
						training.
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-6">
			<ul>
				<li> 
					<b>Brighterion</b> <br>
					Junior Quality Assurance
				</li>
			</ul>
		</div>
		<div style="padding-right: 2%;" align="right" class="col-xs-6"> 
				San Francisco, CA <br>
				Auguest 2015 - October 2015
		</div>
		<div style="padding-left: 8%;padding-right: 10%;" class="row">
			<div class="col-xs-12">
				<ul>
					<li type="circle"> 
						Responsibilities included creating automated unit tests for User Interfaces and response time by
						using Shell Scripting, Python and tools like Selenium
					</li>
					
				</ul>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-6">
			<ul>
				<li> 
					<b>appbackr</b> <br>
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
					<b>Cal Poly Institute for Advanced Technology and Public Policy</b> <br>
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
					Georgia Institute of Technology  <br>
					Masters of Science in <b>Computer Science </b>
				</li>
			</ul>
			
		</div>
		<div style="padding-right: 2%;" align="right" class="col-xs-6"> 
				Atlanta, Georgia <br>
				Augusts 2016 - (Expected) December 2019
		</div>
	</div>
	<div style="padding-left: 8%;padding-right: 10%;" class="row">
		<div class="col-xs-12">
			<ul>
				<li type="circle"> 
					Related coursework: N/A
				</li>
			</ul>
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
					Discrete Math, Technical Writing, Business and Professional Communication 
				</li>
			</ul>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-6">
			<ul>
				<li> 
					PluralSight <br>
					User Name: JPMendoza
				</li>
			</ul>
			
		</div>
		<div style="padding-right: 2%;" align="right" class="col-xs-6"> 
				Farmington, NM<br>
				January 2009 - Current
		</div>
	</div>
	<div style="padding-left: 8%;padding-right: 10%;" class="row">
		<div class="col-xs-12">
			<ul>
				<li type="circle"> 
					Coursework Completed: High Performance PHP, Architecting Applications for the Real World in .NET, User Experience Tips and Tricks for Developers
			</ul>
		</div>
	</div>
</div>


@stop