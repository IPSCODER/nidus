import withAuth from "../auth/withAuth";
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import styled from "styled-components";

const Main = styled.main`
display:flex;
flex-direction: column;
width: 100%;
height: calc(100vh - 60px);
padding: 1% 2%;
position: relative;
`



const Theme = () => {
  return (
    <>
    <Header/>
    <Main>
    <Outlet/>
    </Main>
    <Footer/>
    </>
  )
}

export default withAuth(Theme)