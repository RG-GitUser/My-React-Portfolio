//Adding rule to process css files using PostCSS and Tailwind CSS
module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
  };