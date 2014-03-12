function ParseXml(){
	$.ajax({
	
   		
			url: 'http://your-link/sample.xml',
			//contentType: "text/xml",
			dataType: 'XML',
			beforeSend: function(){
				// Your code goes here
				loaderStart();
				alert('1');
			},						
			complete: function(){
				// Your code goes here
				loaderStop();
				alert('2');
			},
			success: function(xml){
			alert('3');
				$(xml).find("CD").each(function(){
				alert('i');
    				$("#myDiv").append(
						
						'<p> Title: '+$(this).find('TITLE').text()+
						'<br /> City: '+$(this).find('CITY').text()+
						'<br /> Id: '+$(this).find('ID').text()+
						'</p>'
					);
  				});
			},
			error:function(jqXHR, textStatus, errorThrown){
			alert('4');
				loaderStop();
				// when some error occurred
				timeOut(jqXHR, textStatus, errorThrown);			
			}
		}); // ajax end



}

