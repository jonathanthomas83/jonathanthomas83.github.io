---
layout: post
title:  "Deploying your prototype online with Heroku"
date:   2016-01-02 11:26:00 +0000
categories: govuk node heroku windows
post_image: heroku-toolbelt
---
Now that you have your prototype working locally (See [setting up the govuk_prototype_kit]({% post_url 2015-12-30-setting-up-the-govuk-prototype-kit-on-windows %})), you'll want to publish it somewhere so that others can see it, introducing [Heroku][heroku]. Heroku is a platform as a service that allows developers to create apps and serve them "in the cloud".

Setting up and installing Heroku toolbelt
-----------------------------------------
It's worth mentioning that the heroku toolbelt isn't an application you can open and see in your applications list, it's a command line tool for creating and managing Heroku apps.

* Sign up for a [Heroku][heroku] account
* Download and install the **[heroku toolbelt][heroku-toolbelt]**
* Start up your favourite commmand line interface - we used Windows commmand Prompt last time - so type "cmd" on the Windows search if you want to use that
* Type `heroku login` and when prompted, enter your heroku registered email address and password
* Change directory into your project, here's where mine is `cd /Users/Username/Documents/Projects/govuk_prototype_kit-test`
* Type `heroku create`

This should give you the following output, with different domain names, uniquely created for you:

`Creating cryptic-garden-4610... done, stack is cedar-14
http://cryptic-garden-4610.herokuapp.com/ | https://git.heroku.com/cryptic-garden-4610.git
Git remote heroku added`

Deploying your prototype
------------------------
When you installed the *toolbelt*, *Git* was installed too, allowing you to type *git* commands on the <acronym title="Command Line Interface">CLI</acronym>. So following the Heroku documentation, we'll deploy using a few git commands.

* Ensure that you are in the prototype folder, if not `cd` (Change Directory) to that directory
* Type `git init`
* Type `heroku git:remote -a cryptic-garden-4610` using the unique domain that you were given when you did "heroku create"
* Type `git add .`
* Type `git commit -am "make it better"`
* Type `git push heroku master`

Setting up password protection for your published prototype
-----------------------------------------------------------
If you try visiting [https://cryptic-garden-4610.herokuapp.com/][cryptic-garden-4610.herokuapp.com] (your new Heroku app URL), at this point, you won't see anything other that an error stating you need to set a Username and Password.

* Type `heroku config:set USERNAME=username_here`
* Type `heroku config:set PASSWORD=password_here`
* Or, type `heroku config:set USE_AUTH=false` if you don't want password protection
* Or, you can set these values in the Heroku dashboard, via "Settings" > "Config Variables"
  * Remember to type "USERNAME" and "PASSWORD" in the boxes on the left and the value you wish to set in the corresponding boxes to the right.

Deploying changes
-----------------
* If you make a change to your prototype, commit your changes as usual then type `git push heroku master`

Deploying different versions
----------------------------
It's useful to run two versions of your prototype, one which you're happy for people to see - "master", and an experimental version, which I'll call "develop". If you've followed the instructions above, you already have a "master" version online.

To create a develop version:

* Type `git checkout -b develop`

You'll then need to add a "develop" heroku remote app, to see the changes you make to this experimental version, online.

* type `heroku apps:create --remote develop [develop-name]` (you can make up any name you wish)
* Type `git push develop develop:master` - you have to add 'develop:master' otherwise Heroku assumes you want the master branch to be deployed
* View your experimental app at **[develop-name].herokuapp.com**

**Note** that you'll be asked to set ausername and password for the newly deployed version of your site, you can do this by:

* heroku config:set USERNAME=username_here -r remotename_here
* heroku config:set PASSWORD=password_here -r remotename_here
* Or, type `heroku config:set USE_AUTH=false -r remotename_here` if you don't want password protection
* Or, you can set these values in the Heroku dashboard, via "Settings" > "Config Variables"
  * Remember to type "USERNAME" and "PASSWORD" in the boxes on the left and the value you wish to set in the corresponding boxes to the right.

Running locally
---------------
You can run Heroku apps locally by typing `heroku local web`

[heroku]: https://www.heroku.com/
[heroku-toolbelt]: https://toolbelt.heroku.com/
[cryptic-garden-4610.herokuapp.com]: https://cryptic-garden-4610.herokuapp.com/
