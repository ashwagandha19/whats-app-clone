import styled from "styled-components";
import Head from "next/head";
import Button from "@material-ui/core/Button"
import { auth, provider } from "../firebase";

function login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo 
                    src="https://tse4.mm.bing.net/th?id=OIP.7tprA1bs0MsnMj58vxHDCAHaHl&pid=Api&P=0&w=300&h=300"
                />
                <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default login


const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #efefef;
`;

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 14px -3px rgba(0, 0, 0, .7);
`;

const Logo = styled.img`
    height: 200px;
    width:200px;
`;