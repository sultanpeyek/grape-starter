import React from 'react';
import { Container, Grid, Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface MembershipComparisonItemProps {
  className: string;
  classAlias: string;
  minToken: string;
  minTokenLP: string;
  values: (JSX.Element | string)[];
}

interface MembershipProps {
  headings: (JSX.Element | string)[];
  items: MembershipComparisonItemProps[];
}

export const MembershipView = (tableComparisonProps: MembershipProps) => {
  const { headings, items } = tableComparisonProps;
  const StyledPaperOuter = styled(Paper)({
    background: 'rgba(255, 255, 255, 0.25)',
    padding: '0.5rem 1rem',
    borderRadius: 0,
    boxShadow: 'none',
    flex: 1,
    height: '100%',
  });

  const StyledPaperInner = styled(Paper)({
    backgroundColor: '#12151C',
    padding: '1rem',
    color: 'white',
    marginBottom: '1rem',
    textAlign: 'center',
    borderRadius: '1.5rem',
    boxShadow: 'none',
    flex: 1,
    height: '100%',
    '&:last-child': {
      marginBottom: 0,
    },
  });

  const MembershipComparisonItem = (tableComparisonItemProps: MembershipComparisonItemProps) => {
    const { className, classAlias, minToken, minTokenLP, values } = tableComparisonItemProps;

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
      <React.Fragment>
        <Grid
          item
          sx={{
            order: { xs: 'inherit', lg: 1 },
          }}
          xs={12}
          lg={3}
        >
          <StyledPaperOuter
            sx={{
              paddingTop: '1rem',
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
              marginLeft: { xs: 0, lg: '1rem' },
              marginRight: { xs: 0, lg: '1rem' },
            }}
          >
            <StyledPaperInnerHeader>
              <Grid container sx={{ width: '100%' }}>
                <Grid item xs={12} sm={6} lg={12} xl={6} sx={{ textAlign: 'left' }}>
                  <Typography
                    sx={{ textTransform: 'uppercase' }}
                  >{`Class ${className}`}</Typography>
                  <Typography
                    sx={{ textTransform: 'uppercase', fontSize: '1.5rem' }}
                    variant="h1"
                    component="p"
                  >
                    {classAlias}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={12} xl={6} sx={{ textAlign: 'right' }}>
                  <Typography
                    sx={{ textTransform: 'uppercase', fontSize: '1.75rem' }}
                    variant="h5"
                    component="p"
                  >
                    <img
                      src="https://via.placeholder.com/30x30?text=X"
                      alt="Grape Icon"
                      loading="lazy"
                      style={{ marginRight: '0.5rem' }}
                    />
                    {minToken}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem' }}>{minTokenLP}</Typography>
                </Grid>
              </Grid>
            </StyledPaperInnerHeader>
          </StyledPaperOuter>
        </Grid>
        {values.map((item, key: number) => (
          <Grid
            key={key + 2}
            item
            sx={{
              order: { xs: 'inherit', lg: key + 2 },
              // Add margin bottom only on Mobile
              ...(key === values.length - 1 && {
                marginBottom: { xs: '1rem', lg: 0 },
              }),
            }}
            xs={12}
            lg={3}
          >
            <StyledPaperOuter
              sx={{
                flex: 1,
                marginLeft: { xs: 0, lg: '1rem' },
                marginRight: { xs: 0, lg: '1rem' },
                // Add border radius at the bottom
                ...(key === values.length - 1 && {
                  paddingBottom: '1rem',
                  borderBottomLeftRadius: '1rem',
                  borderBottomRightRadius: '1rem',
                }),
              }}
            >
              <StyledPaperInner>
                <Box
                  sx={{
                    display: { xs: key !== 0 ? 'block' : 'none', lg: 'none' }, // Show heading on top of the value only on Mobile
                    '& *': {
                      fontSize: '0.8rem',
                    },
                  }}
                >
                  {headings[key]}
                </Box>
                {item}
              </StyledPaperInner>
            </StyledPaperOuter>
          </Grid>
        ))}
      </React.Fragment>
    );
  };

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid
          item
          sx={{
            paddingTop: '1rem',
            order: { xs: 'inherit', lg: 1 },
          }}
          xs={12}
          lg={3}
        >
          <img
            src="https://via.placeholder.com/280x100?text=X"
            alt="Grape Logo"
            loading="lazy"
            style={{ width: '100%', maxWidth: '140px' }}
          />
        </Grid>

        {headings.map((item, key: number) => (
          <Grid
            item
            key={key + 2}
            sx={{
              padding: '1rem 0',
              order: { xs: 'inherit', lg: key + 2 },
              display: { xs: key === 0 ? 'inherit' : 'none', lg: 'flex' },
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              borderBottom: '1px solid #fff',
              ...(key === headings.length - 1 && {
                borderBottom: 'none',
              }),
              ...(key === 0 && {
                borderBottom: 'none',
              }),
            }}
            xs={12}
            lg={3}
          >
            {item}
          </Grid>
        ))}

        {items.map((item, key: number) => (
          <MembershipComparisonItem key={key} {...item} />
        ))}
      </Grid>
    </Container>
  );
};
