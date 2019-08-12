import React from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function HomePage() {
  return (
    <div className="Page-Container">
 		<div className="Crack-In-Ground">
			Project<br/>
			<span className="Bold-Font">Ground Demon</span> <br/>
 		</div>

 		<div className="Page-Title2">
			Long Positions<br/>
			<span className="Bold-Font">$493,000</span> <br/>
			
 		</div> 
 		<div className="Columns">
 			<div className="Asset">
 				TWILIO<br/>
				27%
 			</div>
 			<div className="Asset">
 				BITCOIN<br/>
				21%
 			</div>
 			<div className="Asset">
 				SHOPIFY<br/>
				15%
 			</div>
 			<div className="Asset">
 				HUBSPOT<br/>
				14%
 			</div>
 			<div className="Asset">
 				SQUARE<br/>
				10%
 			</div>
  			<div className="Asset">
 				SLACK<br/>
				7%
 			</div>
 			<div className="Asset">
 				LYFT<br/>
				6%
 			</div>
 			<div className="Asset">
 				ALTS<br/>
				{'<1%'}
 			</div>
 			<div className="Asset">
 				CASH<br/>
				0%
 			</div>
 			<div className="Section-End"></div>
 		</div>

  		<div className="Page-Title">
			History<br/>
			<span className="Bold-Font">41% Annual Returns</span>
 		</div> 
 		<div className="Columns">
 			<div className="History-Section">
				2017<br/>
				<span className="Year-End-Total">$164k</span>
				+BOY: $0<br/>
				+cash: $105k<br/>
				+return: 59% <br/>
 			</div>
 			<div className="History-Section">
				2018<br/>
				<span className="Year-End-Total">$280k</span>
				+BOY: $164K<br/>
				+cash: $66k<br/>
				+return: 22% <br/>
 			</div>
 			<div className="History-Section">
				2019 (Current)<br/>
				<span className="Year-End-Total">$493k</span>
				+BOY: $280k<br/>
				+cash: $62k<br/>
				+return: 46% <br/>
 			</div>
 			<div className="History-Section">
				2020<br/>
				<span className="Year-End-Total">?????</span>
				?????<br/>
				?????<br/>
				?????<br/>
 			</div>
 			<div className="History-Section">
				2021<br/>
				<span className="Year-End-Total">?????</span>
				?????<br/>
				?????<br/>
				?????<br/>
 			</div>
			<div className="Section-End"></div>
 		</div>

  		<div className="Page-Title">Updates</div>
  		<div className="Twitter-Containter">
			 <TwitterTimelineEmbed
			  sourceType="profile"
			  screenName="grounddemonrby"
			  options={{height: 800}}
			/>
		</div>
    </div>
  )
}

