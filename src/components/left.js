import React from "react"
import styled from "styled-components"

export const LeftContainer = styled.div`
  background-color: #30e9ff;
  width: 50%;
  height: 100vh;
  color: orange;
  font-size: 2rem;
`

export default () => (
  <LeftContainer>
    <h1>Hello from left</h1>
  </LeftContainer>
)
