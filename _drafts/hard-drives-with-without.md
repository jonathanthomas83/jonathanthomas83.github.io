Setting up hard drives, with existing data and without, in Ubuntu

<ol>
	<li>Three favourite commands - sudo blkid, mount, sudo fdisk -l</li>

	<li>Talk about hardware - Startech external caddy and trayless drives.</li>
	<li>Use Gparted to set up partition table - MSDOS and GPT (http://askubuntu.com/questions/84538/trouble-creating-3tb-ext4-partition-due-to-msdos-partition-table-imposed-error)</li>
	<li>Use Gparted to allocate a new partition</li>
	<li>Use Gparted to format the drive to desired filesystem - what is a filesystem? - remember to press the tick</li>
	<li>Use command line to format hard drive - (https://help.ubuntu.com/community/InstallingANewHardDrive)</li>
	<li>Use GParted to label a drive - remember to press the tick</li>
	<li>Use command line to label a drive - sudo e2label /dev/sda1 disk-a</li>
	<li>sudo blkid to see your devices</li>
	<li>Mount the drive using the command line - Create directory, why we use /media, mounting and unmounting - sudo mount /dev/sda1 /media/disk-a (https://help.ubuntu.com/community/Mount/USB)</li>
	<li>"mount" to see your mounts! - (https://help.ubuntu.com/community/MoveMountpointHowto)</li>
	<li>What is UUID? And what's it for?</li>
	<li>Using command line to change permissions and change owners on a directory/mount point.
sudo chmod 777 /media/disk-a
sudo chown -R jonathan:jonathan /media/disk-a</li>
	<li>Automatic mounting on boot - systemwide mounting for access before login - (http://askubuntu.com/questions/333442/how-do-i-mount-my-main-internal-ext4-drive-on-a-fresh-install-of-xubuntu-12-04 / https://help.ubuntu.com/community/AutomaticallyMountPartitions)	</li>
	<li>Moving mount locations, ie. you want to tidy things up or you've made a mistake - https://help.ubuntu.com/community/MoveMountpointHowto</li>

</ol>

<code>
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
/dev/mapper/music--serv--vg-root /               ext4    errors=remount-ro 0       1
# /boot was on /dev/sda1 during installation
UUID=433aa56a-03ee-467d-a8ca-8d604c119d5c /boot           ext2    defaults        0       2
/dev/mapper/music--serv--vg-swap_1 none            swap    sw              0       0

UUID=8354cae4-e255-4466-83f6-804d306bb98f /media/music-a        ext4    user,owner
UUID=b155377d-1445-41e0-b0b2-72d3d29a1508 /media/music-b        ext4    user,owner
UUID=f315c9ab-a36d-4e9b-9d65-da4f9476e963 /media/music-c        ext4    user,owner
UUID=9ecffc0b-bf08-4185-86c1-3eaf87941bbc /media/music-d        ext4    user,owner
</code>

<strong>Mounting and checking the partitions</strong>
In the terminal, type the following command.

<code>sudo mount -a</code>
To verify that the partitions were mounted properly, open Gnome's file browser and direct it to the locations at which the partitions were mounted. Click the 'File System' button to access '/', and navigate from there. If the partition being examined contains files, the modifications were successful, and the partitions will be automatically mounted every time the system is restarted.
