<div class="row">
    <div class="col s6 m4">
        <div class="card-panel">
            <span>Total Class Views:</span>
            <span><?php echo $data['Cached_MW_Class_Views']; ?></span>
        </div>
    </div> <!-- /.m4 -->
    <div class="col s6 m4">
        <div class="card-panel">
            <span>Total Classes Generated:</span>
            <span><?php echo $data['Cached_MW_Class_Count']; ?></span>
        </div>
    </div> <!-- /.m4 -->
    <div class="col s6 m4">
        <div class="card-panel">
            <span>Most Active User:</span>
            <?php echo (!empty($data['Cached_MW_Best_User']) ? $data['Cached_MW_Best_User'] : 'None'); ?>
        </div>
    </div> <!-- /.m4 -->
</div>
<div class="divider"></div>