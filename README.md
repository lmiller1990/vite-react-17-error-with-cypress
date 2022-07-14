```
yarn
yarn cypress open --component --browser chrome 
```

Click test, boom!

Build is a pre-release Cypress https://github.com/cypress-io/cypress/pull/22437

Main change is using dynamic import to conditionally load React. https://github.com/cypress-io/cypress/pull/22437/files#diff-deaf32d610fd1088b9d1a39d5b49198b98fcaba2d2b1b8942df73ed9961551e0R49-R65

React 18 works fine. WTF?

Note: React 18 has `exports`. React 17 does not. Related? Not sure...

https://github.com/facebook/react/blob/v18.0.0/packages/react/package.json#L22-L30
