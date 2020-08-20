import React,{Fragment} from "react";

let Alert=()=>{
    return(
        <Fragment>
                <div className="alert alert-danger alert-dismissible mt-2 animated zoomInDown">
                <button className="close" data-dismiss="alert">

                <i className="fa fa-times-circle"/>

             </button>
            I am an alert

                </div>


        </Fragment>
    )
};

export default Alert;