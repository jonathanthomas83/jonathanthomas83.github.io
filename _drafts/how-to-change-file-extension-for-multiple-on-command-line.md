How to change extension of multiple files from command line?

<strong>So, you have a few hundred files with a double extension mixed in with a few hundred other files with the correct extension? </strong>

This was my dilemma today, until the lovely people on <a href="http://webchat.freenode.net/?channels=ubuntu" target="_blank">Ubuntu IRC</a> helped me find out the correct command to sort my troubles!

<pre>rename 's/.abc$/.edefg/' *.abc</pre>

This runs a script to iterate through the folder, find all the files with the extension <strong>.abc</strong> and then change the extension to <em>.edefg</em>.

In my case, I had a double extension so I altered the above command to:

<pre>rename 's/.extension1.extension2$/.extension1/' *.extension1.extension2</pre>

Very useful!

To use this recursively through subfolders, use:

<pre>find /path/to/root/folder -type f -name '*.abc' -print0 | xargs -0 rename 's/.abc$/.edefg/'</pre>

Thanks to the guys at IRC and Ask Ubuntu - <a href="http://askubuntu.com/questions/35922/how-to-change-extension-of-multiple-files-from-command-line" target="_blank">http://askubuntu.com/questions/35922/how-to-change-extension-of-multiple-files-from-command-line</a>
