### [Accessing Linux Systems Using RHEL 8](https://learn.acloud.guru/course/red-hat-certified-system-administrator-ex200-exam-prep/learn/3a8f51da-9143-4dd2-9fcf-011db0527f5d/22be414f-b910-4b4b-bd97-20869b1a9a1f/lab/22be414f-b910-4b4b-bd97-20869b1a9a1f)

#### Introduction
In this hands-on lab, we will take a look at the `su` command, explore the power of the `ssh` command, configure key-based authentication for SSH, and take a look at the SSH utilities for secure file transfer.

#### Solution
**Log in and Switch Users**
 - 1. Log in to the server using the credentials provided:

        `ssh cloud_user@<PUBLIC_IP_ADDRESS>`
 - 2. To get information on who we are, use:

        `whoami ; groups`

 - 3. For more information on our user ID, primary group ID, and groups that we're part of, run this command:

        `id`

 - 4. To determine what files get run when we use different commands to elevate our privileges, become the root user:

        `sudo-i`

 - 5. Enter the following command to export and echo SOURCED1 into the root user's bash_profile:

        `echo export SOURCED1=.bash_profile >> ~/.bash_profile ; echo 'echo $SOURCED1' >> ~/.bash_profile`

 - 6. Make sure both lines are there:

        `grep SOURCED .bash_profile`

 - 7. Enter the following command to export and echo SOURCED2 into the root user's `.bashrc:`

        `echo export SOURCED2=.bashrc >> ~/.bashrc ; echo 'echo $SOURCED2' >> ~/.bashrc`

 - 8. Make sure both SOURCED lines are there:

        `grep SOURCED .bashrc`

 - 9. Exit by simply entering:

        `exit`
 
 - 10. Kill the timeout:

        `sudo -k`

 - 11. To see the echoes, enter:

        `sudo -i echo`

 - 12. Type in the cloud_user's password to see the echoes.

 - 13. Set the root user's password:

        `sudo -i passwd root`

 - 14. Enter a new password for the root user.

 - 15. Run the command to see the cloud_user's path:

        `su -c 'echo $PATH'`

 - 16. Enter the root user's password. This should show the cloud_user's path.

 - 17. Run the command to sign in as the root user and show the cloud_user's path:

        `su - -c 'echo $PATH'`
 - 18. Enter the root user's password. This should show the root user's profile, bashrc, and path.

 - 19. Understand that `sudo` equals the cloud_user, but `sudo -i` equals the root user. `Su` also equals the cloud_user, while `su -` equals the root user.


**Access Remote Systems Using SSH**
 - 1. Connect to a remote system on the second cloud server:

        `ssh cloud_user@<SECOND_PUBLIC_IP_ADDRESS>`
 - 2. When asked if you want to continue connecting, type "yes".

 - 3. Enter the password for the remote system on the second cloud server.

 - 4. Change the password:

        `sudo -i passwd cloud_user`

 - 5. Enter first the old password and then a new password that you'd prefer to use.

 - 6. To get some information on the remote system, query the remote system by running the following commands:

    ```shell
        top
        hostname
        df -hT
    ```
 - 7. Exit out of the server:

        `exit`
 - 8. Return the remote system's output to the initial system:

        `ssh -t cloud_user@<SECOND_PUBLIC_IP_ADDRESS> df -hT >> server_health.txt`
 - 9. Enter the password for the remote system on the second cloud server.

 - 10. If you see an error message, pull up the server health file:

        `cat server_health.txt`
 - 11. See the free memory on the server with the free command:

        ``ssh -t cloud_user@<SECOND_PUBLIC_IP_ADDRESS> free >> server_health.txt``
 - 12. Enter the password for the remote system on the second cloud server.

 - 13. Get the information and see the text file about the server health file:

        `cat server_health.txt`

**Configure Key-Based Authentication for SSH**

- 1. Generate a public/private key pair using the defaults on the first cloud server:

ssh-keygen
Hit Enter and type in a passphrase, ideally something that's easy to remember. This should give you your randomart image and ID.

Copy that ID to the second cloud server, also known as the remote server:

ssh-copy-id <SECOND_PUBLIC_IP_ADDRESS>
Type in the password for the second cloud server.

Connect to the remote server:

ssh cloud_user@<SECOND_PUBLIC_IP_ADDRESS>
Type in the passphrase that you created a few steps ago to test if the key is working.

Exit out of the remote server:

exit
Add the cloud_user identity to the agent and to reload the agent:

eval $(ssh-agent -s)
Add your cloud_user identity to the agent, which can now act on your behalf:

ssh-add
Type in your passphrase.

Connect to the remote server:

ssh cloud_user@<SECOND_PUBLIC_IP_ADDRESS>
Securely Transfer Files between Systems
Execute a backup command on a remote system:

ssh cloud_user@<SECOND_PUBLIC_IP_ADDRESS> tar -czvf wget-server2.tar.gz wget-1*.rpm
Hit the Up arrow and perform an scp:

scp cloud_user@<SECOND_PUBLIC_IP_ADDRESS>:~/wget-server2*.* .
Check the home directory to make sure all the files have been transferred:

ls -l

