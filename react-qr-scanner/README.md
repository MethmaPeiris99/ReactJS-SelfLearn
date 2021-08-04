## This app idea was acquired from a Youtube video called "Generate Download & Scan QR Code with React js || Scan QR Code by WebCam in React js App" in the Heart of Programming Youtube channel.

#### Source : 
[Generate Download & Scan QR Code with React js || Scan QR Code by WebCam in React js App](https://www.youtube.com/watch?v=7Ntot5ClGIY)
---

### Used NPM Packages
* Material UI
* QR Code
* QR Code Reader

### Steps to run the application :
* Open the project in VS Code using the command **code .** in the terminal 
* Open the terminal in VS Code using **ctrl + j** and type **npm start** command 
---

### Implementation :
* Create the react app using the comman **npx create-react-app app-name** in the relevant file directory.
* Remove unnecessary code content in App.js
* Install necessary packages
    * Material ui ⇒ **npm install @material-ui/core**
    * QR Code package ⇒ **npm install qrcode**
    * QR Reader package ⇒ **npm install react-qr-reader** (or **npm install - -save react-qr-reader**)
* Paste the link related to Roboto font in **index.html** file right under the **<title>** tag
* Code **App.js** file
    * Import **Card**, **Container**, **CardContent**, **makeStyles**, **Grid**, **TextField**, **Button** from material ui core, **QR Code package**, **QR code reader package**
      to the App.js
    * Import **useState**, **useRef** hooks from react
    * Container is the component used to consist all the items in the application, Inside the Container, Card component is there to create a card and inside that component
      include CardContent.
    * Inside the CardContent component include 3 Grid items inside a Grid container to enable the user to implement the following 3 functionalities.
         * Generate a QR Code relevant to the source which is taken from the content entered in the text field
         * Scan a QR Code in the device and decode it and display the source to the user
         * Scan a QR Code using the web cam and display its source to the user
    * Code **Generate QR Code** (Package QR Code is used)
   
   
   
