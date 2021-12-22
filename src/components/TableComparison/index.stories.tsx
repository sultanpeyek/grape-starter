import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableComparison } from './index';

// Import them by yourself
import { Container, Grid, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';

export default {
  title: 'Grape/TableComparison',
  component: TableComparison,
} as ComponentMeta<typeof TableComparison>;

const data = {
  gibbon: {
    className: 'C',
    classAlias: 'Gibbon',
    minToken: '1,020',
    minTokenLP: '2,000',
    value: [
      <React.Fragment>
        <LightbulbIcon sx={{ width: 50, height: 50 }} />
        <Typography>
          Community &amp; Giveaways: Participate in contests, airdrops, giveaways, beta testing to
          win upto <strong>100K $GRAPE/month+</strong> partner giveaways.
        </Typography>
      </React.Fragment>,
      <Typography>10 $GRAPE</Typography>,
      <Typography>150,000 $GRAPE</Typography>,
      <Typography>
        <RemoveIcon />
      </Typography>,
      <Typography>65%</Typography>,
      <Typography>1x</Typography>,
      <Typography>
        <RemoveIcon />
      </Typography>,
      <Typography>
        <RemoveIcon />
      </Typography>,
    ],
  },
  greatApe: {
    className: 'B',
    classAlias: 'Great Ape',
    minToken: '5,100',
    minTokenLP: '10,000',
    value: [
      <React.Fragment>
        <WorkIcon sx={{ width: 50, height: 50 }} />
        <Typography>
          Work &amp; Earn: Show off your skills &amp; earn from a pool of{' '}
          <strong>1.5mn Grape/month</strong> by fulfilling work-tickets or specific bounties from
          SOL founders. Access to skill group sub-DAOs
        </Typography>
      </React.Fragment>,
      <Typography>50 $GRAPE</Typography>,
      <Typography>250,000 $GRAPE</Typography>,
      <Typography>1,500,000 $GRAPE</Typography>,
      <Typography>85%</Typography>,
      <Typography>5x</Typography>,
      <Typography>
        <CheckIcon />
      </Typography>,
      <Typography>
        <RemoveIcon />
      </Typography>,
    ],
  },
  gorilla: {
    className: 'A',
    classAlias: 'Gorilla',
    minToken: '20,400',
    minTokenLP: '40,000',
    value: [
      <React.Fragment>
        <PeopleAltIcon sx={{ width: 50, height: 50 }} />
        <Typography>
          Governance: Apply to be a part of the DAO and shape our roadmap, capital allocation and
          growth within the Solana ecosystem
        </Typography>
      </React.Fragment>,
      <Typography>200 $GRAPE</Typography>,
      <Typography>500,000 $GRAPE</Typography>,
      <Typography>1,500,000 $GRAPE</Typography>,
      <Typography>100%</Typography>,
      <Typography>20x</Typography>,
      <Typography>
        <CheckIcon />
      </Typography>,
      <Typography>
        <CheckIcon />
      </Typography>,
    ],
  },
};
const Template: ComponentStory<typeof TableComparison> = () => (
  <Container>
    <Grid container spacing={2} sx={{ mx: 'auto' }}>
      <Grid item xs={12} md={4}>
        <TableComparison {...data.gibbon} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TableComparison {...data.greatApe} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TableComparison {...data.gorilla} />
      </Grid>
    </Grid>
  </Container>
);

export const Default = Template.bind({});
