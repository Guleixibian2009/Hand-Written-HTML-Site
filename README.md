# 👋Hi there~

Welcome to [@Guleixibian2009](https://github.com/guleixibian2009/)'s **Hand-Written-HTML-Site**!

The `Hand-Written-HTML-Site` project is my small experiment to study `HTML` , `CSS` and `JavaScript`. 😀

So why wait? **Let's Start!**

This site finally meets its **1.0.0 Version!** Congratulations!

Any great ideas or suggestions? [Contact Us Now!](mailto:guleixibian2009@outlook.com)or [Open an Issue!](https://github.com/Guleixibian2009/Hand-Written-HTML-Site/issues)

## About this project ---- `Hand-Written-HTML-Site`

### 0. Introduction

I started the `Hand-Written-HTML-Site` project on 2022.2.5. I do have a website (actually two), but they are all generated, [one by `Jekyll`](https://guleixibian.github.io/) and [one by `Hexo`](https://guleixibian2009.github.io/) .

When I run generated sites, I can only change some settings and I can't change the source code.

So after I have those two sites, I wonder 🤨 whether I can build websites from pure `HTML`.

I have tried several times before, but the effect wasn't exactly what I wanted. 😑 But recently I visited [W3School](https://www.w3school.com.cn/) , I found something new. And then the usage of them makes my `Hand-Written-HTML-Site` becomes more and more elegant.

* * *

### 1. The Main Core --- HTML

Well, this site is completely Hand-Written. I don't use any generators, yes, no `Jekyll`, no `Hexo`, and no `BootStrap`. I wrote it by hand. I used `HTML5` so I can use the `<audio>` tag. See that `<!DOCTYPE html>` ?

* * *

### 2. UI --- CSS and more

#### 2.1 About the appearence and animations

If a website is a person, then `CSS` is his skin. I used `CSS3` to create fantastic appearence for this site. All the background, heading, everything on the page are beautified by `CSS`.

Try hover on my photo on the left. It will spin when your mouse is over it. And try those links too! There will be a Tooltip. Some of the animations are created by `CSS`. Now let me give you an example:

```css
.Sidebar .Author div.Author_Photo img#Author{ 
    transform: rotateZ(0deg);
    transition: transform 2s ease-in-out; 
} 
.Sidebar .Author div.Author_Photo:hover img#Author{ 
    transform: rotateZ(360deg); 
}
```

This makes my photo able to spin. I also used a third-party package for the icons...

* * *

#### 2.2 Font Awesome Icons

Wanna know where are the icons from? They are `Font Awesome` icons. Try them out now:

```html
<i class="fab fa-github"></i> GitHub 
<i class="fa fa-download"></i> Download 
<i class="fa fa-icons"></i> Icons 
<i class="fa fa-palette"></i> Palette
```

That equals to: Amazing, right? 😎

I used a online kit for those icons(but ~sadly I only have a free kit~). The package I mentioned is call `l-lin/font-awesome-animation`. It allows me to create more kinds of font awesome animations. See `faa-tada` ! I used it because the original animation doesn't work for me. Visit their [website](https://github.com/l-lin/font-awesome-animation/) to see more demo!

* * *

#### 2.3 The fonts I used

Do you like those fonts I used? I'll give you a list of it:

1.  Fira Code (that's `Fira Code`)
2.  Bigmouth Regular (that's `Bigmouth Regular`)
3.  Fabfelt Script (that's `Fabfelt Script`)
4.  Gagalin Regular (that's `Gagalin Regular`)
5.  Wander Brave (that's `Wander Brave`)

Go to [my repo](https://github.com/guleixibian2009/hand-written-html-site/) and download if you need them!

* * *

#### 2.4 Mouse Follower!

Now see cautiously at your cursor. Can you see that red dot? Now try move your mouse. It will always follow you wherever you go.

I used `@bva/mouse-follow-js@0.0.8` to create that. Try this in your website!

```
$(document).ready(function(){ 
    const followOptions = { 
        color : 'indianred', 
        height : 10, 
        width : 10, 
        transitionDelay: 0, 
        transitionDuration: 100 
        }; 
    const follow = new MouseFollow(followOptions); 
    follow.initialize(); 
});
```

* * *

### 3. All the functions --- JavaScript

the use of `JavaScript` (actually `jQuery`) allows me to create beautiful animation and function. The `Utility Buttons` the `Survey Banner` are built with `jQuery`. You can Press F12 or Ctrl + Shift + I to view the source code!

* * *

#### 3.1 JavaScript I wrote

Well actually I didn't want to learn `JavaScript` when I started this project... But once I decided to add a `Survey Banner`, I realized that I need to hide it after several seconds. Then I started to write `JavaScript`.

For example:

```JS
"use strict"; 
$(document).ready(function(){ 
    const banner = $(".Survey_Banner"); 
    function BannerDisappear(){ 
        $(banner).hide(500); 
    } 
    window.setTimeout(BannerDisappear, 10000); 
});
```

If you have learned `JavaScript` for a bit, you will know that `$` stands for `jQuery`.

* * *

#### 3.2 Third-party packages

I'm not a professional programmer, so I used some `npm` packages. They are:

*   clipboardJS@2
*   jquery.scrollTo@2
*   jquery-mousewheel@3
*   highlightJS@11
*   howler@2

`ClipboardJS` is for the `Copy Button`. Try them now then paste in your editor. `jQuery.scrollTo` is for creating a linear animation when `Back To Top` is on. `jquery-mousewheel` is for listening `mousewheel` events because `jQuery` cannot listen to `mousewheel` events!

The package I like most is `highlightJS`. It's a package to "highlight" your code on a website. It supports more than 180 languages, and it provides many themes. I used the `Atom One Light Theme`. The basics are like this:

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/styles/atom-one-light.min.css"> 
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/highlight.min.js"></script> 
<script>hljs.highlightAll();</script>
```

Go to [their website](https://highlightjs.org/) and learn more!

`HowlerJS` is for your background music(preloading). I used to use a `<audio> tag` but it would be very slow. So I used preloading. Well I wanted to use `XHR` but `CORS` wouldn't let me go pass because I add a `Event Listener`.

* * *

#### 3.3 JSdelivr --- CDNs

So in order to make my website faster, I decided to use some CDNs. For `JavaScript`, I used `JSdelivr`. It may not be very fast in China, but it's better than hosting myself. For images, I used `imgtu.com` to upload. Welcome to visit [my album](https://imgtu.com/album/gIFx0)! For your background music, I used `BitBucket`. It's quite like `GitHub`, but it's much faster.

* * *

### 4. Statics and Counts

When you want to display some data, but you don't want to count it yourself, you can use online projects. They are completely opensource so they are safe enough. See them!

* * *

#### 4.1 shields.io --- badges

The badges (like![GitHub license](https://img.shields.io/github/license/Guleixibian2009/Hand-Written-HTML-Site?color=lightgreen&label=Article-License&logo=GitHub&style=flat-square)) are generated by `shields.io`. It is a professional badge generator, you can create badges however you like and it's completely free!🤑 Also it can get information from your social accouts,such as `GitHub`, `BiliBili` and so on. You can also create badges manually:

```
https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>/
```

It's just like filling in the blanks! Go to [shields.io and try it yourself](https://shields.io/)!

* * *

#### 4.2 busuanzi --- count your visitors

Visitor counting isn't that hard. Just put away those expensive projects! `busuanzi` count can easily fulfill your dream.

Currently I have {Sorry, not loaded} visitors and {Sorry, not loaded} page views in total. Get the magic? It's so easy that you only need one line of code!

<script src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js" async></script>

There are two display moods. One is `Page View`, the other is `User View`. You can choose what you need. [Count your visitors](https://busuanzi.ibruce.info)!

* * *

So that's all! Thank you for reading~

**If you like this site, you can [clone this repo down](https://github.com/guleixibian2009/hand-written-html-site/). Maybe you can give me a star?**

Last Updated: [![GitHub last commit](https://img.shields.io/github/last-commit/Guleixibian2009/Hand-Written-HTML-Site?logo=github&style=flat-square)](https://github.com/guleixibian2009/Hand-Written-HTML-Site)

Last Tag: ![GitHub tag](https://img.shields.io/github/v/tag/guleixibian2009/Hand-Written-HTML-Site?style=flat-square)

Total Languages: ![GitHub language count](https://img.shields.io/github/languages/count/Guleixibian2009/Hand-Written-HTML-Site?style=flat-square)

License: ![GitHub license](https://img.shields.io/github/license/Guleixibian2009/Hand-Written-HTML-Site?color=lightgreen&label=Article-License&logo=GitHub&style=flat-square)

© Copyright 2022 [Guleixibian2009](https://github.com/guleixibian2009/)

This site is **Purely Hand-Written** with all my heart! Hope you like it!
