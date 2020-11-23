import React from 'react'
import Tweet from './Tweet'

function Tweets(props) {
    const tweets =[
    {
      name:"Alexander",
      age:28,
      lastName:"de Jongh",
      tweet:"Hello i am a new debveloper"
    },
    {
      name:"Marco",
      age:23,
      lastName:"Valk",
      tweet:"I like to play games"
    },
    {
      name:"Johnnie",
      age:23,
      lastName:"Space",
      tweet:"I am a astraunut"
    },
    {
      name:"James",
      age:23,
      lastName:"the Great",
      tweet:"My job is to be Great"
    },
]
    return (
        <section>
            <h1 className="tweetTitle">I have {tweets.length} new tweets</h1>
            {tweets.map((tweet, index) => {
                return <Tweet 
                key={index}
                name={`${tweet.name}  ${tweet.lastName}`} 
                tweet={tweet.tweet}
                />
            })}
            
        </section>
    )
}

export default Tweets
