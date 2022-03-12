import { Button, Icon } from "@material-ui/core";
import React from "react";
import "./Header.css";
import Login from "./Login";
import { logout } from "./firebase";
import { Avatar, IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';






function Header() {
    
    async function handleLogout() {
        await logout();
    }
    

    
    return (
        <div className="header">

            <div className="header_left">
                <img
                    src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
                    alt=""
                />
            </div>
            <div className="header_mid">
                <div className="home">
                    <IconButton>
                        <HomeIcon fontSize="large" />
                    </IconButton>
                </div>

                <div className="followers">
                    <IconButton>
                        <SupervisedUserCircleIcon fontSize="large" />
                    </IconButton>
                </div>    


            </div>

            <div className="header_right">
                <div className="acc_drop">
                    <div className="container">
                        <IconButton type="button" class="button">
                            <Avatar />    
                        </IconButton>
                    </div>
                </div>

                <div className="logout">
                    <Button type="submit" onClick={handleLogout}>
                    Log Out
                    </Button>
                </div>

                
            </div>

        </div>
    );
}

export default Header;