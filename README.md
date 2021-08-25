# Instruction for CS Club website

author: Luca Comba - luca.comba98@gmail.com
last update date: 4/20/2021

---

# API


# Get server information

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
