import { Container } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";

export function Card({devInput, setDevInput}) {
  const [info, setInfo] = useState({});

  const verifyNull = (item, txt) => {
    if (item == null) {
      return `No ${txt}`
    } else {
      return item
    } 
  };

  const getUser = async () => {
    const res = await axios.get(`https://api.github.com/users/${devInput}`);
    setInfo(res.data);
  }

  useEffect(() => {
    getUser();
  }, [devInput])

  return (
    <Container>
      <img src={info.avatar_url} alt="User Avatar" />
      
      <div className="info">
        <div className="profile">
          <div className="dev">
            <h2 className="name">{info.name}</h2>
            <h5 className="username"><a target="_blank" href={`http://github.com/${info.login}`}>@{info.login}</a></h5>
          </div>
          <h4 className="joined">Joined {info.created_at}</h4>
          <h5 className="bio">{verifyNull(info.bio, "bio")}</h5>
        </div>
        
        <div className="stats">
          <div className="repos">
            <span className="title">Repos</span> 
            <span className="number">{info.public_repos}</span>
          </div>
          <div className="followers">
            <span className="title">Followers</span> 
            <span className="number">{info.followers}</span>
          </div>
          <div className="following">
            <span className="title">Following</span> 
            <span className="number">{info.following}</span>
          </div>
        </div>

        <div className="pins">
          <h3 className="place">
            {verifyNull(info.location, "place")}
          </h3>
          <h3 className="twitter">
            {verifyNull(info.twitter_username, "twitter")}
          </h3>
          <h3 className="link">
            {verifyNull(info.blog, "blog")}
          </h3>
          <h3 className="corp">
            {verifyNull(info.company, "corp")}
          </h3>
        </div>
      </div>
    </Container>
  );
}