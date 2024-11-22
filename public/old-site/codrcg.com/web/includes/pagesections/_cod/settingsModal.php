<div id="rollModal" class="modal bottom-sheet">
	<div class="modal-content">
    	<h4 class="text-center">Roll Settings <i class="material-icons pointer" ng-click='settingsInfo = !settingsInfo;'>info</i></h4>
     	<div class="row">
     		<div class="col s10 offset-s1 text-center" ng-show='settingsInfo'>
     			<!-- If user is not logged in -->
     			<span ng-if='!isLoggedIn' ng-bind-html='NotLoggedInInfo'></span>
     			<!-- If user is logged in -->
     			<span ng-if='isLoggedIn' ng-bind-html='LoggedInInfo'></span>
     			<br><br>
     		</div>
     		<div class="col s10 offset-s1 m6 offset-m3">
     			<!-- TODO: Handle this <span class="text-center">This information is saved in your browser, so using a new browser or clearing your browser's data will reset this unless you have an account.</span> -->
     			<label>Player Level: {{settingsData.Level}}</label>
     			<p class="range-field">
      				<input type="range" min="10" max="{{::maxLevel}}" ng-model='settingsData.Level'>
    			</p>
			</div>
     		<div class="col sm10 offset-s1">
     			<div class="row">
     				<div class="col s12 m4" ng-repeat='setting in Settings'>
		     			<input ng-checked="exists(setting.Index, settingsData.roll)" ng-click="validateSettings(setting.Index); toggle(setting.Index, 'roll');" type="checkbox" id="{{::setting.Index}}">
		      			<label for="{{::setting.Index}}">{{::setting.Name}}</label>
		     		</div>
     			</div>
     		</div>
     	</div>
    </div>
    <div class="modal-footer">
    	<a href="#" onclick="return false;" class="modal-close waves-effect waves-orange accent-4 btn-flat" ng-click='saveSettings("roll")'>Save</a>
    	<a href="#" onclick="return false;" class="modal-close waves-effect waves-orange accent-4 btn-flat">Close</a>
    </div>
</div>