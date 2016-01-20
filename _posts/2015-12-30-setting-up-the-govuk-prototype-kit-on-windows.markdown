---
layout: post
title:  "How to set up the govuk_prototype_kit on Windows"
date:   2015-12-30 12:37:00 +0000
categories: govuk node npm windows
post_image: govuk-prototype-kit
---
The **[govuk_prototype_kit]** is a quick and easy way to develop high fidelity prototypes for projects that need to look like Gov.UK. There is plenty of advice on using the kit on the GitHub pages, but here is a quick tutorial for setting up Node.js and NPM on Windows in order to make things just work. It's simple and quick!

Download and install Git for Windows
------------------------------------
* Download and install [Github for Windows][https://git-scm.com/download/win]
* Follow the steps, until you get asked about "Adjusting your PATH environment", choose "Use Git from the Windows Command Prompt"
![Choose "Use Git from the Windows Command Prompt"](/images/git-for-windows.jpg "Git for Windows setup")

Setting up Node.js and NPM
--------------------------
* Download and install **[node.js]** ensuring you using the correct installer for your system (32 bit or 64 bit)
* Run the .msi executable file that is likely now waiting for you in your "Downloads" folder
* Follow the simple step by step installation wizard - there shouldn't be anything to catch you out at this point, just keep all the defaults
* Restart your computer

Test to see if it works
-----------------------
* In your windows search box, type "cmd"
* Right click (or "shift" + "F10") "Command Prompt" and select "Run as administrator" from the context menu
* When prompted "Do you want to allow this application to make changes to your PC?" choose "Yes"
* To test Node, type `node -v` - this should output a version number
* To test NPM, type `npm -v` - this should output a version number
* To test Node.js, create a file called "test.js" in your Documents folder and place the following line of code in it `console.log('Node is installed!');`. Back in the command prompt ("cmd") navigate to your file by typing `cd /Users/Username/Documents` (replacing "Username" with your user name). Then type `node test.js`. This should output "Node is installed!".

(Instructions originally found on [blog.teamtreehouse.com/install-node-js-npm-windows].)

Installing the govuk_prototype_kit
----------------------------------
* Download the [latest govuk_prototype_kit zip file]
* Unzip the file into a memorable directory that you can navigate to on the command line, like your "Documents" folder
* In the command prompt ("cmd") navigate to your file by typing `cd /Users/Username/Documents` (replacing "Username" with your user name)
* You can the type `cd govuk_prototype_kit-master` to navigate to the unzipped prototype kit
* Type `npm install` to install the rest of the things that the kit needs to work properly
* Type `node start.js`
* Go to [http://localhost:3000] in your browser

**Important things to remember**

* To view multiple prototypes at the same time, simply type `PORT=3005 node start.js` and change the port number for each prototype.
* Any code changes should update in the browser without you restarting the app.
* The app recompiles app/assets/stylesheets/application.scss every time changes are observed.

Creating your first page with the govuk_prototype_kit
-----------------------------------------------------
The prototype kit contains a number of example pages to get you started. So the best way to get editing is to either start from scratch or simply copy and paste an existing example page.

* Best practice would be to contain your new pages in a new folder, so first create a folder under "views" called "new-project"
* Copy "forms.html" from "examples/elements/forms.html" and paste it into your new folder
* Mess about with the HTML, save it and point your browser to [http://localhost:3000/new-project/forms]

That's is, you're ready for prototyping.

For further information, please see the really helpful documentation at GitHub, [getting started with the prototype kit][getting-started-prototype-kit].

Now you'll want to [deploy your new prototype online]({% post_url 2016-01-02-publishing-a-prototype-online-with-heroku %}).

[https://git-scm.com/download/win]:https://git-scm.com/download/win
[govuk_prototype_kit]: https://github.com/alphagov/govuk_prototype_kit
[node.js]: https://nodejs.org/en/download/
[blog.teamtreehouse.com/install-node-js-npm-windows]: http://blog.teamtreehouse.com/install-node-js-npm-windows
[latest govuk_prototype_kit zip file]: https://github.com/alphagov/govuk_prototype_kit/archive/master.zip
[http://localhost:3000]: http://localhost:3000
[http://localhost:3000/new-project/forms]: http://localhost:3000/new-project/forms
[getting-started-prototype-kit]: https://github.com/alphagov/govuk_prototype_kit/blob/master/docs/getting-started.md
