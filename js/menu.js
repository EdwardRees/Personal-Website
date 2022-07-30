/*
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    document.getElementById("menu-bar").innerHTML =
      "<!-- Brand and toggle get grouped for better mobile display --><div class='navbar-header'><button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'><span class='sr-only'>Toggle navigation</span><span class='icon-bar'></span><span class='icon-bar'></span><span class='icon-bar'></span></button><a class='navbar-brand' href='index.html'><span style='color:#BFBFBF; font-size: 150%;'>S</span><span style='color: #F46100; font-size: 150%;'><sup>+</sup></span><span style='color: #BFBFBF; font-size: 25px;'>……</span></a><a class='navbar-brand' href='index.html'>Home</a></div>     <!-- Collect the nav links, forms, and other content for toggling --><div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'><ul class='nav navbar-nav'><li>    <a href='/about.html'>About</a></li><li>	<!--<a href='/definitions.html'>Definitions</a>--></li><li>    <!--<a href='#'>Contact</a>--></li><li>	<a href='/articles.html'>Articles</a></li><li>	<a href='/products.html'>Products</a></li><!--<li>    <a href='http://www.thebigcollegeplan.com'>College Plan</a></li>--></ul></div><!-- /.navbar-collapse --></div>";
  }
};
*/
// Closes the sidebar menu
document.getElementById("menu-close").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("sidebar-wrapper").classList.remove("active");
});

// toggle sidebar menu
document.getElementById("menu-toggle").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("sidebar-wrapper").classList.toggle("active");
});
