let images =[
  {image: "gotobed.png", speed: "slow"},
  {image: "callafriend.png", speed: "meduim"},
  {image: "watchyoutube.png", speed: "fast"},
  {image: "sleep.png", speed: "slow"},
  {image: "wakeup!.png", speed: "medium"},
  {image: "wakeup!!!.png", speed: "fast"},
  {image: "5moremins.png", speed: "fast"},
  {image: "petyourdog.png", speed: "slow"},
  {image: "notimetoeat.png", speed: "medium"},
  {image: "domakeup.png", speed: "medium"},
  {image: "redomakeup.png", speed: "fast"},
  {image: "getdressed.png", speed: "medium"},
  {image: "stareatonespot.png", speed: "slow"},
  {image: "doassignment.png", speed: "medium"},
  {image: "procrastinate.png", speed: "slow"},
  {image: "takeabreak.png", speed: "medium"},
  {image: "petstrangersdog.png", speed: "medium"},
  {image: "rushhome.png", speed: "fast"},
  {image: "cookdinner.png", speed: "medium"},
  {image: "dance.png", speed: "medium"},
  {image: "takeabath.png", speed: "slow"},



]

let spin = document.querySelector("#spin img");

var now = new Date();
	var today = now.getDay();
	var startTime = new Date();
	startTime.setHours(00);
	startTime.setMinutes(00);
	startTime.setSeconds(00);
	var endTime = new Date();
	endTime.setHours(00);
	endTime.setMinutes(15);
	endTime.setSeconds(00);

	if (today > 0 && today < 6)
		{
		if (startTime < now && endTime > now)
			{document.write('<img src="gotobed.png">');}
		else
			{document.write('<img src="callafriend.png">');}
		}
	else
		{document.write('<img src="callafriend.png">');}



   var now = new Date();
    	var today = now.getDay();
    	var startTime = new Date();
    	startTime.setHours(12);
    	startTime.setMinutes(15);
    	startTime.setSeconds(00);
    	var endTime = new Date();
    	endTime.setHours(02);
    	endTime.setMinutes(00);
    	endTime.setSeconds(00);

    	if (today > 0 && today < 6)
    		{
    		if (startTime < now && endTime > now)
    			{document.write('<img src="callafriend.png">');}
    		else
    			{document.write('<img src="watchyoutube.png">');}
    		}
    	else
    		{document.write('<img src="watchyoutube.png">');}




        var now = new Date();
        	var today = now.getDay();
        	var startTime = new Date();
        	startTime.setHours(02);
        	startTime.setMinutes(00);
        	startTime.setSeconds(00);
        	var endTime = new Date();
        	endTime.setHours(03);
        	endTime.setMinutes(00);
        	endTime.setSeconds(00);

        	if (today > 0 && today < 6)
        		{
        		if (startTime < now && endTime > now)
        			{document.write('<img src="watchyoutube.png">');}
        		else
        			{document.write('<img src="sleep.png">');}
        		}
        	else
        		{document.write('<img src="sleep.png">');}




            var now = new Date();
            	var today = now.getDay();
            	var startTime = new Date();
            	startTime.setHours(03);
            	startTime.setMinutes(00);
            	startTime.setSeconds(00);
            	var endTime = new Date();
            	endTime.setHours(07);
            	endTime.setMinutes(00);
            	endTime.setSeconds(00);

            	if (today > 0 && today < 6)
            		{
            		if (startTime < now && endTime > now)
            			{document.write('<img src="sleep.png">');}
            		else
            			{document.write('<img src="wakeup!.png">');}
            		}
            	else
            		{document.write('<img src="wakeup!.png">');}



                var now = new Date();
                	var today = now.getDay();
                	var startTime = new Date();
                	startTime.setHours(07);
                	startTime.setMinutes(00);
                	startTime.setSeconds(00);
                	var endTime = new Date();
                	endTime.setHours(09);
                	endTime.setMinutes(00);
                	endTime.setSeconds(00);

                	if (today > 0 && today < 6)
                		{
                		if (startTime < now && endTime > now)
                			{document.write('<img src="wakeup!.png">');}
                		else
                			{document.write('<img src="wakeup!!!.png">');}
                		}
                	else
                		{document.write('<img src="wakeup!!!.png">');}



                    var now = new Date();
                      var today = now.getDay();
                      var startTime = new Date();
                      startTime.setHours(09);
                      startTime.setMinutes(00);
                      startTime.setSeconds(00);
                      var endTime = new Date();
                      endTime.setHours(09);
                      endTime.setMinutes(05);
                      endTime.setSeconds(00);

                      if (today > 0 && today < 6)
                        {
                        if (startTime < now && endTime > now)
                          {document.write('<img src="wakeup!!!.png">');}
                        else
                          {document.write('<img src="5moremins.png">');}
                        }
                      else
                        {document.write('<img src="5moremins.png">');}



                        var now = new Date();
                           var today = now.getDay();
                           var startTime = new Date();
                           startTime.setHours(09);
                           startTime.setMinutes(05);
                           startTime.setSeconds(00);
                           var endTime = new Date();
                           endTime.setHours(09);
                           endTime.setMinutes(20);
                           endTime.setSeconds(00);

                           if (today > 0 && today < 6)
                             {
                             if (startTime < now && endTime > now)
                               {document.write('<img src="5moremins.png">');}
                             else
                               {document.write('<img src="petyourdog.png">');}
                             }
                           else
                             {document.write('<img src="petyourdog.png">');}


                            var now = new Date();
                              	var today = now.getDay();
                              	var startTime = new Date();
                              	startTime.setHours(09);
                              	startTime.setMinutes(20);
                              	startTime.setSeconds(00);
                              	var endTime = new Date();
                              	endTime.setHours(09);
                              	endTime.setMinutes(30);
                              	endTime.setSeconds(00);

                              	if (today > 0 && today < 6)
                              		{
                              		if (startTime < now && endTime > now)
                              			{document.write('<img src="petyourdog.png">');}
                              		else
                              			{document.write('<img src="notimetoeat.png">');}
                              		}
                              	else
                              		{document.write('<img src="notimetoeat.png">');}


      var now = new Date();
          var today = now.getDay();
          var startTime = new Date();
          startTime.setHours(09);
          startTime.setMinutes(30);
          startTime.setSeconds(00);
          var endTime = new Date();
          endTime.setHours(09);
          endTime.setMinutes(40);
          endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="notimetoeat.png">');}
	else
{document.write('<img src="domakeup.png">');}
}
else
{document.write('<img src="domakeup.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(09);
    startTime.setMinutes(40);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(10);
    endTime.setMinutes(00);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="domakeup.png">');}
else
{document.write('<img src="redomakeup.png">');}
}
else
{document.write('<img src="redomakeup.png">');}


var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(10);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(10);
    endTime.setMinutes(20);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="redomakeup.png">');}
else
{document.write('<img src="getdressed.png">');}
}
else
{document.write('<img src="getdressed.png">');}


var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(10);
    startTime.setMinutes(20);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(10);
    endTime.setMinutes(25);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="redomakeup.png">');}
else
{document.write('<img src="stareatonespot.png">');}
}
else
{document.write('<img src="stareatonespot.png">');}


var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(10);
    startTime.setMinutes(25);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(10);
    endTime.setMinutes(30);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="redomakeup.png">');}
else
{document.write('<img src="stareatonespot.png">');}
}
else
{document.write('<img src="stareatonespot.png">');}


var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(10);
    startTime.setMinutes(30);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(11);
    endTime.setMinutes(00);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="getdressed.png">');}
else
{document.write('<img src="doassignment.png">');}
}
else
{document.write('<img src="doassignment.png">');}


var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(11);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(01);
    endTime.setMinutes(00);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="doassignment.png">');}
else
{document.write('<img src="procrastinate.png">');}
}
else
{document.write('<img src="procrastinate.png">');}


var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(01);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(01);
    endTime.setMinutes(30);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="procrastinate.png">');}
else
{document.write('<img src="doassignment.png">');}
}
else
{document.write('<img src="doassignment.png">');}


var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(01);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(01);
    endTime.setMinutes(30);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="procrastinate.png">');}
else
{document.write('<img src="doassignment.png">');}
}
else
{document.write('<img src="doassignment.png">');}


var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(01);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(01);
    endTime.setMinutes(30);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="doassignment.png">');}
else
{document.write('<img src="procrastinate.png">');}
}
else
{document.write('<img src="procrastinate.png">');}


var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(01);
    startTime.setMinutes(30);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(01);
    endTime.setMinutes(40);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="doassignment.png">');}
else
{document.write('<img src="procrastinate.png">');}
}
else
{document.write('<img src="procrastinate.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(01);
    startTime.setMinutes(40);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(02);
    endTime.setMinutes(30);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="procrastinate.png">');}
else
{document.write('<img src="petstrangersdog.png">');}
}
else
{document.write('<img src="petstrangersdog.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(02);
    startTime.setMinutes(30);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(03);
    endTime.setMinutes(00);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="petstrangersdog.png">');}
else
{document.write('<img src="takeabreak.png">');}
}
else
{document.write('<img src="takeabreak.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(03);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(03);
    endTime.setMinutes(45);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="takeabreak.png">');}
else
{document.write('<img src="doassignment.png">');}
}
else
{document.write('<img src="doassignment.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(04);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(06);
    endTime.setMinutes(00);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="doassignment.png">');}
else
{document.write('<img src="rushhome.png">');}
}
else
{document.write('<img src="rushhome.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(06);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(07);
    endTime.setMinutes(00);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="rushhome.png">');}
else
{document.write('<img src="petyourdog.png">');}
}
else
{document.write('<img src="petyourdog.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(06);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(07);
    endTime.setMinutes(00);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="rushhome.png">');}
else
{document.write('<img src="petyourdog.png">');}
}
else
{document.write('<img src="petyourdog.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(07);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(08);
    endTime.setMinutes(00);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="petyourdog.png">');}
else
{document.write('<img src="cookdinner.png">');}
}
else
{document.write('<img src="cookdinner.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(08);
    startTime.setMinutes(00);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(08);
    endTime.setMinutes(10);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="cookdinner.png">');}
else
{document.write('<img src="dance.png">');}
}
else
{document.write('<img src="dance.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(08);
    startTime.setMinutes(10);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(08);
    endTime.setMinutes(20);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="dance.png">');}
else
{document.write('<img src="cookdinner.png">');}
}
else
{document.write('<img src="cookdinner.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(08);
    startTime.setMinutes(20);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(09);
    endTime.setMinutes(00);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="cookdinner.png">');}
else
{document.write('<img src="takeabath.png">');}
}
else
{document.write('<img src="takeabath.png">');}



var now = new Date();
    var today = now.getDay();
    var startTime = new Date();
    startTime.setHours(09);
    startTime.setMinutes(20);
    startTime.setSeconds(00);
    var endTime = new Date();
    endTime.setHours(12);
    endTime.setMinutes(00);
    endTime.setSeconds(00);

if (today > 0 && today < 6)
{
if (startTime < now && endTime > now)
{document.write('<img src="takeabath.png">');}
else
{document.write('<img src="gotobed.png">');}
}
else
{document.write('<img src="gotobed.png">');}
