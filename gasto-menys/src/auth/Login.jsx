
import { Input, Heading } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'
import './login.css'

export function Login() {
    return (
        <div className='login-container'>
            <Card className='login-card' >
                <CardHeader>
                    <Heading>Login</Heading>
                </CardHeader>
                <CardBody>

                    <label htmlFor='usr'>Username</label>
                    <Input id='usr'></Input>

                    <label htmlFor='pwd'>Password</label>
                    <Input id='pwd' type='password' ></Input>

                </CardBody>
                <CardFooter textAlign='right'>
                    <Button>Log In</Button>
                </CardFooter>
            </Card>
        </div>
    );
}