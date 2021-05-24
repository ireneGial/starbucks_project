//Edo ginetai i apothikeusi twn array
//xrisimopoioume session storage etsi oste na min xanontai ta dedomena otan kanoume 
//navigation stis selides. otan kleinei to parathiro oi allages xanontai.


//ARRAY GIA XRISTES
if (sessionStorage.getItem('db_users') == null){
var db_users = {"users":[{
    "fname": "Eirini",
    "lname": "Gialelaki",
    "fatherName": "Nikolaos",
    "birthdate": "1997-01-09",
    "afm": 12345678,
    "amka": 123456789123,
    "kartaAnergias": 12121212,
    "status": true,
    "minesAnergias": 12,
    "email": "irenegial97@gmail.com",
    "password": "00000",
    "redeemed_coupons":[]
  },{
    "fname": "Maria",
    "lname": "Papadaki",
    "fatherName": "Georgios",
    "birthdate": "1998-05-04",
    "afm": 1234142,
    "amka": 111122223333,
    "kartaAnergias": 2935878493819126,
    "status": true,
    "minesAnergias": 4,
    "email": "mariap@gmail.com",
    "password": "123455",
    "redeemed_coupons":[]
  },{
    "fname": "Ioannis",
    "lname": "Petropoulos",
    "fatherName": "Konstantinou",
    "birthdate": "1998-05-04",
    "afm": 1234555,
    "amka": 13412845555,
    "kartaAnergias": 2935878493819555,
    "status": true,
    "minesAnergias": 4,
    "email": "ioannis1@gmail.com",
    "password": "123455",
    "redeemed_coupons":[]
  },{
    "fname": "Katerina",
    "lname": "Petropoulou",
    "fatherName": "panagiotis",
    "birthdate": "1995-05-04",
    "afm": 2837495,
    "amka": 13412845222,
    "kartaAnergias": 2964278493819126,
    "status": true,
    "minesAnergias": 2,
    "email": "katerina@gmail.com",
    "password": "38271",
    "redeemed_coupons":[]
  },{
    "fname": "Nikolaos",
    "lname": "Georgiou",
    "fatherName": "Emmanouil",
    "birthdate": "1990-05-04",
    "afm": 12121212,
    "amka": 123123123,
    "kartaAnergias": 123456123456,
    "status": true,
    "minesAnergias": 8,
    "email": "nikolaos@gmail.com",
    "password": "11111",
    "redeemed_coupons":[]
  },{
    "fname": "Kiriaki",
    "lname": "Maratou",
    "fatherName": "Euaggelos",
    "birthdate": "1989-08-01",
    "afm": 1232295,
    "amka": 13412825222,
    "kartaAnergias": 2964278900019126,
    "status": true,
    "minesAnergias": 12,
    "email": "kiki@gmail.com",
    "password": "12371",
    "redeemed_coupons":[]
  },{
    "fname": "Eleni",
    "lname": "Petrakopoulou",
    "fatherName": "Marinos",
    "birthdate": "1991-09-10",
    "afm": 2831825,
    "amka": 13227845222,
    "kartaAnergias": 2964278928119126,
    "status": true,
    "minesAnergias": 2,
    "email": "eleni@gmail.com",
    "password": "11271",
    "redeemed_coupons":[]
  },{
    "fname": "Georgios",
    "lname": "Papadakis",
    "fatherName": "Konstantinos",
    "birthdate": "1999-09-03",
    "afm": 2000825,
    "amka": 13211225222,
    "kartaAnergias": 2964278987656126,
    "status": false,
    "minesAnergias": 8,
    "email": "georg@gmail.com",
    "password": "987655",
    "redeemed_coupons":[]
  },{
    "fname": "Elsa",
    "lname": "Papadopoulou",
    "fatherName": "Kuriakos",
    "birthdate": "1975-12-03",
    "afm": 2005555,
    "amka": 13287655222,
    "kartaAnergias": 2964278123456126,
    "status": true,
    "minesAnergias": 9,
    "email": "elsa@gmail.com",
    "password": "987655",
    "redeemed_coupons":[]
  },{
    "fname": "Georgios",
    "lname": "Georgiou",
    "fatherName": "Konstantinos",
    "birthdate": "1999-08-01",
    "afm": 2012325,
    "amka": 13211998872,
    "kartaAnergias": 2961234587656126,
    "status": true,
    "minesAnergias": 1,
    "email": "georg@gmail.com",
    "password": "987655",
    "redeemed_coupons":[]
  }
]}
}
else {
  db_users = JSON.parse(sessionStorage.getItem('db_users'));
}

//ARRAY AITISEWN

if (sessionStorage.getItem('db_aitiseis') == null){
  var db_aitiseis = {"aitiseis":[{
    "fname": "Eirini",
    "lname": "Gialelaki",
    "fatherName": "Nikolaos",
    "birthdate": "1997-01-09",
    "afm": 12345678,
    "amka": 123456789123,
    "kartaAnergias": 2964278493819126,
    "status": true,
    "minesAnergias": 12,
    "adt":"oe2334",
    "moriodotimeni":false,
    "moria":0
  },{
    "fname": "Maria",
    "lname": "Papadaki",
    "fatherName": "Georgios",
    "birthdate": "1998-05-04",
    "afm": 1234142,
    "amka": 111122223333,
    "kartaAnergias": 2935878493819126,
    "status": true,
    "minesAnergias": 4,
    "adt":"ai1245",
    "moriodotimeni":false,
    "moria":0
  },{
    "fname": "Ioannis",
    "lname": "Petropoulos",
    "fatherName": "Konstantinou",
    "birthdate": "1998-05-04",
    "afm": 1234555,
    "amka": 13412845555,
    "kartaAnergias": 2935878493819555,
    "status": true,
    "minesAnergias": 4,
    "adt":"ik2134",   
    "moriodotimeni":false,
    "moria":0
  }
]}
}
else {
  db_aitiseis = JSON.parse(sessionStorage.getItem('db_aitiseis'));
}

//ARRAY TWN WINNERS
if (sessionStorage.getItem('db_winners') == null){
  var db_winners = {"winners":[]}
}
else {
  db_winners = JSON.parse(sessionStorage.getItem('db_winners'));
}

//elegxoi an einai kapoios xristis sindedemenos kai poios
if (sessionStorage.getItem('loginUser') == null){
  loginUser = false;
}else {
  loginUser = JSON.parse(sessionStorage.getItem('loginUser'));
}

if (sessionStorage.getItem('activeUser') == null){
  activeUser = null;
}else {
  activeUser = JSON.parse(sessionStorage.getItem('activeUser'));
}
