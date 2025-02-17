import { Box } from "@mui/material";
import ErrorComponent from "../components/error-component/error-component";
import LoadingComponent from "../components/loading/Loading";
import PlanetUI from "../components/planet/Planet";
import { useSearch } from "../context/SearchContext";
import styled from "styled-components";

const Section = styled.section`
display:flex;
flex-wrap:wrap;
width:100%;
justify-content:space-around;
gap:20px;
`

const List = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
gap:10px;
border:1px solid #000;
padding:5px;
margin-bottom:5px;
width:300px;
height:300px;
border-radius:50%;
position:relative;
`
const H1 = styled.h1`
font-size:28px;
`
const P = styled.p`
position:absolute;
top:60%;
`

const Home = () => {

  const {results,loading,error} =  useSearch()

  if(error){
    return <ErrorComponent/>
  }else if(loading){
    return <LoadingComponent/>
  }
  

  return (
    <Section>
    {Array.isArray(results) ? (results.map((planet) => (
    
      <PlanetUI key={planet.name} name={planet.name} population={planet.population} />
    ))) :
      <PlanetUI  name={results.name} population={results.population} />
}
    </Section>
  )
};

export default Home;
