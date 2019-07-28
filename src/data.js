import Moment from 'moment'

const DATE_F = 'YYYY-MM-DD'
const MONTH_F = 'YYY-MM'

export default {
  projects: {
    current: [
      {
        name: 'Dapper Labs',
        subheader: 'Senior Software Engineer',
        url: 'https://dapperlabs.com',
        emoji: '🧪',
        date: {
          start: Moment('2018-04', MONTH_F),
        },
        description: `Dapper Labs uses the power of play to deliver
          blockchain-based experiences that are ready for the real world.
          We aim to bring the benefits of decentralization to the first 
          billion consumers through the power of play, fairness, and true
          ownership. Our products include
          [CryptoKitties](https://www.cryptokitties.co/),
          [Dapper](https://www.meetdapper.com/),
          and [Cheeze Wizards](https://www.cheezewizards.com/).`,
      },
      {
        name: 'Dapper',
        subheader: 'Blockchain Interface',
        url: 'https://meetdapper.io',
        emoji: '🦄',
        date: {
          start: Moment('2018-09', MONTH_F),
        },
        description: `Dapper is a wallet built using smart contract technology.
          It makes accessing blockchain experiences easier and more secure by
          leveraging a unique [smart contract design](https://github.com/dapperlabs/dapper-contracts) that enables fraud prevention, intelligent transaction fee management, and account recovery.`
      },
      {
        name: 'CryptoKitties',
        subheader: 'Co-Creator',
        url: 'https://cryptokitties.co',
        emoji: '🐈',
        date: {
          start: Moment('2017-07', MONTH_F),
        },
        description: `CryptoKitties is the world's furriest blockchain experience.
          It defined the [standard for non-fungible tokens](https://www.youtube.com/channel/UCfF9ZO8Ug4xk_AJd4aeT5HA/playlists)
          and has generated over $25M in P2P sales. I built the
          [smart contracts](https://www.gettoby.com/p/448v6x9p6tgs)
          for the P2P auction system of the final game and helped to model kitty
          population and genetic mechanics. CrypoKitties has been covered in the
          [BBC](http://www.bbc.com/news/technology-42237162),
          [New York Times](https://www.nytimes.com/2017/12/28/style/cryptokitties-want-a-blockchain-snuggle.html),
          [Wall Street Journal](https://blogs.wsj.com/cio/2017/12/07/ethereum-network-copes-with-surge-of-activity-as-virtual-kitten-game-goes-viral/),
          and [many others](https://cryptokitties.co/press).
        `,
          
       },
    ],
    older: [
      {
        name: 'ETHNewYork',
        subheader: 'Tech Talk',
        url: 'https://www.youtube.com/watch?v=daRmJrqfHv8',
        emoji: '🏙',
        date: Moment('2018-05-18', DATE_F),
        description: `ETHNewYork is a Ethereum hackathon in Brooklyn, NYC. I presented
          a tech talk about the open source smart contract architecture underlying
          [Dapper](http://www.meetdapper.io). I discussed the authorization system, which enables multi-device
          2FA and arbitrary on-chain or off-chain transaction validation, as well as
          the recovery system, which enables regaining access to Dapper in the case
          that all devices are lost or compromised.`
      },
      {
        name: 'Axiom Zen',
        subheader: 'Software Engineer',
        url: 'https://axiomzen.co',
        emoji: '👨‍💻',
        date: {
          start: Moment('2017-05', MONTH_F),
          end: Moment('2018-04', MONTH_F),
        },
        description: `Axiom Zen is a venture studio based in Vancouver, Canada.
          I worked on several projects, including
          [Toby](https://www.gettoby.com/), an indispensable tab-taming Chrome
          extension, and [CryptoKitties](https://cryptokitties.co), the world's
          furriest blockchain game.`
      },
      {
        name: 'BASc Computer Engineering',
        subheader: 'Learning',
        url: 'https://ubc.ca',
        emoji: '🎓',
        date: {
          start: Moment('2013-09', MONTH_F),
          end: Moment('2018-04', MONTH_F),
        },
        description: `In May 2018, I completed a Bachelors of Applied Science
          in Computer Engineering at the University of British Columbia.`,
      },
      {
        name: 'UBC Launch Pad',
        subheader: "Makin' techs",
        url: 'https://ubclaunchpad.com',
        emoji: '🚀',
        date: {
          start: Moment('2015-08', MONTH_F),
          end: Moment('2018-05', MONTH_F),
        },
        description: `Launch Pad is [UBC's](https://www.ubc.ca/) largest
          student-run software engineering club. I led the executive team to
          standardize engineering process and streamline recruitment in service
          of increasing the organization's ability to support more members and
          enabling those members to build skills more quickly. Some cool
          projects we've built since then include a [speaker diarization API](https://github.com/ubclaunchpad/minutes),
          a [self-hosted continuous deployment tool](https://github.com/ubclaunchpad/inertia),
          and a [collaborative Etch-a-Sketch](https://github.com/ubclaunchpad/etch.io).`,
      },
      {
        name: 'TEDxUBC',
        subheader: 'Feline Discussions',
        url: 'https://www.youtube.com/watch?v=29W67cSPnRc',
        emoji: '📽',
        date: Moment('2018-03-03', DATE_F),
        description: `TEDxUBC is an independently organized TED event. I gave
          a talk titled _Cat Ownership in the 21st Century_ about the story of
          CryptoKitties. I discussed how blockchain technology can be used to
          solve problems of digital ownership, and its potential applications
          almost everywhere we use computers to store data.`,
      },
      {
        name: 'ETHWaterloo',
        subheader: 'BUIDL',
        url: 'https://ethwaterloo.com/',
        emoji: '🔨',
        date: Moment('2017-10-15', DATE_F),
        description: `ETHWaterloo was the world's largest Ethereum hackathon,
          with over 400 participants. My team
          [won](https://www.newswire.ca/news-releases/cats-invade-worlds-largest-ethereum-hackathon-651263343.html)
          with [Rufflet](https://rufflet.cryptokitties.co/), a Mixpanel-style
          analytics tool for smart contracts. At the same time we were
          polishing off the beta version of CryptoKitties and releasing it for
          the hackers at ETHWaterloo to
          [play with](https://motherboard.vice.com/en_us/article/bj78jv/cryptokitties-blockchain-cats-axiom-zen-game).`,
      },
      {
        name: 'Rocket',
        subheader: 'Bleep bloop',
        url: 'https://github.com/ubclaunchpad/rocket',
        emoji: '🤖',
        date: {
          start: Moment('2017-06', MONTH_F),
          end: Moment('2017-08', MONTH_F),
        },
        description: `Rocket is a Slack bot I built to improve onboading and
          project management at [Launch Pad](https://ubclaunchpad.com).
          New members add their information by talking to Rocket in Slack.
          From there, Rocket automatically updates our website roster, adds
          them to our GitHub organization, and allows team leads to manage
          access to our various resources.`,
      },
      {
        name: 'Cumulus',
        subheader: 'Blockchain ',
        url: 'https://github.com/ubclaunchpad/cumulus',
        emoji: '💸',
        date: {
          start: Moment('2017-05', MONTH_F),
          end: Moment('2017-08', MONTH_F),
        },
        description: `Cumulus is an open-source cryptocurrency implementation
          modelled after Bitcoin and Ethereum that I built with a group of
          friends at [Launch Pad](https://ubclaunchpad.com). Everything from
          the blockchain, peer-to-peer networking, and consensus was built
          from the ground up.`,
      },
      {
        name: 'Guerrilla',
        subheader: 'Open Source',
        url: 'https://github.com/flashmob/go-guerrilla',
        emoji: '✉️',
        description: `Guerrilla is an open-source, extensible SMTP mail server
          written in Go. I developed a real-time analytics dashboard for
          monitoring mail traffic and helped modularize the package to make it
          reusable as a component of other projects.`,
      },
      {
        name: 'Eight Solutions',
        subheader: 'Data visualizing',
        date: {
          start: Moment('2016-01', MONTH_F),
          end: Moment('2016-12', MONTH_F),
        },
        url: 'https://eightsolutions.com',
        emoji: '📈',
        description: `I worked on the [Cumul8](https://cumul8.com/) project of
          Eight Solutions during an intership between years of my
          degree. There I worked on building custom data visualization
          dashboards and developing a system for automatically summarizing and
          finding potentially interesting patterns in arbitrary datasets.`,
      },
      {
        name: 'The Ubyssey',
        subheader: 'Since 1918',
        date: {
          start: Moment('2015-08', MONTH_F),
          end: Moment('2015-12', MONTH_F),
        },
        url: 'https://ubyssey.ca',
        emoji: '📰',
        description: `The Ubyssey is UBC's student newspaper and the largest
          student newspaper in Western Canada. While working there I helped
          build [Dispatch](https://github.com/ubyssey/dispatch), the
          open-source publishing platform that powers
          [ubyssey.ca](https://ubyssey.ca).`,
      },
    ],
    minor: [
      {
        name: 'Technical Introduction to Blockchain',
        date: Moment('2018-03-24', DATE_F),
        url:
          'https://docs.google.com/presentation/d/1m_QU1NWzE0yPk7wVUEqBBn_FCTvB4kt52XUupjMihEw/edit?usp=sharing',
        description: `I gave a presentation at UBC Launch Pad Tech Talks about
          the technical details of blockchains.`,
      },
      {
        name: 'Cumulus: Practical Aspects of Implementing a Cryptocurrency',
        date: Moment('2017-11-04', DATE_F),
        url:
          'https://docs.google.com/presentation/d/1h8fB5PGuWnmV33jGY3WWFz9SIDyC9Kx8gVhvqvzBdp8/edit?usp=sharing',
        description: `The Cumulus team gave a presentation detailing the design
          of our cryptocurrency implementation to the UBC Blockchain Club.`,
      },
      {
        name: 'Intro to React',
        date: Moment('2017-03-27', DATE_F),
        url:
          'https://www.facebook.com/events/676299582548975/permalink/679400582238875/',
        description: `I presented a technical overview of React, including how
          to target different platforms with Electron and React Native.`,
      },
      {
        name: 'Introduction to Modern Web Development',
        date: Moment('2016-03-04', DATE_F),
        url:
          'https://docs.google.com/presentation/d/1eHXmA_mMeKXemRjTf7ty3h7HCDNUpbJrDxvKmvvZwh0/edit?usp=sharing',
        description: `I presented an interactive workshop at BizHacks 2016
          introducing non-technical students to modern web development tools.`,
      },
    ],
  },
}
