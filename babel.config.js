module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ["@babel/preset-react", {runtime: "automatic"}], //this is helping our building library to convert the JSX to normal html code.
    ],
  };