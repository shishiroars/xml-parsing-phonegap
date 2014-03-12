// Some common javascript functions

/***** Global variable declaration starts *****/

// service url (local)

//var serviceURL = 'http://your-url/abc/services/abc_functions.php';


// user current latitude and longitude
var user_latitude = 0;
var user_longitude = 0;

// user welcome alert when login (welcome alert comes only once on login)
var welcomeAlert = true;

// logged user id
var sessionUserId = 0;

// logged user name
var sessionUserName = '';

// user Logged Status
var userLoggedStatus = 'logout';

// android device registration id (for push noification GCM)
var androidDeviceToken = '';

var iosDeviceToken = '';

// local timezone name
//var tzName = '';

// reference page name 
var refPage = '';


// getting full year for date calender
var endYearDateCalender = new Date();
var endYearCal = endYearDateCalender.getFullYear();


/***** Global variable declaration ends *****/

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

if(isDevice)
{
	// on device ready
	document.addEventListener("deviceready", onDeviceReady, false);
}
else
{
	// on document ready
	$(document).ready(function(){
		// Handler for .ready() called.
		
		onDeviceReady(); 
	});
}


function resetAllVariable()
{
    /*program_id = [];
    db_equi_ids = '';
    gid;
    loc_names = [];
    distinct_loc_names = [];
       
    daysno = '';
    
    prog_name='';
    
    // store program id for program detail page and days page to maipulate data
    var selectedProgramId= '';
    var program_equip_name='';*/
}

/***********************************************************************
Function Name : onDeviceReady (call when devaice ready)
Parmeters 	  : none
return        : none
Author		  : Shishir Shrivastava
************************************************************************/
 function reachableCallback(reachability) {
        // There is no consistency on the format of reachability
        var networkState = reachability.code || reachability;

        var states = {};
        states[NetworkStatus.NOT_REACHABLE]                      = 'No network connection';
        states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
        states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi connection';

        alert('Connection type: ' + states[networkState]);
    }

function checkConnection() {
	    var networkState = navigator.network.connection.type;

	    var states = {};
	    states[Connection.UNKNOWN]  = 'Unknown connection';
	    states[Connection.ETHERNET] = 'Ethernet connection';
	    states[Connection.WIFI]     = 'WiFi connection';
	    states[Connection.CELL_2G]  = 'Cell 2G connection';
	    states[Connection.CELL_3G]  = 'Cell 3G connection';
	    states[Connection.CELL_4G]  = 'Cell 4G connection';
	    states[Connection.NONE]     = 'No network connection';

	  //  alert('Connection type: ' + states[networkState]);
	   // showToast('Connection type: ' + states[networkState]);
	}

function onPause() {
		
    }
    
function onResume() {
		
    }


function onDeviceReady()
{
	
	//firstLoadEvent();
	//navigator.network.isReachable("phonegap.com", reachableCallback, {});
document.addEventListener("pause", onPause, false);
document.addEventListener("resume", onResume, false);

//checkConnection();
	
	if(isDevice)
	{
		//pictureSource = navigator.camera.PictureSourceType;
		//destinationType = navigator.camera.DestinationType;
	
	}
	
	
}


/***********************************************************************
Function Name : checkNetwork (to check the network is available on device or not)
Parmeters 	  : showAlert (true = show alert, false = do not show alert)
return        : true for network is available or false for not available
Author		  : Shishir Shrivastava
************************************************************************/

function checkNetwork(showAlert)
{
	var show_alert = typeof(showAlert) != 'undefined' ? showAlert : true;
	
	//Run this function, if it is being executed on device.
	if(isDevice == false)
	{
		return true;
	}
	
	var networkState = navigator.network.connection.type;
	var states = {};
	states[Connection.UNKNOWN]  = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI]     = 'WiFi connection';
	states[Connection.CELL_2G]  = 'Cell 2G connection';
	states[Connection.CELL_3G]  = 'Cell 3G connection';
	states[Connection.CELL_4G]  = 'Cell 4G connection';
	states[Connection.NONE]     = 'No network connection';

	var statusValue = (networkState + '').toLowerCase();
	
	if(statusValue == 'none' || statusValue == 'null')
	{
		
		if(show_alert)
		{
			// give a alert to user that connection is lost.
			navigator.notification.alert(
				'You have lost your internet connection. Please connect to internet!',  // message
				alertDismissed,         	// callback
				'Network Status',           // title
				'Ok'                  		// buttonName
			);
		}
		
		return false;
	}
	return true;
}


/***********************************************************************
Function Name : alertDismissed (a simple callback function)
Parmeters 	  : none
return        : none
Author		  : Shishir Shrivastava
************************************************************************/

function alertDismissed() 
{
    // do nothing
	return false;
}


/***********************************************************************
Function Name : onBackKeyDown (for back button handler)
Parmeters 	  : none
return        : none
Author		  : Shishir Shrivastava
************************************************************************/




/***********************************************************************
Function Name : exitConfirmation (function to exit from application)
Parmeters 	  : button 
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function exitConfirmation(button)
{
	if(button == 1)
	{
		navigator.app.exitApp();
		return false;
	}
}


/***********************************************************************
Function Name : changePage (to change the page)
Parmeters 	  : divId (which div we want to go when change the page)
Parmeters 	  : pageTransition (this param is to set the page transition
				default "slide")
Parmeters 	  : reverseTransition (reverse transition is allowed or not
				true for reverse transition
				false for forward transition
				default false)
Parmeters 	  : changeHash (change hash allowed or not
				true for changing the hash value
				false for no changing the hash value
				default true)
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function changePage(divId, pageTransition, reverseTransition, changeHash)
{
	var pageTransition1 = typeof(pageTransition) != 'undefined' ? pageTransition : 'none';	
	var reverseTransition1 = typeof(reverseTransition) != 'undefined' ? reverseTransition : false;
	var changeHash1 = typeof(changeHash) != 'undefined' ? changeHash : true;
	
	$.mobile.changePage( '#'+divId, {
		transition: pageTransition1,
		reverse: reverseTransition1,
		changeHash: changeHash1
	});
}


/***********************************************************************
Function Name : getPhoneGapPath (to get the path of your application in any PhoneGap app)
Parmeters 	  : none
return 		  : path of application
Author		  : Shishir Shrivastava
************************************************************************/
function getPhoneGapPath() 
{
    var path = window.location.pathname;
    path = path.substr( path, path.length - 10 );
    //return 'file://' + path;
	return path;
}



/***********************************************************************
Function Name : validEmail (to check provided email is valid or not)
Parmeters 	  : email (email address)
return 		  : true for valid email or false for invalid email
Author		  : Shishir Shrivastava
************************************************************************/

function validEmail(email)
{
	var email = email;
	var matcharray = email.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z]+)*\.[A-Za-z]+$/) 
	if(matcharray==null)
	{	
		return false;
	}
	else 
	{
		return true;
	}
}


/***********************************************************************
Function Name : wip (function for showing working status)
Parmeters 	  : none
return        : none
Author		  : Shishir Shrivastava
************************************************************************/

function wip()
{
	showToast('Work in progress.', false, 'middle-center', 'warning', '');
	return false;
}


/***********************************************************************
Function Name : showToast (function for showing toast message)
Parmeters 	  : message (message to be displayed)
Parmeters 	  : stickyMsg [ toast message - sticky(true), non sticky(false) ]
Parmeters 	  : msgPosition (message display position - top-left, top-center, top-right, middle-left, middle-center, middle-right)
Parmeters 	  : errorType (notice, success, error, warning)
return        : none
Author		  : Shishir Shrivastava
************************************************************************/

function showToast(message, stickyMsg, msgPosition, errorType, callBackFuncArgu)
{
	
	var message1 = typeof(message) != 'undefined' ? message : 'Unknown error occured.';
	
	var stickyMsg1 = typeof(stickyMsg) != 'undefined' ? stickyMsg : false;
	
	var msgPosition1 = typeof(msgPosition) != 'undefined' ? msgPosition : 'middle-center';
	
	var errorType1 = typeof(errorType) != 'undefined' ? errorType : 'error';
	
	var callBackFuncArgu = typeof(callBackFuncArgu) != 'undefined' ? callBackFuncArgu : '';
	
	if(callBackFuncArgu == '')
	{
		callBack = false;
	}
	else
	{
		callBack = true;
	}
	
	$().toastmessage('showToast', {
	   text     : message,
	   sticky   : stickyMsg,
	   position : msgPosition,
	   type     : errorType,
	   close    : function () { if(callBack){callBackFunc(callBackFuncArgu)} }
	});
	
	if (stickyMsg == false) {
		$('div').removeClass('toast-item-close');
	}
}


/***********************************************************************
Function Name : timeOut (call when any error occurred)
Parmeters 	  : jqXHR, textStatus, errorThrown
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function timeOut(jqXHR, textStatus, errorThrown)
{
	/*alert('status: '+ jqXHR.status);
	alert('textStatus: '+ textStatus);
	alert('errorThrown: '+ errorThrown);*/
	showToast('Unknown error occurred.', false, 'middle-center', 'error', '');
	return;
}


/***********************************************************************
Function Name : loaderStart (function will display wating loader to user)
Parmeters 	  : message
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function loaderStart(message_title, message_text)
{
   	
	if(typeof(message_title)=='undefined')message_title = 'Loading';
	if(typeof(message_text)=='undefined')message_text = 'Please wait...';
	
	if(deviceType == 'android')
	{
		if(isDevice == false) //Run this function, if is being executed on device. 
		{
			$.mobile.showPageLoadingMsg();		
			return true;
		}
		navigator.notification.activityStart(message_title, message_text);	
	}
	else if( (deviceType == 'ios') || (deviceType == 'web_browser') )
	{
		$.mobile.loading( 'show', {
			text: message_title+'...',
			textVisible: true,
			theme: 'a',
			html: ""
		});
		return true;
	}
	
	/*// to show loading message
	$.mobile.loading( 'show', {
		text: message_title,
		textVisible: true,
		theme: 'a',
		html: ""
	});
	return true;*/
}


/***********************************************************************
Function Name : loaderStart (function will hide wating loader to user)
Parmeters 	  : none
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function loaderStop()
{
    if(deviceType == 'android')
	{
		if(isDevice == false)//Run this function, if is being executed on device. 
		{
			$.mobile.hidePageLoadingMsg();
			return true;
		}
		navigator.notification.activityStop();
	}
	else if( (deviceType == 'ios') || (deviceType == 'web_browser') )
	{
		$.mobile.hidePageLoadingMsg();
		return true;
	}
	
	/*// to hide loading message
	$.mobile.loading('hide');
	return true;*/
}


/***********************************************************************
Function Name : dummy (how to define a ajax call - copy this code to fire ajax and do code yourself whatever you want in success method)
Parmeters 	  : none
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function dummyXML()
{
	// check network connection before fireing ajax every time
	var checkNetConnection = checkNetwork();
	if(checkNetConnection == true)
    {
		// data string (if requierd)
		var dataString = '';
	
		$.ajax({
			type: 'POST',
			url: serviceURL,
			contentType: "text/xml",
			data: dataString,
			dataType: 'xml',
			beforeSend: function(){
				// Your code goes here
				loaderStart();
			},						
			complete: function(){
				// Your code goes here
				loaderStop();
			},
			success: function(xml){
				
			},
			error:function(jqXHR, textStatus, errorThrown){
				loaderStop();
				// when some error occurred
				timeOut(jqXHR, textStatus, errorThrown);			
			}
		}); // ajax end
	}
	else
	{
		// do nothing
		return false;
	}
}

function dummyJSON()
{
	// check network connection before fireing ajax every time
	var checkNetConnection = checkNetwork();
	if(checkNetConnection == true)
    {
		// data string (if requierd)
		var dataString = '';
	
		$.ajax({
			type: 'POST',
			url: serviceURL,
			data: dataString,
			dataType: 'json',
			beforeSend: function(){
				// Your code goes here
				loaderStart();
			},						
			complete: function(){
				// Your code goes here
				loaderStop();
			},
			success: function(jsonData){
				
			},
			error:function(jqXHR, textStatus, errorThrown){
				loaderStop();
				// when some error occurred
				timeOut(jqXHR, textStatus, errorThrown);			
			}
		}); // ajax end
	}
	else
	{
		// do nothing
		return false;
	}
}


/***********************************************************************
Function Name : getUserValues (to get logged user values)
Parmeters 	  : none
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function getUserValues()
{
	if(isDevice == true)
	{
		sessionUserId = window.localStorage.getItem("sessionUserId");
		userLoggedStatus = window.localStorage.getItem("userLoggedStatus");
		sessionUserName = window.localStorage.getItem("sessionUserName");
	}
	else
	{
		sessionUserId = sessionUserId;
		userLoggedStatus = userLoggedStatus;
		sessionUserName = sessionUserName;
	}
}


/***********************************************************************
Function Name : goBack (to go back to history(javascript) page)
Parmeters 	  : none
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function goBack()
{
	
	
}


/***********************************************************************
Function Name : backToPage (to go back page)
Parmeters 	  : divId (on which div we want to go)
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function backToPage(divId)
{
	
	
}


/***********************************************************************
Function Name : in_array (to check a perticular value is in the array or not)
Parmeters 	  : value , array
return 		  : true or false
Author		  : Shishir Shrivastava
************************************************************************/
function in_array(val, arr)
{
	for(var u=0; u<arr.length; u++)
	{
		if(arr[u] == val) 
		{
			return true;
		}
	}
	return false;
}


/***********************************************************************
Function Name : deleteElementFromArray (to delete element from array)
Parmeters 	  : value , array
return 		  : none
Author		  :Shishir Shrivastava
************************************************************************/

function deleteElementFromArray(elementKey, arr)
{
	for(var i = arr.length; i>=0; i--)
	{
		if(arr[i] == elementKey)
		{
			arr.splice(i, 1);
			break;
		}
	}
}

/***********************************************************************
Function Name : openPopup (function to open popup)
Parmeters 	  : popupId (popup id; which popup to open)
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function openPopup(popupId)
{
	// open create group popup
	//$('#'+popupId).popup("open", {'y':25});
	$('#'+popupId).popup("open");
}


/***********************************************************************
Function Name : closePopup (function to close popup)
Parmeters 	  : popupId (popup id; which popup to close)
return 		  : none
Author		  : Shishir Shrivastava
************************************************************************/

function closePopup(popupId)
{	
	
	if(!($("input[name='remember_selection_policy']").is(":checked")))
	{
		
		rememberPolicySelectionCheckbox = 0;
		$('#remember_selection_policy').attr('checked', false);
	}
	else
	{
		
		rememberPolicySelectionCheckbox = 1;
		$('#remember_selection_policy').attr('checked', true);
	}
	
	
	
	if((loginWithFB == true) && (popupId == 'disclaimerPopup'))
	{
		
		// call face book login
		facebookLogin()
	}
	else if(popupId == 'disclaimerPopup')
	{
		
		// close create group popup
		$('#'+popupId).popup('close');
		doLogin();
	}
	
	if(popupId == 'disclaimerPopup1')
	{
		
		$('#'+popupId).popup('close');
		
	}
	// close create group popup
	$('#'+popupId).popup('close');
}

function closeDialog()
{
	$('.ui-dialog').dialog('close');
}

// function to capitalize first letter of word
String.prototype.capitalize = function(){
	return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
};




