<?php
	
	 // $name = $_POST['name'];
	 // $email = $_POST['email'];
	 // $message = $_POST['message'];

	 // $to      = $email;
	 // $subject = 'Project Inquiry';
	 // $message = $message;
	 // $headers = 'From: $companymail' . "\r\n" .
	 //    'Reply-To: $companymail' . "\r\n" .
	 //    'X-Mailer: PHP/' . phpversion();

	 // mail($to, $subject, $message, $headers);


	$server = $_SERVER['SERVER_NAME'];
	global $companymail;
	if ($server == 'ibitwebsolutions.github.io') {
		$companymail = 'sales.ibitsolutions@gmail.com';
	} else if ($server == 'jb-ochinang.github.io') {
		$companymail = 'jb.ochinang@gmail.com';
	}

	 $name = $_POST['name'];
	 $email = $_POST['email'];
	 $message = $_POST['message'];

	 $to      = $email;
	 $subject = 'Project Inquiry';
	 $message = $message . 'From:' . $name;
	 $headers = 'From: $companymail' . "\r\n" .
	    'Reply-To: $companymail' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	 mail($to, $subject, $message, $headers);

	 

?>