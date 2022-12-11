function Logpage(){
    return(
        <div id="form-div">
            <form>
            
                <input type={"text"} placeholder={"Email address or phone number"}></input><br></br>
            
           
                <input type={"text"} placeholder={"Password"}></input><br></br>
            
            
                <button type="submit"  id="btn1">Log In</button>
            
            <div>
                <a href="https//www.google.com">Forgotten Password?</a>
            </div>
            <div id="line">
                <hr style={{borderTop: "1px solid lightgrey"}}/>
            </div>
            <div>
                <button id="btn2" href="https//www.google.com" type="submit">Create New Account</button>
            </div>
            </form>

            <div id="ancr">
                <a href="https//www,google.com">Create a page</a><span>for a celebrity, brand or business.</span>
            </div>
        </div>
    );
}

export default Logpage;