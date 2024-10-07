const parseArgs = () => {
    const args = process.argv.slice(2);
    const props = {};
  
    for (let i = 0; i < args.length; i += 2) {
      const propName = args[i].replace(/^--/, '');
      const propValue = args[i + 1];
      props[propName] = propValue;
    }
  
    for (const propName in props) {
      console.log(`${propName} is ${props[propName]}`);
    }
};

parseArgs();