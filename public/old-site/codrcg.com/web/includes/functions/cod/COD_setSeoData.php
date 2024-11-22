<?php
	function COD_setSeoData($data){
		return	
		//OG Data
			 "<meta property='og:title' content='$data[title]'>".
			 "<meta property='og:type' content='".(isset($data['type']) ? $data['type']:'website')."'>".
			 "<meta property='og:url' content='$data[url]'>".
			 "<meta property='og:site_name' content='".SITE_NAME."'>".
			 "<meta property='og:description' content='$data[desc]'>".
			 "<meta property='og:image' content='$data[image]'>".
		//Google Plus
			 "<link rel='publisher' href='".SiteGooglePlus."'>".
		//Item Prop
			 "<meta itemprop='name' content='$data[title]'>".
			 "<meta itemprop='description' content='$data[desc]'>".
			 "<meta itemprop='image' content='$data[image]'>".
		//Twitter
			 "<meta name='twitter:card' content='$data[image]' />".
			 "<meta name='twitter:site' content='".SiteTwitter."' />".
			 "<meta name='twitter:title' content='$data[title]' />".
			 "<meta name='twitter:description' content='$data[desc]' />".
			 "<meta name='twitter:creator' content='".SiteTwitter."' />".
			 "<meta name='twitter:image' content='$data[image]'>";
	}

	/*
	<!--

<script type="application/ld+json">
		{
		  "@context": "http://schema.org",
		  "@type": "LocalBusiness",
		  "address": {
			"@type": "PostalAddress",
			"addressLocality": "Buffalo, NY",
			"addressRegion": "NY",
			"streetAddress": "1 News Plaza",
			"postalCode": "14203"
		  },
		  "description": "The Buffalo News is Western New York's No.1 news source, providing in-depth, up-to the minute news in print and online. The Buffalo News online brings you breaking news updates, plus the latest in local news, sports, business, politics, opinion and arts and entertainment from around Buffalo and Western New York.",
		  "name": "The Buffalo News",
		  "telephone": "+1-800-777-8640"
		}

</script>


<script type="application/ld+json">
		{
		  "@context": "http://schema.org",
		  "@type": "Place",
		  "address": {
			"@type": "PostalAddress",
			"addressLocality": "Buffalo, NY",
			"addressRegion": "NY",
			"streetAddress": "1 News Plaza",
			"postalCode": "14203"
		  },
		  "geo": {
			"@type": "GeoCoordinates",
			"latitude": "42.8942568",
			"longitude": "-78.8839152"
		  },
		  "name": "The Buffalo News"
		}

</script>
-->


	*/

	//TODO: Add logo to root and google plus to sameAS
?>
