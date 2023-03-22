// 15.2.2023 review//
//1 .switch case//
let day=parseInt(prompt("enter the  day:"));
	switch(day)
	{
	case 0:
	  console.log("sunday");
	  break;
	case 1:
		console.log("Monday");
		break;
	case 2:
		  console.log("tue day");
		  break;
	case 3:
		 console.log("wed day");
		 break;
	case 4:
		 console.log("thu day");
	break;
	case 5:
	   console.log("fri day");
	break;
	case 6:
		 console.log("sat day");
		 break;
	}
	
 // 2.second . age//
 var age=Number(prompt("Enter the age"));
       		var sex=(prompt("Enter sex"));
				if(sex === 'Female') {
						document.write("You will work only in urban areas");
					}
				else if(sex === 'Male') {
				if((age >= 20) && (age < 40)) {
					document.write("You may work anywhere");
					}
				else if((age >= 40) && (age < 60)) {
					document.write("You will work only in urban areas");
				}
			}
		else {
				document.write("ERROR");
			}