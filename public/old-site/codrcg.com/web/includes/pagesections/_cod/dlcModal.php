<div id="dlcModal" class="modal bottom-sheet">
	<div class="modal-content">
    	<h4 class="text-center">DLC <i class="material-icons pointer" ng-click='dlcInfo = !dlcInfo;'>info</i></h4> 
     	<div class="row">
     		<div class="col s10 offset-s1 text-center" ng-show='dlcInfo'>
     			<!-- If user is not logged in -->
     			<span ng-if='!isLoggedIn' ng-bind-html='NotLoggedInInfo'></span>
     			<!-- If user is logged in -->
     			<span ng-if='isLoggedIn' ng-bind-html='LoggedInInfo'></span>
     			<br><br>
     		</div>   
     		<div class="col s10 offset-s1">
     			<div class="row">
     				<div class="col s12 m4" ng-repeat='setting in DLC'>
		     			<input ng-checked="exists(setting.ID, settingsData.dlc)" ng-click="validateSettings(setting.ID); toggle(setting.ID, 'dlc');" type="checkbox" id="{{::setting.ID}}">
      					<label for="{{::setting.ID}}">{{::setting.Name}}</label>
		     		</div>
     			</div>
     		</div>
     	</div>
    </div>
    <div class="modal-footer">
    	<a href="#" onclick="return false;" class="modal-close waves-effect waves-orange accent-4 btn-flat" ng-click='saveSettings("dlc")'>Save</a>
    	<a href="#" onclick="return false;" class="modal-close waves-effect waves-orange accent-4 btn-flat">Close</a>
    </div>
</div>