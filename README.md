**Notice: This project is now complete. It won't recieve major updates and releases any more, but it will continue to recive bug fixes and security updates.**

# 👋Hi there~

Welcome to [@Guleixibian2009](https://github.com/guleixibian2009/)'s **Hand-Written-HTML-Site**!

The `Hand-Written-HTML-Site` project is my small experiment to study `HTML` , `CSS` and `JavaScript`. 😀

So why wait? **Let's Start!**

This site finally meets its **Final Version!** Congratulations!

Any great ideas or suggestions? [Contact Us Now!](mailto:guleixibian2009@outlook.com)or [Open an Issue!](https://github.com/Guleixibian2009/Hand-Written-HTML-Site/issues)

## About this project ---- `Hand-Written-HTML-Site`

### Introduction

I started the `Hand-Written-HTML-Site` project on 2022.2.5. I do have a website (actually two), but they are all generated, [one by `Jekyll`](https://guleixibian.github.io/) and [one by `Hexo`](https://guleixibian2009.github.io/).

When I run generated sites, I can only change some settings and I can't change the source code.

So after I have those two sites, I wonder 🤨 whether I can build websites from pure `HTML`.

I have tried several times before, but the effect wasn't exactly what I wanted. 😑 But recently I visited [W3School](https://www.w3school.com.cn/) , I found something new. And then the usage of them makes my `Hand-Written-HTML-Site` become more and more elegant.

* * *

### The Main Core --- HTML

Well, this site is completely hand-written. I don't use any generators, yes, no `Jekyll`, no `Hexo`, and no `BootStrap`. I wrote it by hand. I used `HTML5` so I can use the `<audio>` tag. See that `<!DOCTYPE html>` ?🧐

* * *

#### My server --- GitHub Pages

To deploy the files into a remote site, I'll need a web server. But I don't want to spend any money, so I used `GitHub Pages` as the server. You can go to [pages.github.com](https://pages.github.com/) to learn more. You can use it to build your blog or organization site. Isn't that cool?🎬

* * *

### UI --- CSS and more

#### About the appearance and animations

If a website is a person, then `CSS` is his skin. I used `CSS3` to create fantastic appearance for this site. All the background, heading, everything on the page are beautified by `CSS`.

Try hovering on my photo on the left. It will spin when your mouse is over it. And try those links too! There will be a Tooltip. Some of the animations are created by `CSS`. Now let me give you an example:

```CSS
/*My photo --- rotate*/ 
aside.Sidebar div.Author div.Author_Photo img#Author{ 
    transform: rotateZ(0deg); 
    /*Code from my generated site*/ 
    transition: transform 2s ease-in-out; 
} 
aside.Sidebar div.Author div.Author_Photo:hover img#Author{ 
    transform: rotateZ(360deg); 
}
```

This makes my photo able to spin.🎨 I also used a third-party package for the icons...

* * *

#### Font Awesome Icons

Wanna know where the icons are from? They are `Font Awesome` icons. Try them out now:

```HTML
<i class="fab fa-github"></i> GitHub 
<i class="fa fa-download"></i> Download 
<i class="fa fa-icons"></i> Icons 
<i class="fa fa-palette"></i> Palette
```

That equals to: Amazing, right? 😎

I used an online kit for those icons(but sadly I only have a free kit). The package I mentioned is called `l-lin/font-awesome-animation`. It allows me to create more kinds of font awesome animations. See `faa-tada`! I used it because the original animation doesn't work for me.😐 Visit their [website](https://github.com/l-lin/font-awesome-animation/) to see more demos!

* * *

#### The fonts I used

Do you like those fonts I used? I'll give you a list of them:

1.  Fira Code (that's `Fira Code`)
2.  Bigmouth Regular (that's `Bigmouth Regular`)
3.  Fabfelt Script (that's `Fabfelt Script`)
4.  Gagalin Regular (that's `Gagalin Regular`)
5.  Wander Brave (that's `Wander Brave`)

Go to [my repo](https://github.com/guleixibian2009/hand-written-html-site/) and download if you need them!

* * *

#### Mouse Follower!

Now see cautiously at your cursor. Can you see that red dot?🤓 Now try to move your mouse. It will always follow you wherever you go.

I used `@bva/mouse-follow-js@0.0.8` to create it. Try this on your website!

```JS
"use strict"; 
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

### All the functions --- JavaScript

The use of `JavaScript` (actually `jQuery`) allows me to create beautiful animations and functions. The `Utility Buttons` the `Survey Banner` are built with `jQuery`. You can Press F12 or Ctrl + Shift + I to view the source code!😋

* * *

#### JavaScript I wrote

Well, actually I didn't want to learn `JavaScript` when I started this project... But once I decided to add a `Survey Banner`, I realized that I needed to hide it after several seconds. Then I started to write `JavaScript`.😏

For example:

```JavaScript
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

#### Third-party packages

I'm not a professional programmer, so I used some `npm` packages. They are:

*   clipboardJS@2
*   jquery.scrollTo@2
*   jquery-mousewheel@3
*   highlightJS@11
*   howler@2

`ClipboardJS` is for the `Copy Button`. Try them now, then paste in your editor. `jQuery.scrollTo` is for creating a linear animation when `Back To Top` is on. `jquery-mousewheel` is for listening to `mousewheel` events because `jQuery` cannot listen to `mousewheel` events!

The package I like most is `highlightJS`.🧡 It's a package to "highlight" your code on a website. It supports more than 180 languages, and it provides many themes. I used the `Atom One Light Theme`. The basics are like this:

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/styles/atom-one-light.min.css"> <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/highlight.min.js"></script> <script>hljs.highlightAll();</script>
```

Go to [their website](https://highlightjs.org/) and learn more!

`HowlerJS` is for your background music(preloading). I used to use a `<audio> tag` but it would be very slow. So I used preloading. Well, I wanted to use `XHR` but `CORS` wouldn't let me go pass because I added an `Event Listener`.😥

* * *

#### JSdelivr --- CDNs

So in order to make my website faster, I decided to use some CDNs. For `JavaScript`, I used `JSdelivr`. It may not be very fast in China, but it's better than hosting myself. For images, I used `imgtu.com` to upload. Welcome to visit [my album](https://imgtu.com/album/gIFx0)! For your background music, I used `BitBucket`. It's quite like `GitHub`, but it's much faster.✅

* * *

### Statistics and Counts

When you want to display some data, but you don't want to count it yourself, you can use online projects. They are completely open source so they are safe enough. See them!

* * *

#### shields.io --- badges

The badges (like ![GitHub license](https://img.shields.io/github/license/Guleixibian2009/Hand-Written-HTML-Site?color=lightgreen&label=Article-License&logo=GitHub&style=flat-square)) are generated by `shields.io`. It is a professional badge generator. You can create badges however you like and it's completely free!🤑 Also, it can get information from your social accouts, such as `GitHub`, `BiliBili` and so on. You can also create badges manually:

```
https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>/
```

It's just like filling in the blanks! Go to [shields.io and try it yourself](https://shields.io/)!

* * *

#### busuanzi --- count your visitors

Visitor counting isn't that hard. Just put away those expensive APPs!🤚 `busuanzi` count can easily fulfill your dream.

You can see the statics on the left. Get the magic? It's so easy that you only need one line of code!

```HTML
<script src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js" async></script>
```

There are two display moods. One is `Page View`, the other is `User View`. You can choose what you need. [Count your visitors](https://busuanzi.ibruce.info)!

* * *

So that's all! Thank you for reading~

**If you like this site, you can [clone this repo down](https://github.com/guleixibian2009/hand-written-html-site/). Maybe you can give me a star?✨**

Tip: This site is tested on `Firefox 98.0`. It should work well on `Chrome` too. If you have found some conpatibility problems, please open an issue.

* * *

Last Updated: [![GitHub last commit](https://img.shields.io/github/last-commit/Guleixibian2009/Hand-Written-HTML-Site?logo=github&style=flat-square)](https://github.com/guleixibian2009/Hand-Written-HTML-Site)

Last Tag: ![GitHub tag](https://img.shields.io/github/v/tag/guleixibian2009/Hand-Written-HTML-Site?style=flat-square)

Total Languages: ![GitHub language count](https://img.shields.io/github/languages/count/Guleixibian2009/Hand-Written-HTML-Site?style=flat-square)

License: ![GitHub license](https://img.shields.io/github/license/Guleixibian2009/Hand-Written-HTML-Site?color=lightgreen&label=Article-License&logo=GitHub&style=flat-square)

© Copyright 2022 [Guleixibian2009](https://github.com/guleixibian2009/)

This site is **Purely Hand-Written** with all my heart! Hope you like it!
