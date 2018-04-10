import React from 'react'
import styled from 'styled-components'
import { spacing, breakpoints, shuffleArray } from '../../utils/constants.js'

/*
  Base component
  Copy this directory and rename to your choosing
*/


const StatementContainer = styled.h1`
  position: relative;
  width: 100%;
  height: 100%;
  /* height: calc(100% - 42%); */
  padding: ${spacing.small}px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: height 200ms cubic-bezier(.14,.6,.36,1);

  ${props => props.border && 'border-bottom: 1px solid black;'}

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${ spacing.smaller}px;
  }
`

const OuterContainer = styled.div`
  width: 100%;
  /* height: ${props => props.height ? props.height : "100%"}; */
  height: 95%;
  padding: ${props => props.pad ? spacing.smaller : 0};
`

const StatementText = styled.span`
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 3rem;
  }
`

const HoversContainer = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  width: 100%;
  margin-top: ${spacing.bigger}px;
  height: calc(95% - ${spacing.bigger*2}px);
  display: flex;
`;

const HoverSection = styled.div`
  height: 100%;
  flex: 1;
`

const TheNext = styled.span`
  position: relative;
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  text-align: right;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 3rem;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0;
    top: auto;
  }
`

export default class HomepageStatement extends React.Component {
  state = {
    verb: "",
    noun: ""
  }

  resetStatement = () => {
    this.setState({
      verb: "",
      noun: ""
    })
  }

  setStatement = (verb, noun) => {
    this.setState({
      verb,
      noun
    })
  }

  componentWillMount() {
    const verbs = ["Binging", "Setting", "becoming", "eating", "throwing", "catching", "busting", "brining", "dodging", "leaving", "watching", "surviving", "missing", "surviving", "eating", "missing", "until", "meeting", "ghosting", "becoming", "taking", "meeting", "raising", "saving", "becoming", "crashing", "swiping", "being", "leading", "being", "becoming", "catching", "protesting", "dreading", "creeping", "copping"];
    const nouns = ["series", "trend", "meme", "pizza", "shade", "zzzs", "move", "heat", "bullet", "shook", "episode", "winter", "bus", "royale", "nugget", "deadline", "sunrise", "match", "match", "senpai", "risk", "deadline", "roof", "gpa", "ting", "program", "match", "potato", "kouhai", "gucci", "meme", "dub", "strike", "deadline", "portfolio", "ting"];

    const statements = this.props.gradData.map(({ node }) => {
      return {
        verb: node.frontmatter.verb,
        noun: node.frontmatter.noun
      }
    });

    for (let i in verbs) {
      statements.push({
        noun: nouns[i],
        verb: verbs[i]
      })
    }

    this.statements = shuffleArray(statements);
  }

  render() {
    return (
      <OuterContainer {...this.props}>

        <HoversContainer>
          {this.statements.map((statement, i) => 
            <HoverSection
              key={i}
              onMouseEnter={() => this.setStatement(statement.verb, statement.noun)}
              onMouseLeave={() => this.resetStatement()}
            />
          )}
        </HoversContainer>

        <StatementContainer {...this.props}>
          <StatementText>
            {this.state.verb || "Experience"}
          </StatementText>

          <TheNext right>
            The Next
          </TheNext>

          <StatementText>
            {this.state.noun || "Gradshow"}
          </StatementText>
        </StatementContainer>
      </OuterContainer>
    )
  }
}
