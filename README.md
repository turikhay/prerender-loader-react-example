# What's this?
Just a simple example using React, webpack and [prerender-loader](https://github.com/GoogleChromeLabs/prerender-loader/).

Compile it and take a look into `dist/landing_page.html`. You'll see
```html
<div>I'm a landing page!</div>
```
that was rendered during compile-time from `<LandingPage />`.

## Why?
This was inspired by Nir Ben-Yair's article [Rendering static HTML with React, Webpack & Prerender-loader](https://theblog.workey.co/rendering-static-html-pages-with-react-webpack-prerender-loader-8ffcc3a9691).
Frankly, I was missing a working example, so and decided to make my own.

## How to use?
Very simple.
```
npm install
npm run build-static
```

After compilation files will be avalable in the `dist/` folder.


## Limitations
* You can't run `webpack-dev-server` to see how this works live. See [this issue](https://github.com/GoogleChromeLabs/prerender-loader/issues/16).