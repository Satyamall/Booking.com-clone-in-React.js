import styled from 'styled-components'
import {Box} from './Box'

const Div = styled.div`
  width: 100%;
  display: flex;
`

const Container = styled.div`
  width: 100%;
`

const Line = styled.div`
  border-top: 1px solid #0071c2;
  margin-top: 1px;
`

export const TopSection = () => {
    return (<Container>
        <Div>
            <Box>Info</Box>
            <Box>Facilities</Box>
            <Box>Rules</Box>
            <Box>The fine print</Box>
            <Box>Guest reviews (487)</Box>
        </Div>
        <Line/>
    </Container>)
}
