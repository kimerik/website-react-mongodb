/**
 * Created by kimeriksson on 2015-11-16.
 */
var Router = window.ReactRouter;
var Link = Router.Link;
var Nav = React.createClass({

   render: function(){
       return (
           <nav className="navbar navbar-default" role="navigation">
               <div className="container">
                   <div className="navbar-header">
                       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                           <span className="sr-only">Toggle navigation</span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                       </button>
                       <a className="navbar-brand" href="index.html">Business Casual</a>
                   </div>
                   <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                       <ul className="nav navbar-nav">
                           <li>
                               <Link to={'/home'}>Hem</Link>
                           </li>
                           <li>
                               <Link to={'/about'}>Om mig</Link>
                           </li>
                           <li>
                               <Link to={'/blogg'}>Blogg</Link>
                           </li>
                           <li>
                               <Link to={'/contact'}>Kontakt</Link>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       )
   }
});
