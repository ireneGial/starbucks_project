
var application_period= true; // auto tha allaksoume kai analoga tha deixnei apotelesmata i oxi

var adminmail = "admin1@gmail.com";
var adminpass = "admin";

function admin_sign_in(){
    $("#results-container").html("");

    $("#results-container").append('' +
        '<div class="col-md-10 offset-sm-1 rounded" style="background-color:rgb(46,46,46)">'+
        '<form>'+
            '<div class="form-group row pb-2 py-3 offset-sm-2">'+
                '<h2 class="text-white">Employee sign in</h2>'+
            '</div>'+
            '<div class="form-group row pb-3 py-3">'+
                '<div class="col-sm-1"></div>'+
                '<input type="email" class="form-control col-sm-10" id="admin_email"  placeholder="Email" required>'+ //prosthetw class is-invalid an den einai swsta
                '<div class="col-sm-1"></div>'+
            '</div>' +           
        '<div class="form-group row pb-3 py-3">'+
            '<div class="col-sm-1"></div>'+
            '<input type="password" class="form-control col-sm-10" id="admin_password"  placeholder="Password" required>'+
            '<div class="col-sm-1"></div>'+
        '</div>'+
        '<div class="form-group row offset-5 text-center py-4">'+
            '<button type="submit" class="btn rounded-pill" id="logButton" style="background-color:rgb(22, 143, 22)">Sign in</button>'+
        '</div>'+
      '</form>'+
      '</div>'
        );

        $("#logButton").on('click', function () { 
            let mail = document.getElementById("admin_email").value;
            let password = document.getElementById("admin_password").value;

            if(mail==adminmail && password==adminpass){
             admin_show_startbtn();
            }else if (password =="" || mail==""){
                document.getElementById("errormis").innerHTML = "Fill out all fields";
                $('#misModal').modal();
            }else{
                document.getElementById("errormis").innerHTML = "Wrong email or password";
                $('#misModal').modal();
            }
            if(sessionStorage.getItem('db_winners')!=null){
                document.getElementById("beginProcessbtn").disabled = true;
            }
          });   
}

//enimerosi tou admin gia epitixi eisodo kai koumpi enarksis moriodotisis
function admin_show_startbtn(){
    $("#results-container").html("");   
    $("#results-container").append('' +
            '  <h5 class="card-title h2" style="text-align:center;">Admin successfully logged in</h5>'+
            '  <p class="card-text" style="text-align:center;">Click below to start the process of creating and sharing coupons.</p>'+
            '  <div class="offset-sm-3 col-md-6 text-center py-4">'+
            '    <button type="button" id="beginProcessbtn" class="btn btn-success ">START</button>'+
            '  </div>'
        );   


        //enarksi moriodotisis
     $("#beginProcessbtn").on('click', function () {   
            moriodotisi();
            application_period = false;
                yes_results();
        });  
    
}

//iparxoun pleon oi nikites, emfanizontai stin arxiki selida tou mis
function yes_results(){

    $("#results-container").html("");

    $("#results-container").append('' +
    '  <h5 class="card-title font-weight-bold h2" style="text-align:center;">RESULTS</h5>'+
    '  <div class="mx-auto py-3" style="text-align:center;">'+
    '   <table class="table table-dark" id="result_table">'+
    '   <thead>'+
    '   <tr>'+
        '   <th scope="col">#</th>'+
        '   <th scope="col">AMKA</th>'+
        '   <th scope="col">Moria</th>'+
    '   </tr>'+
    '  </thead>'+
    '  <tbody>'
);


   let tableid = document.getElementById("result_table");
   var num=0;

   for(i in db_winners["winners"]){
       num++;
      var row = `<tr>
                    <td>${num}</td>
                    <td>${db_winners["winners"][i].amka}</td>
                    <td>${db_winners["winners"][i].moria}</td>
                 </tr>`
            tableid.innerHTML += row;
   }
}

//den iparxoun apotelesmata, enimerosi tou xristi 
function no_results(){
    $("#results-container").html("");

    $("#results-container").append('' +
            '  <h5 class="card-title h2" style="text-align:center;">Results</h5>'+
            '  <p class="card-text" style="text-align:center;">You will see the results here after the expiration date has passed </p>'+
            '  <div class="mx-auto py-3" style="text-align:center;">'+
            '  </div>'+
            '  <div class="offset-sm-3 col-md-6 text-center py-4">'+
            '    <button type="button" class="btn btn-light rounded-pill "><a class="nav-link mx-2" href="homepage.html" id="voucher_btn"> Go to Voucher</a></button>'+
            '  </div>'
        );
}


//fortonei ta ekastote apotelesmata ean iparxoun
function results(){

    if(sessionStorage.getItem('db_winners') == null){
        console.log("Home button clicked");
        no_results();
    } else{
        yes_results();
    }
}

$(document).ready(function () {
    results();

    $("#admin_btn").on('click', function () { 
      admin_sign_in();
    });
  
    $("#home_btn").on('click', function () {
      results();
    });

    
   
  
  });


  
  