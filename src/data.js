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
        description: `CryptoKitties is a game about cats built to introduce normal
          people to blockchain technology. I helped prototype early versions
          of the game and helped to model and develop the cat population
          and genetics system. Later, I built the smart contracts for the
          auction system of the final product and helped make our ownership
          contract [ERC721](https://github.com/ethereum/eips/issues/721)-compliant.`,
      },
      {
        name: 'UBC Launch Pad',
        subheader: "Makin' techs",
        url: 'http://ubclaunchpad.com',
        emoji: '🚀',
        date: {
          start: Moment('2015-08', MONTH_F),
        },
        description: `Launch Pad is a student-run software engineering club I 
          have been involved with for the past couple years. For the past year
          as Co-President, I have been working with the exec team to improve
          our development processes to get new members building cool stuff
          faster. Members develop their engineering and design skills by building 
          projects from conception to release in small, focussed teams. We also
          host workshops for the broader UBC tech community focussed on
          technical topics and career development.`,
      },
      {
        name: 'TEDxUBC 2018',
        subheader: 'Talking about cats',
        url: 'http://blogs.ubc.ca/tedxubc/',
        emoji: '📽',
        date: Moment('2018-03-03', DATE_F),
        description: `TEDxUBC is an independently organized TED event. I gave
          a talk titled 'Cat Ownership in the 21st Century' about the story of
          CryptoKitties and blockchains. I discussed how blockchain technology
          can be used to solve problems of digital ownership, and its potential
          applications almost everywhere we use computers to store data.`,
      },
    ],
    older: [
      {
        name: 'Rocket',
        subheader: 'Bleep bloop',
        url: 'https://github.com/ubclaunchpad/rocket',
        emoji: '🤖',
        date: {
          start: Moment('2017-06'),
          end: Moment('2017-08'),
        },
        description: `Rocket is a Slack bot I built to improve the process of
          onboarding new team members and managing teams at
          [Launch Pad](http://ubclaunchpad.com). 
          When a new member joins, they add themselves to the system by talking
          to Rocket in Slack. From there, Rocket automatically updates our 
          website roster, adds them to our GitHub organization, and allows team
          leads to manage their access to our various GitHub teams.`,
      },
      {
        name: 'Cumulus',
        subheader: 'Blockchain investigations',
        url: 'https://github.com/ubclaunchpad/cumulus',
        emoji: '💸',
        date: {
          start: Moment('2017-05'),
          end: Moment('2017-08'),
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
          Eight solutions during an intership between years of my Bachelors
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
  },
}
