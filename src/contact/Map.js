/**
 * Created by kimeriksson on 2015-11-17.
 */
var Map = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr></hr>
                        <h2 className="intro-text text-center">Contact
                            <strong>business casual</strong>
                        </h2>
                        <hr></hr>
                    </div>
                    <div className="col-md-8">
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0"
                                marginwidth="0"
                                src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
                    </div>
                    <div className="col-md-4">
                        <p>Phone:
                            <strong>123.456.7890</strong>
                        </p>

                        <p>Email:
                            <strong><a href="mailto:name@example.com">name@example.com</a></strong>
                        </p>

                        <p>Address:
                            <strong>3481 Melrose Place
                                <br></br>Beverly Hills, CA 90210</strong>
                        </p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
});