# Brightly

The old site for my band, Brightly. A single page with the latest release, a newsletter signup, the next gig, and a grid of recent Instagram photos.

Status: archived. Made in 2013, last updated in 2015, not maintained. Brightly's site now lives at [wewerebrightly.com](https://wewerebrightly.com).

## Running it

You'll need Node, Bower, the Grunt command-line tool and Ruby with Compass. These are 2013-era versions of all of them, so expect to fight the install.

```sh
npm install
bower install
gem install compass
grunt server      # serves locally with live reload
grunt build       # builds into dist/
```

It was deployed to GitHub Pages with `git subtree push --prefix dist origin gh-pages`.

## How it works

- A Yeoman-style Angular 1.2 app. `app/index.html` is the page, `app/scripts/` holds the CoffeeScript, and `app/styles/` holds the Sass.
- The gig and feed sections load JSONP from [brightly-server](https://github.com/superhighfives/brightly-server). On localhost it uses a server on port 5000 instead, unless you add `?live=1`.
- `dist/` holds the last build.
