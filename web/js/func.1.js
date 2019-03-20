function hi ()
{
    console.log('HI');
}
var Temp_inarr = [];
Timearr =[];
function Get()
{
    $.ajax({
        dataType: 'json',
        url:'/otlad.php',
        success:function (data) {
            data = JSON.stringify(data);
            var aa = JSON.parse(data)
            var Temp_out = aa.Temp_out;
            var Temp_in = aa.Temp_in;
            var Humidity = aa.Humidity;
            var Moving = aa.Moving;
            var Pressure = aa.Pressure;
            var Light = aa.Light;
            var Jalousie = aa.Jalousie;
           $("p.move").text(aa.Moving);
           $("p.vlag").text(aa.Humidity);
           $("p.temp").text(aa.Temp_in);
           $("p.light").text(aa.Light);
           $("p.job").text(aa.Moving);
           $("p.update").text(aa.Moving);
          var now = new Date();
Timearr.push(now.getHours()+":"+now.getMinutes());
Temp_inarr.push(parseFloat(aa.Temp_in));

    console.log(Temp_inarr[0]);
 
    chart =  Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            //text: 'Monthly Average Temperature'
        },
        subtitle: {
           // text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: Timearr
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
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
            name: 'Tokyo',
            data: Temp_inarr
        }]
    });
    if (Temp_inarr.length == 50)
{
    Temp_inarr = [];
}
        }
    });

}
