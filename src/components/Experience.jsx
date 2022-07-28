import styled from 'styled-components';
// Alternatively, can use grid & box from mui
import { Grid, Box } from '@material-ui/core';
import palette from '../lib/palette';

// const ExperienceWrapper = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     .grid-item {
//         text-align: center;
//         height: 20rem;
//         box-sizing: border-box;
//     }
// `;

const GridContainer = styled.div`
    .box-item {
        text-align: center;
        border: 1px solid ${palette.gray[0]};
        border-radius: 30px;
        box-shadow: 0 0 11px rgba(33, 33, 33, .1);
        height: 30rem;
        :hover {
            box-shadow: 0 0 11px rgba(33, 33, 33, .2);
        }
    }
`

const Experience = () => {
    return (
        <GridContainer>
            <Grid container 
            spacing={3}
            justifyContent="center"
            alignItems="center">
                <Grid item xs={4}
                justifyContent="center"
                alignItems="center">
                    <Box className="box-item">
                        <h3>Item 1</h3>
                        <p>Contents of Item 1</p>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className="box-item">
                        <h3>Item 2</h3>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className="box-item">
                        <h3>Item 3</h3>
                    </Box>
                </Grid>
            </Grid>
        </GridContainer>
        // <ExperienceWrapper>
        //     <div className="grid-item">Item 1</div>
        //     <div className="grid-item">Item 2</div>
        //     <div className="grid-item">Item 3</div>
        // </ExperienceWrapper>
    );
};

export default Experience;