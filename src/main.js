/**
 * Created by kimeriksson on 2015-11-16.
 */
var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var App = React.createClass({
    /*
       Init app with empty config
     */
    getInitialState: function(){
        return{appStart:{}}
    },
    /*
    * Get app configuration
    *
    * */
    componentDidMount: function(){
        $.ajax({
            method:'get',
            url: 'http://localhost:8882/app-config',
            dataType:'json',
            cache:true,
            success: function(config){
                this.setState({appStart:config})
            }.bind(this)
        });
    },

    /*
    * Render Brand and Nav
    * */
   render:function(){
       return(
           <div>
               /*
               * Send brand.header, brand.brandText
               * */
               <Brand brand={this.state.appStart.brand}></Brand>
               <Nav></Nav>
               {this.props.children}
           </div>
       )
   }
});

/*
* Create default routes
* Home, About, Blogg, Contact
* */

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="home" component={Home}/>
            <Route path="about" component={About}/>
            <Route path="blogg" component={Blog}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>),
    document.getElementById('app')
);

