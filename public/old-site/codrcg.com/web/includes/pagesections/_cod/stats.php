<div class="row">
    <div class="col s6 m4">
        <div class="card-panel">
            <span>Total Class Views:</span>
            <span><?php echo number_format($data['Cached_'.$gameAbbrev.'_Class_Views']); ?></span>
        </div>
    </div> <!-- /.m4 -->
    <div class="col s6 m4">
        <div class="card-panel">
            <span>Total Classes Generated:</span>
            <span><?php echo number_format($data['Cached_'.$gameAbbrev.'_Class_Count']); ?></span>
        </div>
    </div> <!-- /.m4 -->
    <div class="col s6 m4">
        <div class="card-panel">
            <span>Most Active User:</span>
            <?php echo (!empty($data['Cached_'.$gameAbbrev.'_Best_User']) ? $data['Cached_'.$gameAbbrev.'_Best_User'] : 'None'); ?>
        </div>
    </div> <!-- /.m4 -->
</div>
<div class="divider"></div>
<div class="row section">
    <div class="col s12">
        <h2 class="center">
			<?php if (!empty($gameName)): ?>
				10 Best <?php echo $gameName; ?> Classes
			<?php else: ?>
				10 Best Classes All Generators
			<?php endif; ?>
		</h2>
        <ul class="tabs">
            <li class="tab"><a class="<?php echo $gameClass; ?>" href="#Monthly">Monthly</a></li>
            <li class="tab"><a class="<?php echo $gameClass; ?>" href="#AllTime">All Time</a></li>
        </ul>
    </div>
    <br><br>
    <?php if (!empty($data['Monthly'])): ?>
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
                <?php foreach ($data['Monthly'] as $value): ?>
                    <tr>
                        <td><a href="<?php echo $value['TinyUrl']; ?>"><?php echo $value['TinyUrl']; ?></a></td>
                        <td><?php echo $value['Views']; ?></td>
                        <td><?php echo $value['User']; ?></td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    <?php endif; ?>
    <?php if (!empty($data['AllTime'])): ?>
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
                <?php foreach ($data['AllTime'] as $value): ?>
                    <tr>
                        <td><a href="<?php echo $value['TinyUrl']; ?>"><?php echo $value['TinyUrl']; ?></a></td>
                        <td><?php echo $value['Views']; ?></td>
                        <td><?php echo $value['User']; ?></td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    <?php endif; ?>
</div>