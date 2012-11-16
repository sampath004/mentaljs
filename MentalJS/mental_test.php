<?php
require("Mental.php");
$input = (string) $_POST['input'];
?>
<!doctype html>
<html>
	<head>
		<title>MentalJS PHP test</title>
		<style>
			body {
				font: 62.5%/1.3em "Lucida Grande", verdana, arial, helvetica, sans-serif;
			}
			#input, #output {
				width:400px;
				height:200px;
			}
			label {
				display:block;
			}
			input {
				display:block;
			}
			fieldset {
				width:50%;
			}
		</style>
	</head>
	<body>
		<img src="images/logo.png" alt="Mental JS" />	
		<fieldset>
		<legend>MentalJS PHP</legend>
		<form action="mental_test.php" method="post">
			<label>Input</label>
			<textarea name="input" id="input"><?php echo htmlentities($input, ENT_QUOTES);?></textarea>			
			<?php IF($_POST['run']):?>			
			<?php
			$start = microtime(true);
			$result = 'Invalid option.';			
			$js = new MentalJS;
			switch($_POST['option']) {
				case "Rewrite":
					$js = new MentalJS;
					try {	
						$result = $js->rewrite($input);
					} catch (Exception $e) {
					    $result = $e->getMessage();
					}
				break;
				case "Minify":
					$js = new MentalJS;
					try {	
						$result = $js->minify($input);
					} catch (Exception $e) {
					    $result = $e->getMessage();
					}
				break;
				case "isValid":
					$js = new MentalJS;
					try {	
						$js->parse($input);
					} catch (Exception $e) {}
					$result = $js->isValid();
				break;
				case "ParseTree":
					$js = new MentalJS;
					try {	
						$result = $js->getParseTree($input);
					} catch (Exception $e) {
					    $result = $e->getMessage();
					}
				break;				
			}
			$end = microtime(true);
			echo '<p><b>Parse time:' . abs($end - $start) . 'ms</b></p>';
			?>
			<label>Output</label>
			<textarea name="output" id="output"><?php echo htmlentities($result, ENT_QUOTES);?></textarea>
			<?php ENDIF?>
			<fieldset>
				<legend>Options</legend>
				<select name="option">
					<option>Rewrite</option>
					<option>Minify</option>
					<option>isValid</option>
					<option>ParseTree</option>
				</select>
			</fieldset>
			<input type="hidden" Value="1" name="run" />
			<input type="submit" Value="Parse" />
		</form>
		</fieldset>
	</body>
</html>