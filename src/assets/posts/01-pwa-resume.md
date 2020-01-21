# Building Your Resume as a PWA

If you're a web developer, you ought to have a place on the web you can point prospective employers at to showcase your skills.
This can be something as small as a simple resume, to a full-blown blogging platform. And if you're going to build something,
you may as well use some interesting technologies to do so.

[Progress Web Apps](https://developers.google.com/web/progressive-web-apps), or PWAs, use modern web capabilities to deliver a
native app-like experience to users. There are [tons](https://angular.io/guide/service-worker-getting-started) [of](https://ionicframework.com/pwa)
[frameworks](https://pwa-starter-kit.polymer-project.org/) that make developing PWAs painless - but they absolutely are not necessary, and
will hide a lot of the implementation details from you. For this site, we're going to create a PWA using only HTML, CSS, and JavaScript. Better yet,
we'll be creating a PWA that gets a perfect score in every category from [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)!

## What You Need

The only tools you'll need to create this site are a browser and an editor (I recommend [Visual Studio Code](https://code.visualstudio.com/)). For deployment
purposes, we'll be using [Google Firebase](https://firebase.google.com/?gclid=Cj0KCQiAvJXxBRCeARIsAMSkApqdKtGQq2zsWlrAQgfCuDLAplQAs22m0UrbSr95fsvFyNiwP31hzvgaApdkEALw_wcB),
so it'd be helpful to have [Node](https://nodejs.org/en/) installed as well.

## Getting Started

Start by creating your project folder, along with a few files:

```bash
mkdir pwa-resume
cd pwa-resume
touch index.html
touch main.js
touch service-worker.js
touch styles.css
touch manifest.webmanifest
```

To keep things simple, we won't be creating any fancy directory structures or modularizing our code. We'll go over these files
in more detail throughout this guide, but here's a quick breakdown:

1. index.html: the starting point for our app
2. main.js: the main JavaScript file - this will be loaded after our page renders
3. service-worker.js: the [service worker](https://developers.google.com/web/fundamentals/primers/service-workers) code which runs in the background once our app has loaded
4. styles.css: makes the app pretty!
5. manifest.webmanifest: the [web app manifect](https://developer.mozilla.org/en-US/docs/Web/Manifest) describes our app in a JSON format and allows it to be downloaded
   directly to a user's device

You can also add a `me.jpg` (or PNG, or WEBP, or whatever format you prefer) to your project if you want a picture of yourself in your resume.

## index.html

Every great web project starts here. Let's get some boilerplate out of the way:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <link rel="stylesheet" href="/style.css" />
    <title>My Resume</title>
  </head>
  <body>
    <div>My Resume</div>
    <script src="/main.js"></script>
  </body>
</html>
```

A few important things to note here: first, we are linking our Web Manifest file to our app. This tells the browser that this is a PWA and defines some
characteristics of our app. We also set the [viewport meta tag](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) to define how
our app renders itself within the area alloted by the browser. Finally, we import our `main.js` script at the end of the `<body>` tag - this prevents our script
from blocking the rending of the page's content.

## Serving the App

At this point, you could open your `index.html` file directly with your browser. However, better approach would be to spin up a local HTTP server - you can do so
easily with [http-server](https://www.npmjs.com/package/http-server):

```bash
npm install -g http-server
http-server -p 8080
```

This will start a server in the current directory on port 8080 - go to http://localhost:8080 to see your page in action!

TODO put a picture here

Not very interesting... yet! We'll fix that in the next section.

## Building a Resume with CSS Grid

[CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) is a great way to create... well, grid layouts! Similar to tables,
it allows you to layout a page in rows and columns, but grids are much easier to make responsive and provide more freedom to developers.

To start, we'll create our resume's container and divide it into sections. Replace the `<div>My Resume</div>` block in `index.html` with the following:

```html
<article class="resume">
  <section class="name"></section>
  <section class="photo"></section>
  <section class="about"></section>
  <section class="work"></section>
  <section class="education"></section>
  <section class="skills"></section>
</article>
```

In your `styles.css` file, add the following class definition:

```css
.resume {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto auto auto;
}
```

The `resume` class is now a CSS grid container. It contains two columns: the first column takes up 2/3 of the grid, and the second the remaining 1/3. The `fr` unit
in CSS represents a fraction of the available space to give. We also define four rows, each of which has been specified to automatically take up as much space
as it needs to fit its child content.

Next, we'll define each area of our grid in our CSS:

```css
.name {
  grid-area: name;
}
.photo {
  grid-area: photo;
}
/* ...and so on for each section we defined in index.html */
```

And with that, we can define the actual layout of our grid! This is where the power of CSS Grid really shines:

```css
.resume {
  grid-template-areas:
    'name photo'
    'work about'
    'work skills'
    'work education';
}
```

With this, we've told our grid to use the first row to display our name and photo sections. The rest of the first column is completed devoted to our
work section. The second column has rows for each of our other sections. How neat is that?!

## Responsive Design

You may be thinking, "Why wouldn't I just use `display: flex` for this? It has greater browser support and I'm already familiar with it!" Those are both
great points... CSS Grid [works well](https://caniuse.com/#feat=css-grid) in Chrome, Firefox, and Edge, but IE (as usual) is a little bit behind...
However, if you're requirements allow you to focus on modern browsers, there are numerous [benefits](https://dev.to/willamesoares/why-you-should-already-be-using-css-grid-pch)
to CSS Grid - one of my favorites being how easy it is to make it responsive. Let's update our `.resume` class:

```css
.resume {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'photo'
    'name'
    'about'
    'skills'
    'work'
    'education';
}
@media (min-width: 768px) {
  .resume {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      'name photo'
      'work about'
      'work skills'
      'work education';
  }
}
```

Just like that, we have two very different layouts depending on the size of the user's device! Go ahead and try this out in your browser by resizing your window.
You'll see that when you get below `768px`, your layout changes to a single column, moving your photo to the top! To update your layout, simply need to update
the `grid-template-areas` definition.

## The Resume

For brevity, I won't delve too deep into the HTML and styling needed to add the actual content of your resume to the page. You just need to plop in the proper
markup into each section, and your grid will handle laying everything out nicely. If you need some inpiration, take a look at the final code for this
project found TODO

TODO image of my resume

## The Service Worker

Once your page loads, we want to cache all the assets used so that subsequent visits to the page are faster to load, and even work offline. To do this, we
will register a (service worker)[https://developers.google.com/web/ilt/pwa/introduction-to-service-worker]. Add the following to `main.js`:

```js
// make sure the browser supports the navigator API
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    // register our service worker
    .register('/service-worker.js')
    .then(registration => {
      console.log(
        'Successfully registered service worker for scope:',
        registration.scope
      );
    })
    .catch(error => {
      console.error('Failed to register service worker:', error);
    });
}
```

This will run the script defined in `service-worker.js`, which will define how to install and cache resources for your app. We will want to tell our service worker
which files it should cache, and when to cache them. To do so, add the following to `service-worker.js`:

```js
// for our app to update when we make changes, we'll need to update
// the version here on each deploy
const CACHE_NAME = 'cache-v1';

// array of URLs to cache on app startup - add any images you used
// in your resume here as well
const PRECACHE_URLS = ['index.html', 'styles.css'];

// listen for the install event
self.addEventListener('install', event => {
  event.waitUntil(
    // open the cache we name above
    caches.open(CACHE_NAME)
      // add all our precache resources to the cache
      .then(cache => cache.addAll(PRECACHE_URLS));
  )
});
```

With just a few lines of code, you've made your page available when the user is offline (as long as they've visited your page before, of course)! Try
it out for yourself; go to your page and open your developer tools (F12 in Chrome). In the Network tab, change your status to Offline - then refresh
the page. You should see your complete resume, images and all!

For a more complete (but still very basic) service worker, check out [this sample](https://googlechrome.github.io/samples/service-worker/basic/) provided
by Google. It will add on to what we built above by cleaning up previous precached entries and caching assets as they're requested, rather than expecting
everything to be cached upfront.

## The Web Manifest

The last piece of the PWA puzzle is our [Web Manifest](https://developers.google.com/web/fundamentals/web-app-manifest) file. This is a simple JSON
file that defines a handful of properties about how our app should behave when installed on a user's device. Add the following to `manifest.webmanifest`:

```json
{
  "short_name": "My Name",
  "name": "My Name",
  "start_url": ".",
  "background_color": "#ffffff",
  "display": "standalone",
  "theme_color": "#fafafa",
  "icons": [
    {
      "src": "/images/icon-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/images/icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```

TODO add icons, favicon
