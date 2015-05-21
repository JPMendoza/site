<html>
    <head>
        <title>@yield('title')</title>
    </head>
    <body>
        <header> @include('layout.header') </header>
        @section('sidebar')
            This is the master sidebar.
        @show

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>