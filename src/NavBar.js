import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import LinkedIn from "./assets/social-media-icons/in_32x32.png";
import InstaGram from "./assets/social-media-icons/ig_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
            <Flex justify="space-around" width="40%" padding="0 15px">
                <Link href="https://www.facebook.com/pablojorgeandrespalavecino/" target="_blank">
                    <Image src={LinkedIn} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="https://www.linkedin.com/in/pablojorgeandres/" target="_blank">
                    <Image src={InstaGram} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="mailto:pablojorgeandres@gmail.com" target="_blank">
                    <Image src={Email} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>

            <Flex justify="space-around" width="40%" padding="0 15px">
                <Box margin="0 15px">About</Box>
                <Spacer />
                <Box margin="0 15px">Mint</Box>
                <Spacer />
                <Box margin="0 15px">Team</Box>
                <Spacer />
                {
                    isConnected ? 
                        (<Box margin="0 15px" color="#D6517D">Connected</Box>) 
                        : (<Button 
                                backgroundColor="#D6517D" borderRadius="5px" boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white" cursor="pointer" fontFamily="inherit" padding="15px" margin="-15px 15px"
                                onClick={connectAccount}>
                                    Connect
                            </Button>) 
                }
            </Flex> 
            

        </Flex>
    );
};

export default NavBar;