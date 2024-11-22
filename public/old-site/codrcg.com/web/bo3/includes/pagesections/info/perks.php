<?php
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>

<div class="row">
	<div class="col s12">
		<table class="responsive-table centered striped">
			<thead>
				<tr>
					<th>Slot</th>
					<th>Name</th>
					<th>Unlock Level</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat='jsonInfo in myCtrl.Perks'>
					<td>{{ ::jsonInfo.CatName }}</td>
					<td>{{ ::jsonInfo.Name }}</td>
					<td>{{ ::jsonInfo.UnlockLevel }}</td>
				</tr>
		</table>
	</div>
</div>