<div class="row section">
    <div class="col s12">
        <h2 class="center">10 Best Black ops 3 Classes</h2>
        <ul class="tabs">
            <li class="tab"><a class="orange-text text-accent-4" href="#Monthly">Monthly</a></li>
            <li class="tab"><a class="orange-text text-accent-4" href="#AllTime">All Time</a></li>
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

