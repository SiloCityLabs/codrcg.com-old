<div class="row text-center">
	<div class="col s12 m6 offset-m3">
		<div class="input-field col s12" ng-init="myCtrl.TinyUrl = '<?php echo $class['TinyUrl']; ?>'">
			<i class="material-icons prefix fa fa-link pointer tooltipped" ngclipboard data-clipboard-target="#icon_prefix"
			   data-position="bottom" data-delay="20" data-tooltip="Copy"></i>
			<input id="icon_prefix" type="text" ng-model="myCtrl.TinyUrl" readonly>
		</div>

	</div>
</div>