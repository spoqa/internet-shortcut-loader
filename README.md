# internet-shortcut-loader

Webpack loader for [internet shortcut file(`.url`)](https://en.wikipedia.org/wiki/Shortcut_(computing)#Microsoft_Windows).
It fetches external content from internet shortcut at bundle time.

## Install
```sh
npm install --save-dev internet-shortcut-loader
```

## webpack.config.js
```js
module.exports = {
    module: {
        loaders: [
            {
                test: /\.url$/,
                loader: 'internet-shortcut-loader'
            }
        ]
    }
};
```
