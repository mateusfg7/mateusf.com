import styled from 'styled-components'

interface ProgressBarProps {
  width: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  position: fixed;
  top: 0;
  height: 3px;
  width: ${props => props.width}%;
  background-color: black;
  transition: width;
  transition-duration: 1s;
  border-radius: 5px;
`

export const PercentageProgress = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: black;
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem;
`
