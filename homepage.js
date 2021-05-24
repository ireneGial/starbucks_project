var afm,adt,amka,anergia;

//elegxos se periptosi pou o xristis thelei na kanei logout na allazei sto navbar kai stis metavlites elegxou
function loginBtnControl(){
    if(sessionStorage.getItem('loginUser')){
        document.getElementById('signin').innerText = "SIGN IN";
        activeUser=null;
        loginUser = false;
        sessionStorage.setItem('activeUser', JSON.stringify(activeUser));
        sessionStorage.setItem('loginUser', JSON.stringify(loginUser));
        window.location.replace("signin.html");
    }else{
        window.location.replace("signin.html");
    }
}



//elegxos gia login 
function login(){
    email = document.getElementById("usermail").value;
    password = document.getElementById("userpass").value;

    if(email=="" || password==""){
        document.getElementById("errorp").innerHTML = "Please fill all the fields";
        $('#applicationModal').modal();
        return;
    }

    for(i in db_users["users"]){
        if(db_users["users"][i].email == email  && db_users["users"][i].password == password ){
            loginUser = true;
            activeUser = db_users["users"][i].amka;

            sessionStorage.setItem('activeUser', JSON.stringify(activeUser));
            sessionStorage.setItem('loginUser', JSON.stringify(loginUser));
            document.getElementById('signin').innerText = "SIGN OUT";
            user_has_signedin();
            
            return ;
        }
    }
    document.getElementById("errorp").innerHTML = "User not found with these credentials";
                        $('#applicationModal').modal();
}

//edo ginetai i moriodotisi kai i anadeiksh twn nikitwn tou voucher
function moriodotisi(){
    var coupon;
    for(i in db_aitiseis["aitiseis"]){
        db_aitiseis["aitiseis"][i].moria = Math.floor(Math.random() * (10000 - 1000) ) + 1000;
        db_aitiseis["aitiseis"][i].moriodotimeni = true;
    }
  
    db_aitiseis["aitiseis"].sort(function(a,b){ 
        var x = a.moria < b.moria? -1:1; 
        return x;} );
    db_aitiseis["aitiseis"].reverse();
    console.log(db_aitiseis["aitiseis"]);
    var jsonTemp;
    for(var i =0 ; i < 2; i++){ 

        coupon = Math.round(Math.random()*1E16);  //random 16psifios kodikos
        jsonTemp = {moria:db_aitiseis["aitiseis"][i].moria,
        fname: db_aitiseis["aitiseis"][i].fname,
        lname: db_aitiseis["aitiseis"][i].lname,
        fatherName: db_aitiseis["aitiseis"][i].fatherName,
        birthdate: db_aitiseis["aitiseis"][i].birthdate,
        afm: db_aitiseis["aitiseis"][i].afm,
        amka:db_aitiseis["aitiseis"][i].amka,
        kartaAnergias: db_aitiseis["aitiseis"][i].kartaAnergias,
        minesAnergias: db_users["users"][i].minesAnergias,
        adt: db_aitiseis["aitiseis"][i].adt,
        coupon:coupon};

        db_winners["winners"].push(jsonTemp);
        sessionStorage.setItem('db_winners', JSON.stringify(db_winners));
    }
    console.log(db_winners["winners"]);
}


function submit(){ // otan patisei submit aitisis kaleitai auti i sunartisi

    afm = document.getElementById("afm").value;
    adt = document.getElementById("adt").value;
    amka = document.getElementById("amka").value;
    anergia = document.getElementById("anergia").value;


    if(afm=="" || adt=="" || amka=="" || anergia==""){ // elegxos oti einai sumpliromena ola ta pedia
        document.getElementById("errorp").innerHTML = "Fill out all fields";
        $('#applicationModal').modal();
    }
    else{
        applicationControl();      // klisi prwtou elegxou  
    }
}

function applicationControl(){ // elegxos oti den exei ksanakanei aitisi
        
        for( i in db_aitiseis["aitiseis"]){
            if(amka==db_aitiseis["aitiseis"][i].amka && afm==db_aitiseis["aitiseis"][i].afm){
                document.getElementById("errorp").innerHTML = "You have already applied for a coupon";
                $('#applicationModal').modal();
            }else{
                activeUserControl();  // an den iparxei katagegkrameni aitisi me to sigkekrimeno amka
            }
        }
}


function activeUserControl(){ // deuteros elegxos energou xristi kai imerominia gennisis

        for( i in db_users["users"]){
            if(amka==db_users["users"][i].amka){ // elegxos oti uparxei xristis me auto to amka
                console.log("user found!");

                if(afm!=db_users["users"][i].afm || anergia!=db_users["users"][i].kartaAnergias){ // elegxos allwn stoixeiwn aitisis
                    document.getElementById("errorp").innerHTML = "Input doesn't match user's information , try again";
                    $('#applicationModal').modal();
                    return;
                }else{
                    if(db_users["users"][i].status == true){ // Energos xristis
                        let criteria = db_users["users"][i].birthdate.split("-"); // Etos gennisis
                        if(criteria[0]>"1984"){
                           // console.log(" Both criteria met ! ");
                           document.getElementById("errorp").innerHTML = "Success ! Your application was accepted into our system !";
                           $('#applicationModal').modal();
                            var jsonTemp = {
                                fname: db_users["users"][i].fname,
                                lname: db_users["users"][i].lname,
                                fatherName: db_users["users"][i].fatherName,
                                birthdate: db_users["users"][i].birthdate,
                                afm: db_users["users"][i].afm,
                                amka: db_users["users"][i].amka,
                                kartaAnergias: db_users["users"][i].kartaAnergias,
                                status: db_users["users"][i].status,
                                minesAnergias: db_users["users"][i].minesAnergias,
                                adt: adt,
                                moriodotimeni: false,
                                moria: 0
                            }
                            db_aitiseis["aitiseis"].push(jsonTemp);
                            sessionStorage.setItem('db_aitiseis', JSON.stringify(db_aitiseis));     
                            console.log(db_aitiseis["aitiseis"]);
                        }
                    }else{
                        document.getElementById("errorp").innerHTML = "It seems you don't fit the criteria to make an application ( click Help for more information ) ";
                        $('#applicationModal').modal();
                    }

                }
            }
        }
}

//allagi tou container se periptosi pou exei kanei sign in o xristis 
function user_has_signedin(){
    $("#signin-div").html("");
    $("#signin-div").append('' +
    '  <h3 class="card-title text-white py-5" style="text-align:center;">Successfully Signed in </h3>'+
    '  <p class="card-text text-white" style="text-align:center;">Your personal information and coupon codes are listed in your profile </p>'+
    '  <div class="mx-auto py-3" style="text-align:center;">'+
    '  </div>'+
    '  <div class="offset-sm-3 col-md-6 text-center py-4">'+
    '    <button type="button" class="btn btn-light rounded-pill"><a class="nav-link mx-2" href="profile.html" id="voucher_btn"> Go to Profile</a></button>'+
    '  </div>'
    );
     
}
//edo kaleitai i parakato sinartisi efoson exei ginei i moriodotisi kai den mporei pia na kanei aitisi o xristis
function checkDate(){

    if (db_winners["winners"].length !=0){     
        $("#application-div").html("");
        $("#application-div").append('' +
        '  <h3 class="card-title text-white mt-5 py-5" style="text-align:center;"><b>VOUCHER RESULTS ARE AVAILABLE!</b></h3>'+
        '  <p class="card-text text-white" style="text-align:center;">Application period has ended</p>'+
        '  <p class="card-text text-white" style="text-align:center;">Visit our MIS website for the results</p>'+
        '  <div class="mx-auto py-3" style="text-align:center;">'+
        '  </div>'+
        '  <div class="offset-sm-3 col-md-6 text-center py-4">'+
        '    <button type="button" class="btn btn-light rounded-pill"><a class="nav-link mx-2" href="mis.html" id="voucher_btn"> Go to MIS</a></button>'+
        '  </div>'
        );
    }
}


//anoigei to modal gia to kouponi
function redeem(){
        $('#cpModal').modal();
}


function openpdf(){
window.open('coupon.pdf','_blank','fullscreen=yes');
}


$(document).ready(function () {
//elegxei ean exei ginei moriodotisi kai enimeronei to xristi
    checkDate();

    $("#submit").on('click', function (e) { 
      e.preventDefault();
      submit();
    });

    $("#signin-submit").on('click', function (e) { 
        e.preventDefault();
        login();
    });
    
    //edo ginetai elegxos ean iparxei to kouponi stous nikites, kai to prosthetei sti lista twn kouponiwn tou xristi
    $("#redeembtn").on('click', function (e) { 
        e.preventDefault();
        var code = document.getElementById("couponcode").value;
        for(i in db_winners["winners"]){
            if(code== db_winners["winners"][i].coupon && code!=""){
               var coupon = db_winners["winners"][i].coupon;
             var amka = db_winners["winners"][i].amka;
                document.getElementById("display-code").innerHTML=code;
                db_winners["winners"][i].coupon = "";
                sessionStorage.setItem('db_winners', JSON.stringify(db_winners));
                console.log("coupon found");
                
                for(k in db_users["users"]){
                    console.log("amka");
                    if(amka == db_users["users"][k].amka ){
                        db_users["users"][k].redeemed_coupons.push(code);
                        sessionStorage.setItem('db_users', JSON.stringify(db_users));
                        console.log(sessionStorage.getItem('db_users'));
                        break;
                    }
                }
                redeem();
                return;
            }
        }
        document.getElementById("errorp").innerHTML = "Cannot redeem coupon";
        $('#redeemError').modal();

        console.log("sorry, coupon cannot be found");
        
    });  

    //deixnei to kouponi otan kanei redeem
    $("#showcoupons").on('click', function (e) { 
        e.preventDefault();
        $('#couponsModal').modal();

        for(i in db_winners["winners"]){
            if(db_winners["winners"][i].amka == activeUser){
            console.log(db_winners["winners"][i].coupon);
             document.getElementById("code").value = db_winners["winners"][i].coupon;
              break;
            }
        }
    });  

    //edo ginetai o elegxos sto navbar gia na allazei se sign in kai sign out kathe fora pou fortwnei to homepage

    if(sessionStorage.getItem('loginUser') == null ){
        document.getElementById('signin').innerText = "SIGN IN";
        document.getElementById('profile').classList.add('hide');
    }else if (sessionStorage.getItem('loginUser')=="false"){
        document.getElementById('signin').innerText = "SIGN IN";      
    }else if(sessionStorage.getItem('loginUser')){
        document.getElementById('signin').innerText = "SIGN OUT";
        document.getElementById('profile').classList.remove('hide');
    }

  });
