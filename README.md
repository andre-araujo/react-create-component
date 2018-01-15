# React Create Component.

A command line component generator with a React, Jest, Styled-components and storybook template component.


## Installing

### Installing globally with npm

- `sudo npm install react-create-component -g`

### Installing globally with npm-link

- clone the project
- `git clone https://github.com/andre-araujo/react-create-component.git`
- navigate to project folder
- `cd /react-create-component`
- use npm link
- `npm link`


## Usage

- Generate component into current directory
- `react-create-component ComponentName`

- Generate component into subdirectory
- `react-create-component ComponentName ./existing-folder-path`

## Generated directory

```
/ComponentName
    /ComponentName.js
    /ComponentName.spec.js
    /ComponentName.stories.js
    /styles.js
    /index.js
```
