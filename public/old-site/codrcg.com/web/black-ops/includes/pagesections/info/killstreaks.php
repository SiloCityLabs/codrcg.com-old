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
					<th>Points</th>
					<th>Unlock Level</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat='jsonInfo in myCtrl.Streaks'>
					<td>{{ ::jsonInfo.Name }}</td>
					<td>{{ ::jsonInfo.Points }}</td>
					<td>{{ ::jsonInfo.UnlockLevel }}</td>
				</tr>
		</table>
	</div>
</div>