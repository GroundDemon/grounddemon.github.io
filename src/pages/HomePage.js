import React from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function HomePage() {
  return (
    <div className="Page-Container">
 		<div className="Page-Title">
			Project<br/>
			<span className="Bold-Font">Ground Demon</span> <br/>
			<span className="Paragraph-Font">$100k to $1MM in 5yrs</span>
 		</div> 
 		<div className="Crack-In-Ground"></div>

 		<div className="Page-Title">
			Current Value<br/>
			<span className="Bold-Font">$510,000</span> <br/>
			
 		</div> 
 		<div className="Columns">
 			<div className="Asset">
 				TWILIO<br/>
				29%
 			</div>
 			<div className="Asset">
 				BITCOIN<br/>
				18%
 			</div>
 			<div className="Asset">
 				SHOPIFY<br/>
				14%
 			</div>
 			<div className="Asset">
 				HUBSPOT<br/>
				13%
 			</div>
 			<div className="Asset">
 				SQUARE<br/>
				11%
 			</div>
  			<div className="Asset">
 				SLACK<br/>
				6%
 			</div>
 			<div className="Asset">
 				CASH<br/>
				5%
 			</div>
 			<div className="Asset">
 				LYFT<br/>
				4%
 			</div>
 			<div className="Asset">
 				ALTS<br/>
				{'<1%'}
 			</div>
 			<div className="Section-End"></div>
 		</div>

  		<div className="Page-Title">
			History<br/>
			<span className="Paragraph-Font">41% average annual return</span>
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
				<span className="Year-End-Total">$510k</span>
				+BOY: $280k<br/>
				+cash: $67k<br/>
				+return: 47% <br/>
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

