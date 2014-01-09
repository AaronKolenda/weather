/* This is the data file. Each city object has an array of numbers. Index 0-11 is the average monthly high for each month.
   Index 12 is average yearly snowfall, index 13 is average yearly sun, and index 14 is average
   yearly precipitation. Temperatures are all in Fahrenheit, snowfall and precipitation are in inches, and sun in in hours. */
var cities = new Array();

function city (array) {

	this[0] = array[0]; 			
	this[1] = array[1]; 
	this[2] = array[2]; 
	this[3] = array[3]; 
	this[4] = array[4]; 
	this[5] = array[5]; 
	this[6] = array[6]; 	
	this[7] = array[7]; 
	this[8] = array[8]; 
	this[9] = array[9]; 
	this[10] = array[10]; 
	this[11] = array[11]; 
	this[12] = array[12]; 
	this[13] = array[13]; 
	this[14] = array[14]; 
	
	}

var atlantad = new Array();

	atlantad[0] = 52.3;
	atlantad[1] = 56.6;
	atlantad[2] = 64.6;
	atlantad[3] = 72.5;
	atlantad[4] = 79.9;
	atlantad[5] = 86.4;
	atlantad[6] = 89.1;
	atlantad[7] = 88.1;
	atlantad[8] = 82.2;
	atlantad[9] = 72.7;
	atlantad[10] = 63.6;
	atlantad[11] = 54.0;
	atlantad[12] = 2.7;
	atlantad[13] = '2,738.3';
	atlantad[14] = 49.68;
	
	var atlanta = new city(atlantad);
	cities.push(atlanta);			//added to array of objects

var austind = new Array();

	austind[0] = 61.5;
	austind[1] = 65.2;
	austind[2] = 72.2;
	austind[3] = 79.8;
	austind[4] = 86.5;
	austind[5] = 92.1;
	austind[6] = 95.6;
	austind[7] = 97.0;
	austind[8] = 90.5;
	austind[9] = 81.8;
	austind[10] = 71.4;
	austind[11] = 62.7;
	austind[12] = 0.6;
	austind[13] = '2,644.5';
	austind[14] = 34.29;
	
	var austin = new city(austind);
	cities.push(austin);			//added to array of objects

var clevelandd = new Array();

	clevelandd[0] = 34.4;
	clevelandd[1] = 37.5;
	clevelandd[2] = 46.6;
	clevelandd[3] = 59.1;
	clevelandd[4] = 69.5;
	clevelandd[5] = 78.6;
	clevelandd[6] = 82.6;
	clevelandd[7] = 80.8;
	clevelandd[8] = 73.9;
	clevelandd[9] = 62.3;
	clevelandd[10] = 50.8;
	clevelandd[11] = 38.3;
	clevelandd[12] = 68.3;
	clevelandd[13] = '2,285.6';
	clevelandd[14] = 39.10;
	
	var cleveland = new city(clevelandd);
	cities.push(cleveland);			//added to array of objects

var denverd = new Array();

	denverd[0] = 44.1;
	denverd[1] = 46.2;
	denverd[2] = 54.4;
	denverd[3] = 61.5;
	denverd[4] = 71.5;
	denverd[5] = 82.4;
	denverd[6] = 89.4;
	denverd[7] = 87.2;
	denverd[8] = 78.5;
	denverd[9] = 65.3;
	denverd[10] = 52.1;
	denverd[11] = 42.8;
	denverd[12] = 53.5;
	denverd[13] = '3,106.1';
	denverd[14] = 14.99;
	
	var denver = new city(denverd);
	cities.push(denver);			//added to array of objects

var lad = new Array();

	lad[0] = 68.2;
	lad[1] = 68.6;
	lad[2] = 70.2;
	lad[3] = 72.7;
	lad[4] = 74.5;
	lad[5] = 78.1;
	lad[6] = 83.1;
	lad[7] = 84.4;
	lad[8] = 83.1;
	lad[9] = 78.5;
	lad[10] = 72.8;
	lad[11] = 67.7;
	lad[12] = 0.0;
	lad[13] = '3,254.2';
	lad[14] = 14.93;
	
	var la = new city(lad);
	cities.push(la);				//added to array of objects

var miamid = new Array();

	miamid[0] = 76.1;
	miamid[1] = 77.9;
	miamid[2] = 80.1;
	miamid[3] = 83.1;
	miamid[4] = 86.7;
	miamid[5] = 89.2;
	miamid[6] = 90.6;
	miamid[7] = 90.7;
	miamid[8] = 89.0;
	miamid[9] = 85.9;
	miamid[10] = 81.5;
	miamid[11] = 77.7;
	miamid[12] = 0.0;
	miamid[13] = '3,154.0';
	miamid[14] = 61.91;
	
	var miami = new city(miamid);	
	cities.push(miami);				//added to array of objects

var nyd = new Array();

	nyd[0] = 38.3;
	nyd[1] = 41.6;
	nyd[2] = 49.7;
	nyd[3] = 61.2;
	nyd[4] = 70.8;
	nyd[5] = 79.3;
	nyd[6] = 84.1;
	nyd[7] = 82.6;
	nyd[8] = 75.2;
	nyd[9] = 63.8;
	nyd[10] = 53.8;
	nyd[11] = 43.0;
	nyd[12] = 26.7;
	nyd[13] = '2,534.7';
	nyd[14] = 49.92;
	
	var ny = new city(nyd);							
	cities.push(ny);			//added to array of objects
	
var phoenixd = new Array();

	phoenixd[0] = 67.2;
	phoenixd[1] = 70.7;
	phoenixd[2] = 76.9;
	phoenixd[3] = 85.2;
	phoenixd[4] = 94.8;
	phoenixd[5] = 103.9;
	phoenixd[6] = 106.1;
	phoenixd[7] = 104.4;
	phoenixd[8] = 99.8;
	phoenixd[9] = 88.5;
	phoenixd[10] = 75.5;
	phoenixd[11] = 66.0;
	phoenixd[12] = 0.0;
	phoenixd[13] = '3,876.1';
	phoenixd[14] = 8.03;
	
	var phoenix = new city(phoenixd);								
	cities.push(phoenix);			//added to array of objects
	
var sfd = new Array();

	sfd[0] = 56.9;
	sfd[1] = 60.2;
	sfd[2] = 61.8;
	sfd[3] = 63.1;
	sfd[4] = 64.3;
	sfd[5] = 66.4;
	sfd[6] = 66.5;
	sfd[7] = 68.1;
	sfd[8] = 70.2;
	sfd[9] = 69.2;
	sfd[10] = 63.1;
	sfd[11] = 57.1;
	sfd[12] = 0.0;
	sfd[13] = '3,061.7';
	sfd[14] = 23.63;
	
	var sf = new city(sfd);								
	cities.push(sf);		//added to array of objects
	
var seattled = new Array();

	seattled[0] = 47.2;
	seattled[1] = 49.9;
	seattled[2] = 53.7;
	seattled[3] = 58.5;
	seattled[4] = 64.7;
	seattled[5] = 69.9;
	seattled[6] = 75.8;
	seattled[7] = 76.3;
	seattled[8] = 70.5;
	seattled[9] = 59.7;
	seattled[10] = 50.9;
	seattled[11] = 45.7;
	seattled[12] = 5.9;
	seattled[13] = '2,169.7';
	seattled[14] = 37.41;
	
	var seattle = new city(seattled);								
	cities.push(seattle);				//added to array of objects
	
var dcd = new Array();

	dcd[0] = 43.4;
	dcd[1] = 47.1;
	dcd[2] = 55.9;
	dcd[3] = 66.6;
	dcd[4] = 75.4;
	dcd[5] = 84.2;
	dcd[6] = 88.4;
	dcd[7] = 86.5;
	dcd[8] = 79.5;
	dcd[9] = 68.4;
	dcd[10] = 57.9;
	dcd[11] = 46.8;
	dcd[12] = 15.4;
	dcd[13] = '2,528.7';
	dcd[14] = 39.74;
	
	var dc = new city(dcd);								
	cities.push(dc);					//added to array of objects
	