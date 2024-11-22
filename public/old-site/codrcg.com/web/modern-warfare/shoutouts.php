<?php
    require ('../includes/includes.php');
    ob_start ("sanitize_page");
    new Session(['ALL']);
    $seoArr['title'] = 'Shoutouts - '.MW_Title;
    $seoArr['desc'] = 'A list of people we find on twitch or youtube that use our product.';
    $seoArr['keywords'] = 'COD 4, COD 4 modern warfare, modern warfare, infinity ward, twitch, youtube, shoutouts';
    $seoArr['url'] = '//'.SYS_URL_PATH.'/'.MW_Folder.'/shoutouts';

    $seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Shoutouts</span>
								</a>
							</div>';
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
<?php
    echo minify_builder ([
		'JS_ATTR' => 'defer',
		'files' => ['assets/scripts/_app/pagination/pag.controller.js', 'assets/scripts/_app/pagination/pag.service.js']
	]);
?>
    <div class="row" ng-controller='PagCtrl as pagCtrl'
         ng-init='pagCtrl.initialize({"Module":"shoutouts","Modulelist":"includes/send/shoutouts/pagination-exec.php"})'>
        <div class="col s12">
            <h1 class="text-center">Shoutouts</h1>
            <?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
            <p class="text-center">
                We check our stats. If we get some traffic from your YouTube videos or Twitch stream we'll add your channel to this page.
            </p>
            <div class="row">
                <div class="col s6">
                    <label>Search</label>
                    <input ng-model="pagCtrl.url.Search" ng-model-options="{debounce: 1000}" ng-change='pagCtrl.liveChange("filter")' type='text' class='form-control'>
                </div>
            </div>
            <div class="divider" ng-cloak ng-hide='pagCtrl.RowsLoading.ListInfo'></div>
            <div ng-show='pagCtrl.RowsLoading.ListInfo'>
                <?php require_once ('../includes/pagesections/pagination/loading_spinner.php'); ?>
            </div>
            <div class="section" ng-cloak ng-hide='pagCtrl.RowsLoading.ListInfo'>
                <table class="responsive-table centered striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Twitter</th>
                        <th>Youtube</th>
                        <th>Twitch</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat='jsonInfo in pagCtrl.ListInfo.Info'>
                        <td>{{ jsonInfo.Name }}</td>
                        <td>
                            <a target="_blank" ng-if='jsonInfo.Data.Twitter' ng-href="https://twitter.com/{{jsonInfo.Data.Twitter}}">{{ jsonInfo.Data.Twitter }}</a>
                            <span ng-if='!jsonInfo.Data.Twitter'>None</span>
                        </td>
                        <td>
                            <a target="_blank" ng-if='jsonInfo.Data.Youtube' ng-href="{{jsonInfo.Data.Youtube}}">View</a>
                            <span ng-if='!jsonInfo.Data.Youtube'>None</span>
                        </td>
                        <td>
                            <a target="_blank" ng-if='jsonInfo.Data.Twitch' ng-href="{{jsonInfo.Data.Twitch}}">View</a>
                            <span ng-if='!jsonInfo.Data.Twitch'>None</span>
                        </td>
                    </tr>
                    <tr ng-show='pagCtrl.ListInfo.Count == 0'>
                        <td colspan="100%" style="text-align:center !important;">No Rows Found</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div ng-cloak ng-hide="pagCtrl.RowsLoading.ListInfo">
                <div ng-hide='pagCtrl.ListInfo.Count == 0'> Showing {{ pagCtrl.ListInfo.Start }} to {{ pagCtrl.ListInfo.End }} of {{ pagCtrl.ListInfo.Count }}</div>
                <?php require_once ('../includes/pagesections/pagination/paging_btns.php'); ?>
            </div>
        </div>
    </div>
	<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>