<?php
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>

<div id="FullMessageModal" class="modal">
	<div class="modal-content">
    	<h4>{{ModalInfo.Name}}</h4>
		<label>Gumball Description</label><br>
		<p>{{ModalInfo.Description}}</p>
    </div>
    <div class="modal-footer">
    	<a href="#" onclick="return false;" class="modal-action modal-close btn-flat">Ok</a>
    </div>
</div>