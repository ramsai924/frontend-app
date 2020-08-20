import React,{Fragment} from "react";


let Seller=()=>{
    return(
    <Fragment>
        <div className="container">
        <div className="login-container">
            <div className="display: flex;justify-content: space-around;">
                <div className="border-radius:5px;padding: 5px 10px 10px 20px;background-color: rgb(0, 0, 0);width: 100%;margin: 2px;text-align: center;cursor: pointer;"
                    id="buyertext">
                    <h6 className="modal-title" id="buyer">Buyer</h6>
                </div>
                <div className="border-radius:5px;padding: 5px 10px 10px 20px;background-color: rgb(128, 51, 230);width: 100%;margin: 2px;text-align: center;cursor: pointer;"
                    id="sellertext">
                    <h6 className="modal-title" id="seller">Seller</h6>
                </div>
            </div>


           <div id="buyerform">
            
                <div id="buyerRegisterForm">
                    <form>
                    
                        <div>
                            <label>Username : </label>
                            <input type="text" name="name" placeholder="Enter your username"></input>
                        </div>
                        <div>
                            <label>Email : </label>
                            <input type="text" name="email" placeholder="Enter your Email"></input>
                        </div>
                        <div>
                            <label>Phone Number : </label>
                            <input type="text" name="phonenumber" placeholder="Enter your Phone number "></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter your password "></input>
                        </div>
                        
                         <input type="submit" name="login" value="LOGIN"> </input>
                        <a type="button" id="gotoBuyerLog">Already user ?</a>
                    
                    </form>
                </div>


                <div style="display: none;" id="buyerloginForm">
                    <form>
                    
                       
                        <div>
                            <label>Email : </label>
                            <input type="text" name="email" placeholder="Enter your Email"></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter your password "></input>
                        </div>
                        <input type="submit" name="login" value="LOGIN"></input>
                        <a type="button" id="gotoBuyerReg">New user ?</a>
                    
                    </form>
                </div>
           </div>

        <div id="sellerform" style="display: none;">
                <div id="sellerRegisterForm">
                    <form action="/auth/registerseller" method="POST">
                    
                        <div>
                            <label>seller Username : </label>
                            <input type="text" name="name" placeholder="Enter your username"></input>
                        </div>
                        <div>
                            <label>Email : </label>
                            <input type="text" name="email" placeholder="Enter your Email"></input>
                        </div>
                        <div>
                            <label>Phone Number : </label>
                            <input type="text" name="phonenumber" placeholder="Enter your Phone number "></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter your password "></input>
                        </div>
                        <input type="submit" name="login" value="LOGIN"></input>
                        <a type="button" id="gotoSellerLog">Already user ?</a>
                    
                    </form>
                </div>

                <div style="display: none;" id="sellerloginForm">
                    <form action="/auth/loginseller" method="POST">
                
                
                        <div>
                            <label>Email : </label>
                            <input type="text" name="email" placeholder="Enter your Email"></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter your password "></input>
                        </div>
                        <input type="submit" name="login" value="LOGIN"></input>
                        <a type="button" id="gotoSellerReg">New user ?</a>
                
                    </form>
                </div>
           </div>
        </div>
    </div>

 </Fragment>
    )
}

export default Seller;