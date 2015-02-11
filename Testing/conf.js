exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  }, 
  
  specs: ['spec.js'],
  
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
