$(function(){
	var
		keyPartners = $("#keypartners"),
		keyActivities = $("#keyactivities"),
		keyResources = $("#keyresources"),
		valuePropositions = $("#valuepropositions"),
		customerRelationships = $("#customerrelationships"),
		customerSegments = $("#customersegments"),
		costStructure = $("#coststructure"),
		revenueStreams = $("#revenuestreams"),
		jsonDate,
		bmcJsonUri = "./json/bmc.json",
		abas = "";

		function success( data, textStatus, jqXHR ){
			//console.log("data:",data,"textStatus:",textStatus,"jqXHR:",jqXHR);
			$.each( data.items, function( key, val ) {
    			console.log(val.keypartners,val.keypartners.content[1]);
    			alert(val.keypartners,val.keypartners.content[1]);
  			});
  			alert(5);
		}

		$.ajax({
		  dataType: "json",
		  url: bmcJsonUri,
		  data: jsonDate,
		  success: success
		});

		
});