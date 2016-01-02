When 'cp' isn't enough, use 'gcp' to monitor progress of file transfers

Learned a nice little trick today; you know how we're all used to the progress bar on Windows machines and how they often don't give you an accurate enough reading or mess up half way through because, well, it's Windows! Well I've found a little trick for getting progress indication on big file transfers via command line.

For me, using the command line to run simple copying and file transfers has been great, it's allowed me to do things so much more efficiently and quickly, much more reliable and easier than "dragging and dropping" on Windows, in my opinion.

To see progress on your transfers,

Install GCP from the repositories

<pre>sudo apt-get install gcp</pre>

And, instead of running

<pre>cp -r folder-a folder-b</pre>

Use GCP instead.

<pre>gcp -r folder-a folder-b</pre>

You should get output similar to the following:

<pre>
gcp -r folder-a folder-b
Copying 168.57 MiB 100% |########################################################|   7.98 M/s Time: 00:00:22
</pre>

<blockquote>However, even when the progress bar has reached 100% when using the tool, you must wait until your terminal prompt reappears before safely removing your media so that you can ensure that the transfer process has successfully finished.</blockquote>

Next time I do this, I'm going to experiment with <em>rsync</em> and <em>pv</em> to achieve the same thing and see which one is best.

With many thanks to the users at AskUbuntu - <a href="http://askubuntu.com/questions/17275/progress-and-speed-with-cp">http://askubuntu.com/questions/17275/progress-and-speed-with-cp</a>
