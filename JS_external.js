var isStudent = Boolean(false);

function Hide()
{
	var hideOnload = document.getElementsByName("HideOnLoad");
 var errors =  document.getElementById("errorSection");

   errors.style.display='none';

  for (i = 0; i < hideOnload.length; i++) 
 {
   hideOnload[i].style.display='none';
}

}
function checkMemberType()
{
	var TypeError = document.getElementById('TypeError');
	var memberType = document.getElementById('membershipDropdown').value;
	if (memberType == "None")
	{
		
	    TypeError.style.display='block';
		return false;
	}
	TypeError.style.display='none';
	return true;
}
function checkFirstNameField()
{
	var FirstnameError = document.getElementById('FnameError');
	var firstname = document.getElementById('Fname').value;
	if (firstname == "")
	{
	    FirstnameError.style.display='block';
		return false;
	}
	FirstnameError.style.display='none';
	return true;
}
function checkLastNameField()
{
	var lastnameError = document.getElementById('LnameError');
	var lastname = document.getElementById('Lname').value;
	if (lastname == "")
	{
	    lastnameError.style.display='block';
		return false;
	}
	lastnameError.style.display='none';
	return true;
}

function checkDOB()
{

	var DOBinput = document.getElementById('DOB');
	var DOBerror = document.getElementById('dobError');

	if (!DOBinput.value == "")
	{
		var dt = new Date( DOBinput.value);
		var today = new Date();
		var age = today.getFullYear() - dt.getFullYear();
		
		if (today.getMonth() < dt.getMonth() || (today.getMonth() == dt.getMonth() && today.getDate() < dt.getDate())) {
             age--; 
           }

		if (age < 18)
		{
			DOBerror.innerHTML = "* You must be over 18 to join";
			DOBerror.style.display='block';
			return false;
		}
			if (age > 100)
		{
			DOBerror.innerHTML = "* Please enter a valid date";
			DOBerror.style.display='block';
				return false;
		}else
		{
	
			DOBerror.style.display='none';
				return true;
		}
	}else
	{
		DOBerror.innerHTML = "* You have not entered a date of birth";
			DOBerror.style.display='block';
				return false;
	}
}
function SetISStudent(clickedValue)
{
		var hideOnload = document.getElementsByName("HideOnLoad");
		
if (clickedValue)
{
  for (i = 0; i < hideOnload.length; i++) 
 {
   hideOnload[i].style.display='block';
}

isStudent = true;

}else
{
	  for (i = 0; i < hideOnload.length; i++) 
 {
   hideOnload[i].style.display='none';
}
isStudent = false;
}
}

function checkStudentNumber()
{
		var SNError = document.getElementById("NumberError");
	var number = document.getElementById("snumber");
    var numberValid = /^[0-9]+$/;
	
		if (!isStudent)
	{
		  SNError.style.display='none';
		return true;
	}
	
	
	 if (!number.value.match (numberValid)) // creates error message if amount is out of range
	 {   
       SNError.innerHTML = "* Please enter a valid NCI student number";
		SNError.style.display='block';
         return false;
	 
	 }else if (number.value.length != 8)
	 {
		 SNError.innerHTML = "* NCI student numbers have 8 digits";
		 SNError.style.display='block';
		 return false;
	}
	else
	{
		SNError.style.display='none';
	
		return true;
	}

}


function checkStudentEmail()
{
	
	
	var emailError = document.getElementById("EmailError");
	var email = document.getElementById("email");
	var emailValid = "@student.ncirl.ie";
	
	if (!isStudent)
	{
		  emailError.style.display='none';
		return true;
	}
	
	if (email.value == "")
	{
		emailError.style.display='block';
		return false;
	}
	if (!email.value.includes(emailValid))
	{
		  emailError.style.display='block';
		return false;
	}else
	{
		  emailError.style.display='none';
		return true;
	}
	
}

function showErrorSection()
{
	 var errors =  document.getElementById("errorSection");
	   errors.style.display='block';
}

function ValidateFields()
{
	var ErrorInForm = Boolean(false);
	
	if (!checkMemberType())
	{
		ErrorInForm = true;
	}
	if (!checkFirstNameField())
	{
		ErrorInForm = true;
	}
	if (!checkLastNameField())
	{
		ErrorInForm = true;
	}
	if (!checkDOB())
	{
		ErrorInForm = true;
	}
	if (!checkStudentEmail())
	{
		ErrorInForm = true;
	}
	if (!checkStudentNumber())
	{
		ErrorInForm = true;
	}
	
	if (ErrorInForm)
	{ showErrorSection();
	 swal("CHECK!", "Please review errors", "error");
	}else
	{
			var fname = document.getElementById('Fname');

		swal ("Thanks " + fname.value + ", We will get back to you shortly after reviewing your credentials","","success");
	  	
	document.getElementById('memberForm').reset();
	Hide();
	}

}