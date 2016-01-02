Compare two directories, identify the missing files and copy them to another directory

<strong>Recently, I had a problem where I had two very similar folders with exactly the same files in each, but one of the folders had an extra 500 or so files - I needed to see what the extra ones were and do stuff with them.</strong>

[caption id="attachment_48" align="aligncenter" width="542"]<img src="http://jonathanpthomas.com/wp-content/uploads/2013/11/figure-one.jpg" alt="Folder a + Folder b" width="542" height="253" class="size-full wp-image-48" /> Folder a (1,500 files. 987 identical to Folder b + 513 extra files) Folder b 987 (987 files)[/caption]

Obviously I could just run <pre>diff</pre> on the two folders to get a list of all those extra files...

<pre>diff folder-a folder-b</pre>

I could even output that list to a text file...

<pre>diff folder-a folder-b &gt; missing-files.txt</pre>

But I needed to get the contents of that list and I needed to copy each of those files to another directory so I could isolate them away from the source folders.

[caption id="attachment_49" align="aligncenter" width="542"]<img src="http://jonathanpthomas.com/wp-content/uploads/2013/11/figure-two.jpg" alt="Folder a, b and c" width="542" height="491" class="size-full wp-image-49" /> Check all the files in folders a + b and any that don't match, copy to folder c.[/caption]

Unfortunately, the following bash script can't be claimed by myself as I didn't write it. But I work with a bunch of very clever people and asked them to help me out. So here's the result! The first three lines are error handling tests, the next are where the file names are stored as variables and the rest is where the magic happens.

As a matter of course and for easy maintenance, I store all my "scripts" in the /home/ directory: <pre>/home/scripts</pre> 

To run the script I make sure that the script is executable.

<pre>chmod u+x /scripts/missing-files.sh</pre>

This makes it executable by whatever user owns the file. Exchange 'u' for 'a' if you want anyone to execute the file or 'g' for a specific group. Change 'x' for 'r' if you only want them to read a file and to 'w' to be able to write a file.

Use <pre>man chmod</pre> to see further options, permissions is a whole new post!

To run the file you change directory into 'scripts' and do the following:
<pre>
cd scripts
./missing-files.sh folder-a folder-b folder-c
</pre>

The first parameter tells the script the first folder to compare, the second parameter is the second folder to compare and the third parameter is the name of the folder where you'd like to copy the remaining files that exist in folder-a that don't exist in folder-b.

<pre class="lang:sh">
#!/bin/bash

[[ -z $1 || ! -d $1 ]] &amp;&amp; echo &quot;Need a source directory!&quot; &amp;&amp; exit 0
[[ -z $2 || ! -d $2 ]] &amp;&amp; echo &quot;Need a compare directory!&quot; &amp;&amp; exit 0
[[ -z $3 || ! -d $3 ]] &amp;&amp; echo &quot;Need a destination directory!&quot; &amp;&amp; exit 0

d1=$1
d2=$2
d3=$3

IFS=$'\n'

for f1 in $( find $d1 -type f -print )

do
  f2=$( echo &quot;$f1&quot;|sed -e &quot;s!$d1!$d2!&quot; )
  if [[ ! -f &quot;$f2&quot; ]]
  then
    echo &quot;Copying '$f1' to '$d3'&quot;
    cp &quot;$f1&quot; $d3
    f3=$( echo &quot;$f1&quot;|sed -e &quot;s!$d1!$d3!&quot; )
    if [[ ! -f &quot;$f3&quot; ]]
    then
      echo &quot;ERROR: Failed to copy '$f1' TO '$f3'&quot;
    fi
  fi
done
</pre>

Any trouble, just ask in the comments!
