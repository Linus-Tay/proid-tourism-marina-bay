import React from 'react'
import { FormWrap, Container, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignInElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Exerevnóntas</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign up for a new account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
