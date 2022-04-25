import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    height: 1080px;
    background: #EDEDED;
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    row-gap: 20px;
    
`
export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`
export const Icon = styled(Link)`
    position: fixed;
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #33415C;
    font-weight: 700;
    font-size: 32px;
    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
` 
export const FormContent = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 10rem;
    width: auto;
    @media screen and (max-width: 480px){
        padding: 10px;
    }
`
export const Form = styled.form`
    background: #33415C;
    display: flex;
    height: auto;
    width: 60%;
    z-index: 1;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0, 0.9);

    @media screen and (max-width: 480px){
        padding: 32px 32px;
    }
`
export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    width: 800px;
`
export const FormButton = styled.button`
    background: #023E7D;
    border-radius: 4px;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    border: none;
    margin-left: 1rem;
`
