function saveMyaccount(){
	var form_data = [],
	count = 0;
	$('[name^="data"]').each(function() {
		var name = '';
		name = $(this).prop('name').replace("data['",'').replace("']",'');
		form_data[count] = {'Name':name, 'Value':$(this).val()};
		count++;
	});

	$.ajax({
		type: "POST",
		url: "includes/_fw/send/myaccount/myaccount-exec.php",
		data: {form_data:form_data},
		dataType: "json",
		success: function (data) {			
			for(var i=0; i < data.errorcount; i++) {
				Materialize.toast(data.error[i]['msg'], 4000);
			}/* for */
			
			if(data.status == 'success'){	
				$('.empty').each(function() {
					$(this).val('');
				});			
				/* update data-original */
				$('[name^="data"]').each(function() {
					$(this).attr('data-original-val',$(this).val());
				});
			}
			$('#updateForm').bootstrapValidator('resetForm', true);
			$('[name^="data"]').each(function() {
				$(this).val($(this).attr('data-original-val'));
			});
		}/* success */
	});/* ajax */
}
