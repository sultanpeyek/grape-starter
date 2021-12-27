import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MembershipView } from './index';

// Import them by yourself
import { Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LoginIcon from '@mui/icons-material/Login';
import ParaglidingIcon from '@mui/icons-material/Paragliding';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

export default {
  title: 'Grape/Membership',
  component: MembershipView,
} as ComponentMeta<typeof MembershipView>;

const data = {
  headings: [
    <Typography
      sx={{
        alignSelf: 'flex-start',
        fontSize: '2rem',
      }}
    >
      Membership Models
    </Typography>,
    <Typography
      sx={{
        fontSize: '1.2rem',
      }}
    >
      <CardGiftcardIcon
        sx={{ marginBottom: '0.125rem', marginRight: '0.8rem', verticalAlign: 'middle' }}
      />
      Monthly Emissions
    </Typography>,
    <Typography
      sx={{
        fontSize: '1.2rem',
      }}
    >
      <EmojiEventsIcon
        sx={{ marginBottom: '0.125rem', marginRight: '0.8rem', verticalAlign: 'middle' }}
      />
      Event Prize Pools
    </Typography>,
    <Typography
      sx={{
        fontSize: '1.2rem',
      }}
    >
      <WorkIcon sx={{ marginBottom: '0.125rem', marginRight: '0.8rem', verticalAlign: 'middle' }} />
      Access to Skill Role Allocation Pool
    </Typography>,
    <Typography
      sx={{
        fontSize: '1.2rem',
      }}
    >
      <LoginIcon
        sx={{ marginBottom: '0.125rem', marginRight: '0.8rem', verticalAlign: 'middle' }}
      />
      Channel Access Level
    </Typography>,
    <Typography
      sx={{
        fontSize: '1.2rem',
      }}
    >
      <ParaglidingIcon
        sx={{ marginBottom: '0.125rem', marginRight: '0.8rem', verticalAlign: 'middle' }}
      />
      Chance to win Airdrops / Giveaways
    </Typography>,
    <Typography
      sx={{
        fontSize: '1.2rem',
      }}
    >
      <GroupWorkIcon
        sx={{ marginBottom: '0.125rem', marginRight: '0.8rem', verticalAlign: 'middle' }}
      />
      Governance: SubDAO Eligibility
    </Typography>,
    <Typography
      sx={{
        fontSize: '1.2rem',
      }}
    >
      <PeopleAltIcon
        sx={{ marginBottom: '0.125rem', marginRight: '0.8rem', verticalAlign: 'middle' }}
      />
      Governance: MainDAO Eligibility
    </Typography>,
  ],
  items: [
    {
      className: 'C',
      classAlias: 'Gibbon',
      minToken: '1,020',
      minTokenLP: '(2,000 Raydium LP)',
      values: [
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
    {
      className: 'B',
      classAlias: 'Great Ape',
      minToken: '5,100',
      minTokenLP: '(10,000 Raydium LP)',
      values: [
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
    {
      className: 'A',
      classAlias: 'Gorilla',
      minToken: '20,400',
      minTokenLP: '(40,000 Raydium LP)',
      values: [
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
  ],
};

const Template: ComponentStory<typeof MembershipView> = () => <MembershipView {...data} />;

export const Default = Template.bind({});
