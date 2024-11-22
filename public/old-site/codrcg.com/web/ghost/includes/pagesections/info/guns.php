<?php
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>

<div class="row">
	<div class="col s12">
		<table class="responsive-table centered striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Unlock Level</th>
					<th>Gun Class</th>
					<th>DLC?</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat='jsonInfo in myCtrl.Guns'>
					<td>{{ ::jsonInfo.Name }}</td>
					<td>{{ ::jsonInfo.GunClass }}</td>
					<td>{{ ::jsonInfo.UnlockLevel }}</td>
					<td>{{ ::jsonInfo.GunClass }}</td>
					<td>{{ ::jsonInfo.isDLC }}</td>
				</tr>
		</table>
	</div>
</div>