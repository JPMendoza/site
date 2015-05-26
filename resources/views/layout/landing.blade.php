<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{$title}}</title>

            <!-- Fonts -->


        
            
        <link href="{{ asset('/css/app.css') }}" rel="stylesheet">

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
 

        <script src="site/public/js/modernizr-2.7.1.min.js"></script>

        <script src="site/public/js/imagesloaded.js"></script>
        <script src="site/public/js/skrollr.js"></script>
        <script src="site/public/js/_main.js"></script>
     

     <link rel="stylesheet" href="site/public/css/normalize.css">
        <link rel="stylesheet" href="site/public/css/main.css">
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <title>@yield('title')</title>
    </head>
    <body class="{{$body}}">

        <header> @include('layout.headerLanding') </header>

       
            @yield('content')

  
    </body>

    
</html>