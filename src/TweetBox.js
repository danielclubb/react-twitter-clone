import { Avatar, Button } from "@material-ui/core";
import React, { useState } from 'react';
import db from './firebase';
import './TweetBox.css';

function TweetBox(){
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            username: "happystark",
            displayName: "Daniel Clubb",
            avatar: "data:image/jpeg;base64,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",
            verified: true,
            text: tweetMessage,
            image: tweetImage
        });

        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="data:image/jpeg;base64,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"/>

                    <input
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's Happening?"
                        type='text'
                    />

                </div>

                <input
                    placeholder="Optional: Enter image url"
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    type="text"
                    className="tweetBox__imageInput"
                />

                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__button"
                >Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox; 