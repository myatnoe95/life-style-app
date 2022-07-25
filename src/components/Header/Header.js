import React from "react";
import {Navbar,NavbarBrand,} from 'reactstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

const Header = () => {
    return(
        <>
            <Navbar 
                color="light"
                dark
            >
                <NavbarBrand href="/" className="text-primary">
                    <ArrowLeft /> <span> Back</span>
                    
                </NavbarBrand>

                <NavbarBrand href="/" className="mx-auto" style={{color: '#0078CF'}} >
                    LifeX
                </NavbarBrand>
            </Navbar>
        </>
    )
}

export default Header;