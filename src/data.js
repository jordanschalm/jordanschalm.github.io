import Moment from 'moment'

const DATE_F = 'YYYY-MM-DD'
const MONTH_F = 'YYY-MM'

export default {
  projects: {
    current: [
      {
        name: 'CryptoKitties',
        subheader: 'Cofounder',
        url: 'https://cryptokitties.co',
        emoji: '🐈',
        date: {
          start: Moment('2017-07', MONTH_F),
        },
        description: `CryptoKitties is one of the world's first blockchain games.
          It has generated over $23M in P2P sales and has been covered in the 
          [BBC](http://www.bbc.com/news/technology-42237162),
          [New York Times](https://www.nytimes.com/2017/12/28/style/cryptokitties-want-a-blockchain-snuggle.html),
          [Wall Street Journal](https://blogs.wsj.com/cio/2017/12/07/ethereum-network-copes-with-surge-of-activity-as-virtual-kitten-game-goes-viral/),
          and [many others](https://cryptokitties.co/press).
          I prototyped early versions of the game and helped to model and
          develop cat population mechanics and the genetics system. Later, I
          built the [smart contracts](https://www.gettoby.com/p/448v6x9p6tgs) 
          for the auction system of the final product.`,
      },
      {
        name: 'UBC Launch Pad',
        subheader: "Makin' techs",
        url: 'http://ubclaunchpad.com',
        emoji: '🚀',
        date: {
          start: Moment('2015-08', MONTH_F),
        },
        description: `Launch Pad is UBC's largest student-run software 
          engineering club. Members develop their engineering and design skills
          by building projects from conception to release in small, focussed
          teams. For the past year as Co-President, I worked with our exec team
          to improve development processes and make it easier to build cool
          stuff faster.`,
      },
      {
        name: 'TEDxUBC',
        subheader: 'Talking about cats',
        url: 'http://blogs.ubc.ca/tedxubc/',
        emoji: '📽',
        date: Moment('2018-03-03', DATE_F),
        description: `TEDxUBC is an independently organized TED event. I gave
          a talk titled _Cat Ownership in the 21st Century_ about the story of
          CryptoKitties. I discussed how blockchain technology can be used to
          solve problems of digital ownership, and its potential applications
          almost everywhere we use computers to store data.`,
      },
    ],
    older: [
      {
        name: 'ETHWaterloo',
        subheader: 'Hackathon',
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
          project management at [Launch Pad](http://ubclaunchpad.com). 
          New members add their information by talking to Rocket in Slack.
          From there, Rocket automatically updates our website roster, adds
          them to our GitHub organization, and allows team leads to manage
          access to our various resources.`,
      },
      {
        name: 'Cumulus',
        subheader: 'Blockchain investigations',
        url: 'https://github.com/ubclaunchpad/cumulus',
        emoji: '💸',
        date: {
          start: Moment('2017-05', MONTH_F),
          end: Moment('2017-08', MONTH_F),
        },
        description: `Cumulus is an open-source cryptocurrency implementation
          modelled after Bitcoin and Ethereum that I built with a group of
          friends during the summer of 2017. Everything from the blockchain,
          peer-to-peer networking, and consensus was built from scratch (which
          was a lot of fun).`,
      },
      {
        name: 'Guerrilla',
        subheader: 'Contributor',
        url: 'https://github.com/flashmob/go-guerrilla',
        emoji: '✉️',
        description: `Guerrilla is an open-source, extensible SMTP mail server
          written in Go. I developed a real-time analytics dashboard for
          monitoring mail traffic and helped modularize the package to make it
          usable as a component of other projects.`,
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
        name: 'Ubyssey',
        subheader: 'Putting news online',
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
