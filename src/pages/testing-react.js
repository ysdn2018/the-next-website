import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
// import slothImage from '../assets/images/other-sloth.jpg'

const Button = styled.button`
  outline: none;
  border: 1px solid black;

  &:active {
    color: white;
  }
`

const Title = styled.div`
  background-color: ${props => props.pinkify ? "pink" : "white"};
`

// page component
export default class ReactPage extends React.Component {
  state = {
    pinkify: false
  }

  togglePinkify = () => {
    this.setState({
      pinkify: !this.state.pinkify
    })
  }

  render() {
    return (
      <div>
        <Title pinkify={this.state.pinkify}>I wanna be Pink</Title>
        <p>Welcome to page 2</p>
        <Button onClick={this.togglePinkify}>TOGGLE PINKIFY</Button>
      </div>
    )
  }

}

