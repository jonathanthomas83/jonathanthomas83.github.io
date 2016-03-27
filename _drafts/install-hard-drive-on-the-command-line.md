---
layout: post
title:  "Setting up hard drives in Linux"
date:   2016-03-25 12:37:00 +0000
categories: hard drives linux
post_image: govuk-prototype-kit
---
**This is for hard rives larger than 2tb, any smaller than that and you can use fdisk**

Your hard drives will be allocated two types of names by your system, a temporary one that usually only lasts as long as your computer is turned on, then it will change - usually `dev/sda`, `/dev/sdb` etc. They also get permanent names, a UUID. A UUID stays with the hard drive wherever it goes, even if you put it in a different machine. It will look something like `0f80f7zc-bd9c-42f7-bf7e-df4872f15016`.

You can create an `fstab` file to refer to, but if you've not got one you will need to make a note of the existing disks in your system (I have many and need to keep track) before you install another, that way you can be sure you're formatting the correct one.

* Use `sudo fdisk -l` to list all of the disks in your system. Look carefully for one that says something along the lines of "Disk /dev/sdc doesn't contain a valid partition table", this is the new disk.

* `sudo parted /dev/sdc`

Note: for disks that are over 2tb, it's recommended to use a `GPT` partition table format and that can't be done in fdisk, it needs.

Type `help` and enter for a list of parted options

* `mklabel gpt`

* `print` to see how many sectors are on the disk, mine says

"Disk /dev/sdc: 4001GB"

**Make the partition the drive**

* `mkpart primary 0GB 4001GB`

You can check everything is ok by typing `quit` on parted, and `sudo fdisk /dev/sdc`, fdisk will show a "+" at the end of the 2tb and will show a partition table of "GPT".

**Format the drive**

* `sudo mkfs.ext4 /dv/sdc1` (don't forget to add the "1", that's the correct partition), to format the disk - this may take a while, but will show progress.

**Mount the drive**

* `cd /media`

* `mkdir video-a`

* `chmod 777 video-a`

* `chown jonathan:jonathan video-a`

* Temporarily mount the drive using `mount /dev/sdc1 video-a`

**Get the UUID of the new disk**

* `ls -l /dev/disk/by-uuid` and look for the temporary label of your new partition - /dev/sdc1 was used in this example.

**Mount the drive on boot**
* `vi /etc/fstab`

**Create new NFS export**
* https://192.168.1.77:10000/

**Add to snapraid pool**
* `sudo vi snapraid conf`
* Edit the file, easy to know where stuff is.
