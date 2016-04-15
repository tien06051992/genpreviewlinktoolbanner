<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
    body {
        padding-top: 50px;
        padding-bottom: 20px;
    }
    .logo {
      text-align: center;
    }

    .logo img {
      max-height: 100%;
      width: auto;
    }
    </style>
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
</head>

<body>
    <?php
        function dirToArray($dir, $acceptExtension,$deep) { 
           $result = array(); 
           $cdir = scandir($dir);
           $temp = $deep;
           foreach ($cdir as $key => $value) 
           {
              
              if (!in_array($value,array(".",".."))) 
              { 
                 if (is_dir($dir . DIRECTORY_SEPARATOR . $value)) 
                 {  
                    $result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value, $acceptExtension,$temp."\\".$value);
                 } 
                 else 
                 {
                    
                    $temp;
                    $infoFile = new SplFileInfo($value);
                    if((isBanner($temp) && $infoFile->getExtension() == "jpg") || 
                      (isBanner($temp) && $infoFile->getExtension() == "mp4") ||
                      (isBanner($temp) && $infoFile->getExtension() == "gif") ||
                      (isBanner($temp) && $infoFile->getExtension() == "png")
                      ) continue;
                    if(in_array($infoFile->getExtension(), $acceptExtension)) {
                      $result[] = $value;
                    }  
                 }
              }
           }     
           return $result;
        }

        function isBanner($folder) {
          $tmpdir = scandir($folder);
          $flag = false;
          for($i = 0; $i < count($tmpdir); $i++) {
            //echo $i;
            $infoFileHtml = new SplFileInfo($tmpdir[$i]);
            if($infoFileHtml->getExtension() == "html") {
              $flag = true;
            }
          }
          return $flag;
        }

        $dirs = 'tree';
        $exts = array("html","swf","jpg","gif","mp4","png");
        $deep = 'tree';
        $files = dirToArray($dirs, $exts, $deep);

    ?>
    <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 logo">
            <img src="img/logo.png" alt="">
            <h1>PYCO PREVIEWLINK TOOL</h1>
          </div>
        </div>
        <div class="row">

            <div class="col-md-6">
                <?php
                    echo "<pre>";
                    print_r($files);
                    echo "</pre>";
                    reset($files);
                    $first_key = key($files);
                ?>
            </div>
            <div class="col-md-6">
                <form class="form-horizontal" method="POST" action="tree/<?php echo $first_key ?>/preview.php">
                  <input type="hidden" name="total" value="<?php print base64_encode(serialize($files))  ?>">
                  <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Banner's name:</label>
                    <div class="col-sm-10">
                      <input name="name-banner" type="text" class="form-control" id="inputEmail3" placeholder="Banner 's name" value="<?php echo $first_key; ?>">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">List concepts:</label>
                    <div class="col-sm-10">
                      <?php 
                      foreach ($files[$first_key] as $key => $concept) {
                        if(is_array($concept) && !empty($concept)) {
                          echo "<input type='checkbox' name='concepts[]' checked value='$key'> " . $key . "<br>";
                          foreach ($concept as $key2 => $banner) {
                              if(is_numeric($key2)) {
                                echo "<div class='col-md-offset-1'><input type='checkbox' name='concept-" . $key . "[]' value='$key2'> " . $banner . "<br></div>";
                              }else {
                                echo "<div class='col-md-offset-1'><input type='checkbox' name='concept-" . $key . "[]' value='$key2'> " . $key2 . "<br></div>";
                              }    
                          }
                        }
                      }
                      ?>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-default">Submit</button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    
        <footer>
            <p>&copy; Company 2015</p>
        </footer>
    </div>
    <!-- /container -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>
    window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')
    </script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>
