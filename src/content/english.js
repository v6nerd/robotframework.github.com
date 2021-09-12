export default () => ({
  langName: 'English',
  newsBanner: '🎉 RF 4.0 is out! <a href="www.google.com">Click here</a> for release notes',
  navbar: {
    items: [
      'Introduction',
      'Getting started',
      'Community',
      'Resources'
    ],
    dropdownName: 'Links',
    dropdown: [
      {
        name: 'Github',
        url: 'https://github.com/robotframework/robotframework',
        description: 'Source code + issues'
      },
      {
        name: 'Forum',
        url: 'http://forum.robotframework.org/',
        description: 'Discuss Robot Framework'
      },
      {
        name: 'Foundation',
        url: 'https://robotframework.org/foundation/',
        description: 'Support the development'
      },
      {
        name: 'Robocon',
        url: 'https://robocon.io/',
        description: 'Annual conference'
      },
      {
        name: 'Shop',
        url: 'https://reddyshop.co/robotframework/',
        description: 'Support the development'
      },
      {
        name: 'RPA',
        url: 'https://robotframework.org/rpa/',
        description: 'RPA stuff'
      }
    ]
  },
  introduction: {
    title: 'Introduction',
    body:
      `Robot Framework is a generic open source automation framework.
      It can be used for test automation and robotic process automation (RPA).<br><br>

      Robot Framework is actively supported, with many industry-leading companies using
      it in their software development.<br><br>

      Robot Framework is open and extensible. Robot Framework can be integrated with virtually any
      other tool to create powerful and flexible automation solutions.
      Robot Framework is free to use without licensing costs.<br><br>

      Robot Framework has easy syntax, utilizing human-readable keywords. Its capabilities can be extended
      by libraries implemented with Python, Java or many other programming languages.
      Robot Framework has a rich ecosystem around it, consisting of libraries and tools that are developed as separate projects.`,
    companies: [
      {
        name: 'ABB',
        description: 'ABB is using Robot Framework in software development for testing distribution automation related configuration tools, web interfaces and embedded devices.',
        imgName: 'ABB.svg'
      },
      {
        name: 'Cisco',
        description: 'Cisco’s Customer Experience (CX) supports the testing & validation of Cisco and 3rd party solutions deployed by our customers. This includes Solution Validation Services (SVS) delivered both on Cisco-premise and customer-premise.',
        imgName: 'Cisco.svg'
      },
      {
        name: 'Condé Nast',
        description: 'Condé Nast <a href="https://technology.condenast.com/story/automated-testing-qa-brand-sites-robot-framework">transformed their quality assurance for their brand sites,</a> such as Brides, Wired and Architectural Digest, from an entirely manual process to automated one with Robot Framework.',
        imgName: 'Condé_Nast.svg'
      },
      {
        name: 'KONE',
        description: 'KONE is widely using Robot Framework in software development for testing embedded systems in elevators and escalators.',
        imgName: 'Kone.svg'
      }
    ]
  },
  gettingStarted: {
    title: 'Getting Started',
    body:
      'Install & Write your first test',
    tabs: [
      {
        name: 'Install',
        description: `
          <p>Install Robot Framework, python and bunch of other stuff.</p>
          <p>Supports paragraphs.</p>
          <code>pip install</code>
          `
      },
      {
        name: 'Your first test',
        description: 'Some example test here'
      },
      {
        name: 'Further Learning',
        description: 'Some example test here'
      }
    ]
  },
  community: {
    title: 'Community',
    body:
      `Robot Framework has a vibrant community around it with various online forums, annual
      RoboCon conference, and meetup groups around the world.`,
    links: {
      forum: {
        title: 'Forum',
        description: 'Official Robot Framework forum.'
      },
      slack: {
        title: 'Slack',
        description: 'Community team chat. Click to get invited!'
      },
      mailingList: {
        title: 'Mailing list',
        description: 'Google groups community mailing list.'
      }
    }
  },
  resources: {
    title: 'Resources',
    body:
      'If you want to add your library here, make a PR.',
    tabs: [
      {
        name: 'Standard Libraries',
        nameMobile: 'Libraries',
        key: 'builtinLibraries',
        description: `Libraries provide the actual automation and testing capabilities to
        Robot Framework by providing keywords. Standard libraries are bundled with the framework.`
      },
      {
        name: 'Built-in Tools',
        nameMobile: 'Tools',
        key: 'builtinTools',
        description: `Libraries provide the actual automation and testing capabilities to
        Robot Framework by providing keywords. Standard libraries are bundled with the framework.`
      },
      {
        name: 'External Libraries',
        nameMobile: 'Libraries',
        key: 'libraries',
        description: `Separately developed external libraries that
        can be installed based on your needs. Creating your own libraries is a breeze.`
      },
      {
        name: 'External Tools',
        nameMobile: 'Tools',
        key: 'tools',
        description: `Supporting tools ease automation: editing, running, building and so on.
        Most of these tools are developed as separate projects, but some are built into the framework itself.`
      }
    ],
    mobileTitles: [
      'Standard',
      'External'
    ]
  }
})
