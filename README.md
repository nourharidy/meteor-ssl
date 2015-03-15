# **SSL** for Meteor

#### Simple built-in Meteor SSL functionality for the first time!

## Install
```sh
meteor add nourharidy:ssl 
```
After the package installation has finished, it is recommended to put your SSL **key** & **cert** files inside your Meteor *private* directory. However, you can put it wherever else you want **outside** the meteor application directory.

## API
### SSL(**key**, **cert**, [**port**])
The **SSL()** function is used to launch the SSL functionality from the server, the SSL feature wont be present unless you use it, it must only be used inside the *server* directory.

The function has two obligatory arguments: The path to the SSL **key** & the SSL **cert** file, respectively. The third argument is optional: Define the SSL **port** (Default: 443). 

## Notes

* If your SSL Certificate has a password, you will be prompted with "Enter PEM passphrase" everytime the server is started.
* In order for Meteor to use port 443 for SSL (the default port), it must be started as root:
```sh
sudo meteor 
```
* In order for the *force-ssl* package to work with this package, please make sure the SSL port is 443 (default).
* You have to add the *https://* prefix to the url if you use the port number in the url. For example, assuming you chose *9000* as SSL port, this will **NOT** work:
```sh
localhost:9000
```
It will keep your browser loading forever instead of redirecting you to an HTTPS connection. To make it work, you have to add the *https//* prefix:
```sh
https://localhost:9000
```
This is why you are encouraged to use the default SSL port *443* so you can open:
```sh
https://localhost
```
* This package does not encrypt communication between Meteor & MongoDB, to workaround this you must put MongoDB on Meteor's localhost or a server inside your secure private network.

##FAQ

#### Does it support Websockets?
Yes, it encrypts both HTTP packets and Websockets (including DDP).

### Does it work with Phonegap/Cordova?

Yes, when you *run* it in development, just set the **--mobile-server** argument to the the server location preceded by the *https://* prefix & followed by the SSL port, for example if you use it on an Android device:
```sh
meteor run android-device --mobile-server=https://localhost:443
```
When you *build* the mobile application, use the same syntax with the **--server** argument, for example:
```sh
meteor build --server=https://localhost:443
```

### Does it work with server-to-server DDP connections?
Yes, just adjust **DDP.connect()** to the appropriate SSL port.

Example:
```sh
DDP.connect('https://example.com:443');
```
### Does it encrypt the connection between Meteor & MongoDB?

No it doesn't, unless MongoDB is located on localhost, all communication between Meteor & MongoDB is compromised, be careful!

### Browser shows a security warning

This is because your SSL certificate is self-signed, to prevent this you need to buy certificate signed from a Certificate Authority.

### How do i force Meteor to always use SSL?

Set the SSL port to 443 (default) and install the force-ssl smart package:
```sh
meteor add force-ssl
```

## Contact

If you have a question, a bug, or an idea, feel free to contact me:

* Send me an email: nourharidy@yahoo.com
* Send me a tweet: [@nourharidy](http://www.twitter.com/NourHaridy)

