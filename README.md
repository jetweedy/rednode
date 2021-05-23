# Using Redis with Node

I'm assuming you're on something like Ubuntu Linux. If not, a lot of this will be similar, but the installation steps would just seem different and you wouldn't be plastering 'sudo' all over the place before things.

Useful:
https://codeburst.io/introduction-to-redis-node-js-demo-f3326dd43c0f

## Preparing your Environment:

### Install Redis

More info: https://redis.io/download

Specifically in Ubuntu:
```
sudo add-apt-repository ppa:redislabs/redis
sudo apt-get update
sudo apt-get install redis
```

### Install Redis Desktop Manager

If you want a visual tool, you can install the desktop manager:

https://snapcraft.io/redis-desktop-manager

In Ubuntu with 'snap':
```
sudo snap install redis-desktop-manager
```

### Install Node and some related tools

```
sudo apt-get install npm node
```

(Optional:) If you want to use nodemon for real-time monitoring and refreshes after file changes:
```
sudo npm install -g nodemon
```

### Run a Redis server

The following command will initiate it... most likely on port 6379

```
redis-server
```

Once it's running, you can enter the command line with...

```
redis-cli
```


## Installing this App:

### Clone this repository somewhere.

Enter the folder and then...

```
sudo npm install
npm start

```

## Testing this App:

This thing is stupidly simplistic, used purely to screw around with Redis and Node. I might turn it into something useful at some point, but for now it just demonstrates setting and getting from Redis through a Node application. There are three types of routes to try

To see a Hello World homepage:

```
http://localhost:3000/
```
To set a key with a certain value:
```
http://localhost:3000/key/value
```
To see the value of that key later:
```
http://localhost:3000/key
```




