import React from "react";
import './Footer.js';


const Footer =() =>{
    return (
        <div>
            <footer className="w-100 text-center sticky-bottom">
                <div>Follow us 
                <a href="https://www.facebook.com/sparkjlp/" class="fa fa-facebook" target="_blank" />
                &nbsp;
                <a href="https://www.instagram.com/sparkjlp/" class="fa fa-instagram" target="_blank" />
                &nbsp;
                <a href="/contact" class="fa fa-email" />
                </div>
                <p>
                    ©2021 Spark Society | All right reserved
                </p>
            </footer>
        </div>

    )
};

export default Footer;