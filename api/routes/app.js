/**
 * Created by kimeriksson on 2015-11-17.
 */

/*Test data for brand*/
var appConfig = {
    brand:{"header": "Rachel's Mode",'brandText':'Nyaste mode inom barnkläder'}
};

/* Module for all app conf */
module.exports = {

    /*
    * Return app configuration for app
    * */
    getConfig: function(req, res){
        res.status(200).json(appConfig)
    }

};