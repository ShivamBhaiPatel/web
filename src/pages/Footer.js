import React from "react";


const Footer =() =>{
    return (
        <div>
            <footer className="w-100 bg-light text-center sticky-bottom">
                <div>Follow us 
                <a href="https://www.facebook.com/sparkjlp/" class="fa fa-facebook" target="_blank" />
                &nbsp;
                <a href="https://www.instagram.com/sparkjlp/" class="fa fa-instagram" target="_blank" />
                &nbsp;
                <a href="/contact" class="fa fa-email" />
                </div>
                
                <p>
                    ©2021 Shivam Tech | All right reserved
                </p>
            </footer>
        </div>

    )
};

export default Footer;