<html>
    <head>
        <title>@yield('title')</title>
        

    </head>
    <body>

        <header> @include('layout.header') </header>
    
        

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>