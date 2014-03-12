function ParseXml(){
	$.ajax({
	
   		
			url: 'http://your-link/sample.xml',
			//contentType: "text/xml",
			dataType: 'XML',
			beforeSend: function(){
				// Your code goes here
				loaderStart();
				
			},						
			complete: function(){
				// Your code goes here
				loaderStop();
			
			},
			success: function(xml){
			alert('3');
				$(xml).find("CD").each(function(){
			
    				$("#myDiv").append(
						
						'<p> Title: '+$(this).find('TITLE').text()+
						'<br /> City: '+$(this).find('CITY').text()+
						'<br /> Id: '+$(this).find('ID').text()+
						'</p>'
					);
  				});
			},
			error:function(jqXHR, textStatus, errorThrown){
		
				loaderStop();
				// when some error occurred
				timeOut(jqXHR, textStatus, errorThrown);			
			}
		}); // ajax end



}

