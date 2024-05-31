import React from 'react'
import styled from "styled-components"
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

const Home = () => {
  return (
 
 <Container>
<Section1/> 
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Section6/>
</Container>

  )
}

export default Home

const Container = styled.div`
  
 margin:0px;
 padding:0px;
 box-sizing:border-box;

`