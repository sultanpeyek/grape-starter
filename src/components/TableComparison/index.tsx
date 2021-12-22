import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TableComparisonProps {
  className: string;
  classAlias: string;
  minToken: string;
  minTokenLP: string;
  value?: any;
}

export const TableComparison = (props: TableComparisonProps) => {
  const { className, classAlias, minToken, minTokenLP, value } = props;

  const StyledPaperOuter = styled(Paper)({
    background: 'rgba(255, 255, 255, 0.25)',
    padding: '1rem',
    borderRadius: '1.25rem',
  });

  const StyledPaperInner = styled(Paper)({
    backgroundColor: '#12151C',
    padding: '1rem',
    color: 'white',
    marginBottom: '1rem',
    textAlign: 'center',
    borderRadius: '1.5rem',
    boxShadow: 'none',
    minHeight: 64,
    '&:last-child': {
      marginBottom: 0,
    },
  });

  let backgroundHeader = 'linear-gradient(90deg, #545769 16.21%, #262834 81.73%)';
  if (className === 'B') {
    backgroundHeader = 'linear-gradient(90deg, #D299FF 16.21%, #B4C8FD 81.73%)';
  } else if (className === 'A') {
    backgroundHeader = 'linear-gradient(90deg, #EC0FF3 16.21%, #49AEFC 81.04%)';
  }

  const StyledPaperInnerHeader = styled(StyledPaperInner)({
    background: backgroundHeader,
  });

  return (
    <StyledPaperOuter>
      <StyledPaperInnerHeader>
        <Grid container sx={{ width: '100%' }}>
          <Grid item xs={12} sm={6} sx={{ textAlign: 'left' }}>
            <Typography sx={{ textTransform: 'uppercase' }}>{`Class ${className}`}</Typography>
            <Typography sx={{ textTransform: 'uppercase', fontSize: '1.5rem' }} variant="h1">
              {classAlias}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
            <Typography sx={{ textTransform: 'uppercase', fontSize: '2rem' }} variant="h5">
              <img
                src="https://via.placeholder.com/30x30?text=X"
                alt="Grape Icon"
                loading="lazy"
                style={{ marginRight: '0.5rem' }}
              />
              {minToken}
            </Typography>
            <Typography sx={{ fontSize: '0.8rem' }}>{`(${minTokenLP} Raydium LP)`}</Typography>
          </Grid>
        </Grid>
      </StyledPaperInnerHeader>
      <StyledPaperInner sx={{ minHeight: '220px' + '!important' }}>{value[0]}</StyledPaperInner>
      <StyledPaperInner>{value[1]}</StyledPaperInner>
      <StyledPaperInner>{value[2]}</StyledPaperInner>
      <StyledPaperInner>{value[3]}</StyledPaperInner>
      <StyledPaperInner>{value[4]}</StyledPaperInner>
      <StyledPaperInner>{value[5]}</StyledPaperInner>
      <StyledPaperInner>{value[6]}</StyledPaperInner>
      <StyledPaperInner>{value[7]}</StyledPaperInner>
    </StyledPaperOuter>
  );
};
