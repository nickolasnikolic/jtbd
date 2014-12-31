<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Landing page for a small JTBD web app">
    <meta name="author" content="Nickolas Nikolic">
    
    <link rel="icon" type="image/png" href="/app/images/favicon.png">

    <title>jtbd.rocks landing page</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/grayscale.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" class="tk-foco" data-spy="scroll" data-target=".navbar-fixed-top">

    <!-- Navigation -->
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">
                    <span class="light"><img class="pull-up pull-left" src="app/images/favicon.png" width="40px" />jtbd.rocks</span> 
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#about">about</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#download">preview</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Intro Header -->
    <header class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1 class="brand-heading">JTBD Web app</h1>
                        <p class="intro-text">A free web app to compile Jobs-to-be-Done for release in mid-2015.</p>
                        <p>We love JTBDs, and wanted to return some of that love. This is an open source project to allow others to try out JTBD planning with no risk. Much insight.</p>
                        <p>Check back for more to come in 2015!</p>
                        <a href="#about" class="btn btn-circle page-scroll">
                            <i class="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- About Section -->
    <section id="about" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>About jtbd.rocks</h2>
                <p>jtbd.rocks is a web app created to help those that wish to use JTBD in their planning, brainstorming, as well as an easy utility to help fence-sitters (or their bosses) take the first steps.</p>
                <p>Nothing is ever sent to us, soon we also will offer saving to one's own Google Drive account for persistance of your careful planning.</p>
                <p>Secure and easy.</p>
            </div>
        </div>
    </section>

    <!-- Preview Section -->
    <section id="download" class="content-section text-center">
        <div class="download-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Preview jtbd.rocks as we work!</h2>
                    <p>You can play with jtbd.rocks as we work.</p>
                    <a href="app/" class="btn btn-default btn-lg">Visit the app!</a>
                    <p><a href="https://github.com/nickolasnikolic/jtbd/issues">Don't forget to send trouble reports and questions to the project website on GitHub!</a> <a href="https://github.com/nickolasnikolic/jtbd">Or even, gosh, a pull request!</a></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Contact jtbd.rocks</h2>
                <p>Feel free to email us to provide some feedback on our app, or to just say hello!</p>
                <p><a href="mailto:feedback@startbootstrap.com">nick@jtbd.rocks</a>
                </p>
                <ul class="list-inline banner-social-buttons">
                    <li>
                        <a href="https://twitter.com/jtbdrocks" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                    </li>
                    <li>
                        <a href="https://github.com/nickolasnikolic/jtbd/issues" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                    </li>
                    <li>
                        <a href="https://plus.google.com/u/0/+NickolasNikolic/posts" class="btn btn-default btn-lg"><i class="fa fa-google-plus fa-fw"></i> <span class="network-name">Google+</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container text-center">
            <p>MIT License jtbd.rocks</p>
        </div>
    </footer>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="js/jquery.easing.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/grayscale.js"></script>
    <script src="//use.typekit.net/krt8vnr.js"></script>
    <script>try{Typekit.load();}catch(e){}</script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-58030496-1', 'auto');
      ga('send', 'pageview');

    </script>
</body>

</html>
