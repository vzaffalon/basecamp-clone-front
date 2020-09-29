import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RoudendButton = styled.button`
    display: inline-block;
    padding: 0.5em 1em;
    border-radius: 1.5em;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    white-space: normal;
    cursor: pointer;
`;


export const SecondaryButton = styled(RoudendButton)`
    max-width: 100%;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 0.4rem;
    line-height: 1.5;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;
    font-size: 0.6rem;
    padding-top: 0.425em;
    padding-bottom: 0.425em;
    display: inline-block;
    padding: 0.5em 1em;
    border-radius: 1.5em;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    white-space: normal;
    cursor: pointer;

`


export const PrimaryButton = styled(RoudendButton)`
    background-color: #2da562;
    border-color: #2da562;
    height: 40px;
    color: #fff;
`

export const AlignCenter = styled.div`
    display: flex;
    justify-content: center;
`

export const Card = styled.div`
    border-radius: 3px;
    box-shadow: 0 0 1px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.1);
    background: #fff;
`