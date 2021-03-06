import React, {useState, useRef} from "react";
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from "react-qr-reader";

function App() {
  //----------- useStates -----------//
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] = useState('');

  const classes = useStyles();
  const qrRef = useRef(null);

  //Function used to generate a QR Code relevant to the text input using a button click
  const generateQRCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  }

  //Function used to handle errors in the QR Scanning process
  const handleErrorFile = (error) => {
    console.log(error);
  }

  //Function used to Scan a QR code selected from the device
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  }

  //Function used to select the QR code from the device using a button click
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }

  //Function used to handle errors in the QR Scanning process using a web cam
  const handleErrorWebCam = (error) => {
    console.log(error);
  }

  //Function used to Scan a QR code using the web cam
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  }
  return (
    <Container className = {classes.container}>
      <Card>
        <h2 className = {classes.title}>Generate Download & Scan QR Code with React JS</h2>
        <CardContent>
          <Grid container spacing={2}>

            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField label = "Enter Text here" onChange={(e) => setText(e.target.value)}/>
              <Button className = {classes.btn} variant="contained" color="primary" onClick={() => generateQRCode()}>Generate</Button>
              <br/>
              <br/>
              <br/>
              {imageUrl ? (<a href={imageUrl} download><img src= {imageUrl} alt = "img"/></a>) : null}
            </Grid>

            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan QR Code</Button>
              <QrReader
                ref={qrRef}
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
              />
              <h3>Scanned Code: {scanResultFile}</h3>
            </Grid>

            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <h3>QR Code Scan by Web Cam</h3>
              <QrReader
              delay={300} //Tells the QrReader how quick the web cam should refresh its scan
              style={{width: '100%'}} //Determines the size of the web cam
              onError={handleErrorWebCam} //Determines how to handle the errors
              onScan={handleScanWebCam} //Determines how to handle valid scans
              />
              <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

//-- Styles used to style the buttons and the containers --//
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3f51b5',
    color: '#fff',
    padding: 20
  },
  btn: {
    marginTop: 10,
    marginBottom: 20
  }
}));

export default App;
