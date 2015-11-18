/**
 * Created by kimeriksson on 2015-11-16.
 */
var Brand = React.createClass({
   render: function(){

       /*
       * Only return if brand is defined
       * */
       if(this.props.brand){
           return(
               <div>
                   <div className="brand">{this.props.brand.header}</div>
                   <div className="address-bar">{this.props.brand.brandText}</div>
               </div>
           )
       }else{
           return(<div></div>)
       }


   }
});