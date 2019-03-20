function hi() {
    console.log('HI');
}
var check = 0;
var checkG = 0;
var Temp_inarr = [];
Timearr = [];
var j = 0;
function OnlineCheck() {
    $.ajax({
        url: '/bot/Priem.php',
        success: function (data) {
          var dt =  toString(data);
          if (dt=='offline')
          {
              console.log(dt)
          }
          else{

          }
        }
    });
}
function Get() {
    console.log('GettingUpdates');
    $.ajax({
        dataType: 'json',
        url: '/bot/Priem.php',
        success: function (data) {
            data = JSON.stringify(data);
            var aa = JSON.parse(data); 
            var online = aa.status;
         //  console.log(online);
            if (online == 'online'){
                $(".load").css('display','none');
                $('.not_loaded').css('display', 'none');
                $(".loaded").css('display','block');
               // console.log('Залез в online');
            if (parseInt(aa.Temp_out)==0) {
                $(".value.temp_out").empty();
                $(".value.temp_out").prepend('<p class="valuee">'+aa.Temp_out+'</p>')
            }
            else if (parseInt(aa.Temp_out)<=25)
            {
                $(".value.temp_out").empty();
                $(".value.temp_out").prepend('<p class="valuee">'+aa.Temp_out+'</p>')

                $(".value.temp_out").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
            }
            else if (parseInt(aa.Temp_out)>25 && parseInt(aa.Temp_out)<50)
            {
                $(".value.temp_out").empty();
                $(".value.temp_out").prepend('<p class="valuee">'+aa.Temp_out+'</p>')

                $(".value.temp_out").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp_out").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')

            }
            else if (parseInt(aa.Temp_out)>=50 && parseInt(aa.Temp_out)<75)
            {
                $(".value.temp_out").empty();
                $(".value.temp_out").prepend('<p class="valuee">'+aa.Temp_out+'</p>')

                $(".value.temp_out").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp_out").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp_out").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
            }
            else if (parseInt(aa.Temp_out)>=75)
            {
                $(".value.temp_out").empty();
                $(".value.temp_out").prepend('<p class="valuee">'+aa.Temp_out+'</p>')
                $(".value.temp_out").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp_out").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp_out").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp_out").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
            }      
            var Temp_out = aa.Temp_out;
            if (parseInt(aa.Temp_in)==0) {
                $(".value.temp").empty();
                $(".value.temp").prepend('<p class="valuee">'+aa.Temp_in+'</p>')

            }
            else if (parseInt(aa.Temp_in)<=25)
            {
                $(".value.temp").empty();
                $(".value.temp").prepend('<p class="valuee">'+aa.Temp_in+'</p>')

                $(".value.temp").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
            }
            else if (parseInt(aa.Temp_in)>25 && parseInt(aa.Temp_in)<50)
            {
                $(".value.temp").empty();
                $(".value.temp").prepend('<p class="valuee">'+aa.Temp_in+'</p>')

                $(".value.temp").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')

            }
            else if (parseInt(aa.Temp_in)>=50 && parseInt(aa.Temp_in)<75)
            {
                $(".value.temp").empty();
                $(".value.temp").prepend('<p class="valuee">'+aa.Temp_in+'</p>')

                $(".value.temp").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
            }
            else if (parseInt(aa.Temp_in)>=75)
            {
                $(".value.temp").empty();
                $(".value.temp").prepend('<p class="valuee">'+aa.Temp_in+'</p>')
                $(".value.temp").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
                $(".value.temp").prepend('<img id="theImg" src="img/sun.png" style="max-width:50px" />')
            }
            var Temp_in = aa.Temp_in;
            if (parseInt(aa.Humidity)==0) {
                $(".value.vlag").empty();
                $(".value.vlag").prepend('<p class="valuee">'+aa.Humidity+'</p>')

            }
            else if (parseInt(aa.Humidity)<=25)
            {
                $(".value.vlag").empty();
                $(".value.vlag").prepend('<p class="valuee">'+aa.Humidity+'</p>')

                $(".value.vlag").prepend('<img id="theImg" src="img/water.png" style="max-width:50px" />')
            }
            else if (parseInt(aa.Humidity)>25 && parseInt(aa.Humidity)<50)
            {
                $(".value.vlag").empty();
                $(".value.vlag").prepend('<p class="valuee">'+aa.Humidity+'</p>')

                $(".value.vlag").prepend('<img id="theImg" src="img/water.png" style="max-width:50px" />')
                $(".value.vlag").prepend('<img id="theImg" src="img/water.png" style="max-width:50px" />')

            }
            else if (parseInt(aa.Humidity)>=50 && parseInt(aa.Humidity)<75)
            {
                $(".value.vlag").empty();
                $(".value.vlag").prepend('<p class="valuee">'+aa.Humidity+'</p>')

                $(".value.vlag").prepend('<img id="theImg" src="img/water.png" style="max-width:50px" />')
                $(".value.vlag").prepend('<img id="theImg" src="img/water.png" style="max-width:50px" />')
                $(".value.vlag").prepend('<img id="theImg" src="img/water.png" style="max-width:50px" />')
            }
            else if (parseInt(aa.Humidity)>=75)
            {
                $(".value.vlag").empty();
               // $("p.vlag").text(aa.Humidity);
                $(".value.vlag").prepend('<p class="valuee">'+aa.Humidity+'</p>')
                $(".value.vlag").prepend('<img id="theImg" src="img/water.png" style="max-width:50px" />')
                $(".value.vlag").prepend('<img id="theImg" src="img/water.png" style="max-width:50px" />')
                $(".value.vlag").prepend('<img id="theImg" src="img/water.png" style="max-width:50px" />')
                $(".value.vlag").prepend('<img id="theImg" src="img/water.png" style="max-width:50px" />')
            }
            var Humidity = aa.Humidity;
            var Moving = aa.Moving;
            Guard = parseInt(aa.Guard);
            if (Guard === 1)
            {
$('#toggle-move').bootstrapToggle('on');
            }
            else
            {

$('#toggle-move').bootstrapToggle('off');
            }
            var Pressure = aa.Pressure;
            var Light = aa.Light;
            check = parseInt(aa.Light);
            checkG = parseInt(aa.Guard);
            var Jalousie = aa.Jalousie;
            $('#customRange1').val(parseInt(aa.Jalousie))
            if (parseInt(aa.Moving) == 0) {
                $(".value.move").empty();
                $(".value.move").prepend('<img id="theImg" src="img/safety.png" style="max-width:50px" />')
            } else {
                $(".value.move").empty();
                $(".value.move").prepend('<img id="theImg" src="img/thief.svg" style="max-width:50px"/>')
            }
            // $("p.move").text(aa.Moving);
            $("p.vlag").text(aa.Humidity);
            $("p.temp").text(aa.Temp_in);
            if (parseInt(aa.Light) == 1) {
                $(".value.light").empty();
                $(".value.light").prepend('<img id="theImg" src="img/light-bulb-on.png" style="max-width:50px" />');

            } else {
                $(".value.light").empty();
                $(".value.light").prepend('<img id="theImg" src="img/bulb-off.png" style="max-width:50px" />');

            }
            $("p.jalousie").text(aa.Jalousie);
            $("p.update").text(aa.Moving);

            if (aa.Light == '1') {
                $('#toggle-light').bootstrapToggle('on');
            } 
            else if (aa.Light == '0') {

                $('#toggle-light').bootstrapToggle('off');
            }
            //  alert($("#customRange1").value());
            var now = new Date();
            Timearr.push(now.getHours() + ":" + now.getMinutes());
            Temp_inarr.push(parseFloat(aa.Temp_in));

            // console.log(Temp_inarr[0]);

            chart = Highcharts.chart('container', {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Температура за сегодня'
                },
                subtitle: {
                    // text: 'Source: WorldClimate.com'
                },
                xAxis: {
                    categories: Timearr
                },
                yAxis: {
                    title: {
                        text: 'Температура (°C)'
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                series: [{
                    name: 'Програмный интервал: 60 секунд',
                    data: Temp_inarr
                }]
            });
            if (Temp_inarr.length == 50) {

                Temp_inarr = [];
            }
        }
        else
        {
            console.log('serverisoffline');
            $(".load").css('display','none');
            $(".loaded").css('display','none');
            $('.not_loaded').css('display', 'block');
        }
    }
    });

}

function GuardOn() {
    $(".info1").css('display','none');
    $(".spinn1").css('display','block');
    $.ajax({
        dataType: 'json',
        url: '/bot/Otpravka.php?Guard=1',
        success: function (data) {
            setTimeout(function name(params) {

                console.log(data);
                $(".info1").css('display','block');
                $(".spinn1").css('display','none');
                return parseInt(data);
            },1000);

        }
    });
}
function GuardOff() {
    $(".info1").css('display','none');
    $(".spinn1").css('display','block');
    $.ajax({
        dataType: 'json',
        url: '/bot/Otpravka.php?Guard=0',
        success: function (data) {
            setTimeout(function name(params) {

                console.log(data);
                $(".info1").css('display','block');
                $(".spinn1").css('display','none');
                return parseInt(data);
            },1000);
        }
    });
}

function LampOn() {
    $(".info2").css('display','none');
    $(".spinn2").css('display','block');
    $.ajax({
        method: "GET",
        dataType: 'json',
        url: '/bot/Otpravka.php?Light=1',
        success: function (data) {
       
           
            setTimeout(function name(params) {

                console.log(data);
                $(".info2").css('display','block');
                $(".spinn2").css('display','none');
                return parseInt(data);
            },1000);
     
  
        }
    });

}
function LampOff() {
    $(".info2").css('display','none');
    $(".spinn2").css('display','block');
    $.ajax({
        method: "GET",
        dataType: 'json',
        url: '/bot/Otpravka.php?Light=0',
        success: function (data) {
            setTimeout(function name(params) {

                console.log(data);
                $(".info2").css('display','block');
                $(".spinn2").css('display','none');
                return parseInt(data);
            },1000);
        }
    });
}

function RotateChange(a) {
    $.ajax({
        dataType: 'json',
        url: '/bot/Otpravka.php?Rotate='+a,
        success: function (data) {
            console.log(data);
        return parseInt(data);
        }
    });
}

var funcc = Get();

var run = setInterval(Get, 60000);

$('#ref').click(function () {
    Get();
});
$('#ref3').click(function () {
    Get();
});


$(function () {
    $('.toggl').click(function () {
        console.log(check)
        if (check == 0) { //console.log($(this).prop('checked'));
                       console.log("Lamp on GO"); // ФУНКЦИЯ СВЕТА ВКЛ
            check = LampOn();
            $("p.light").text(check);
            $(".value.light").empty();
            $(".value.light").prepend('<img id="theImg" src="img/light-bulb-on.png" style="max-width:50px" />');

        } else {
           // console.log(check)        
            console.log("Lamp off GO");
            
            check = LampOff(); // ФУНКЦИЯ СВЕТА ОТКЛ
            $("p.light").text(check);
            $(".value.light").empty();
            $(".value.light").prepend('<img id="theImg" src="img/bulb-off.png" style="max-width:50px" />');

        }

    })
})
/*$( ".toggl" ).click(function() {
    alert( "Handler for .click() called." );
  });
*/

$(function () {
    $('.movtoggl').click(function () {
        if (checkG == 0) { //console.log($(this).prop('checked'));
            //check = 1;
            console.log(checkG); // ФУНКЦИЯ move ВКЛ
            checkG = GuardOn();
        } else {
            //
            console.log(checkG); // ФУНКЦИЯ move ОТКЛ
            checkG =  GuardOff();
        }
    })
})

$('#customRange1').on('change input', function () {

});
$( "#customRange1" ).mouseup(function() {
   /* var $this = $(this);
    //console.log('q2w3');*/
    $("p.jalousie").text(parseInt($("#customRange1").val()));
    RotateChange($("#customRange1").val());
    console.log($("#customRange1").val()); 
});
$( "#goRange" ).click(function() {
   /* var $this = $(this);
    //console.log('q2w3');*/
    $("p.jalousie").text(parseInt($("#customRange1").val()));
    RotateChange($("#customRange1").val());
    console.log($("#customRange1").val()); 
});