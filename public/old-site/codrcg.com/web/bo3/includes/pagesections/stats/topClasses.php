<div class="row section">
	<div class="col s12">
		<h2 class="center">10 Best Black ops 3 Classes</h2>
		<ul class="tabs">
	        <li class="tab"><a class="orange-text text-accent-4" href="#Monthly">Monthly</a></li>
	        <li class="tab"><a class="orange-text text-accent-4" href="#AllTime">All Time</a></li>
		</ul>
	</div>
	<br><br>
	<div ng-hide='myCtrl.InitialLoad'>
		<div id="Monthly" class="col s12">
			<table class="responsive-table centered striped">
	      		<thead>
	        		<tr>
		              <th>Link</th>
		              <th>Views</th>
		              <th>Creator</th>
	        		</tr>
	      		</thead>
	      		<tbody>
	        		<tr ng-repeat='class in myCtrl.Monthly' ng-if='myCtrl.Monthly != ""'>
		            	<td><a ng-href="{{class.TinyUrl}}">{{::class.TinyUrl}}</a></td>
		              	<td>{{::class.Views}}</td>
		              	<td>{{::class.User}}</td>
	        		</tr>
	        		<tr ng-if='myCtrl.Monthly == ""'>
	        			<td colspan="3">No Classes</td>
	        		</tr>
	      		</tbody>
	    	</table>
		</div>
	    <div id="AllTime" class="col s12">
	    	<table class="responsive-table centered striped">
	      		<thead>
	        		<tr>
		              <th>Link</th>
		              <th>Views</th>
		              <th>Creator</th>
	        		</tr>
	      		</thead>
	      		<tbody>
	        		<tr ng-repeat='class in myCtrl.AllTime' ng-if='myCtrl.AllTime != ""'>
		            	<td><a ng-href="{{class.TinyUrl}}">{{::class.TinyUrl}}</a></td>
		              	<td>{{::class.Views}}</td>
		              	<td>{{::class.User}}</td>
	        		</tr>
	        		<tr ng-if='myCtrl.AllTime == ""'>
	        			<td colspan="3">No Classes</td>
	        		</tr>
	      		</tbody>
	    	</table>
	    </div>
	</div>	
</div>

