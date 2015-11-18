/**
 * Created by kimeriksson on 2015-11-17.
 */
var ContactForm = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr></hr>
                        <h2 className="intro-text text-center">Contact
                            <strong>form</strong>
                        </h2>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, vitae, distinctio, possimus
                            repudiandae cupiditate ipsum excepturi dicta neque eaque voluptates tempora veniam esse
                            earum sapiente optio deleniti consequuntur eos voluptatem.</p>

                        <form role="form">
                            <div className="row">
                                <div className="form-group col-lg-4">
                                    <label>Name</label>
                                    <input type="text" className="form-control"></input>
                                </div>

                                <div className="form-group col-lg-4">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control"/>
                                </div>

                                <div className="form-group col-lg-4">
                                    <label>Phone Number</label>
                                    <input type="tel" className="form-control"/>
                                </div>

                                <div className="clearfix"></div>
                                <div className="form-group col-lg-12">
                                    <label>Message</label>
                                    <textarea className="form-control" rows="6"></textarea>
                                </div>
                                <div className="form-group col-lg-12">
                                    <input type="hidden" name="save" value="contact"/>
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});