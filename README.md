# Instruction for CS Club website

Author: Luca Comba - luca.comba98@gmail.com
last update date: 8/25/2021

---

### Overview
This repository is directly linked to the csclub linux server. The linux server is owned by the University.

The website is served using a node express application called *app.js*. The public folder contains all files that are publicly available to all users.

To have the project locally and play with it, firts `git clone`. Then you will need to `npm install` in order to download third packages.
To run the server locally run `node app.js` and visit http://0.0.0.0:8000

### API
For now the app.js server only serve the website as static files from the `/public` folder.

### Deploy website on csclub server environment

On the csclub server you will find the directory `/development_website` which is connected with this git repository.

So first thing first: `git pull` and check with `git status`.

The `/development_website` is the "development" and "testing" line, which means that people can play and made modification without altering the website that is up and running on csclub.stthomas.edu . 

In the csclub server there is now a folder under `~/utils` which have a script called `pushToMainline.sh` which will take all the files in the `/development_website` and copy them to the `/mainline_website` folder (which is the website that is online and everyone can access at http://csclub.stthomas.edu/) .

SO, before calling `pushToMainline.sh` you would need to `git pull` in the `development_website` if you have access to the repo (and we can automatize this as well).

If you are interested in making changes, let me know and I can provide you the password for the server and walk you through.

**To deploy the website manually**

There is processing running under the package *pm2* in the `/mainline_website`. So to stop the online server just `pm2 kill` and then `pm2 start app.js`. To read all the information about running processes already in place `pm2 ls`. (Read more on section "PM2 process manger quick reference")

### PM2 process manager quick reference 

Stop an application with this command (specify the PM2 App name or id):

```
pm2 stop app_name_or_id
```

Restart an application:

```
pm2 restart app_name_or_id
```

List the applications currently managed by PM2:

```
pm2 list
```

Get information about a specific application using its App name:

```
pm2 info app_name
```

The PM2 process monitor can be pulled up with the monit subcommand. This displays the application status, CPU, and memory usage:

```
pm2 monit
```

Note that running pm2 without any arguments will also display a help page with example usage.

Now that your Node.js application is running and managed by PM2, let’s set up the reverse proxy.

Source: [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04)
