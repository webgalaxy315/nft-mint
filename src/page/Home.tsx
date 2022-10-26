import React from 'react';

import '../asset/styles/pages/home.scss';

import BannerBackground from '../asset/image/ban-chicken.png';
import IntLeft1 from '../asset/image/int-left-1.png';
import IntLeft2 from '../asset/image/int-left-2.png';

const GiggleNFTs = [BannerBackground];

const Home = () => {
  return (
    <div className="container">
      <div className="banner">
        <div>
          <div>
            <img src={BannerBackground} alt="" />
          </div>
          <div className="content">
            <h1>Stay Hungry, Stay Foolish.</h1>
            <button>Wallet connect</button>
          </div>
          <div className="quote">
            <img src="" alt="" />
          </div>
          <div className="curve"></div>
        </div>
      </div>
      <div className="introduction">
        <div>
          <div>
            <img src={IntLeft1} alt="" />
            <img src={IntLeft2} alt="" />
          </div>
          <div className="content">
            <p>
              Hungry Chickens are a group of people who are curious and foolish. We are curious about everything in the
              world and willing to learn. But we only choose one thing we love and stick to it.
            </p>
            <p>
              As old saying goes, "We only live once, but if we work it right once is enough". On the way of chasing our
              dreams, we will surely fight against fate and competitors.
            </p>
            <p>Let's fight life together! Fight for delicacy! Fight for dreams!</p>
          </div>
          <div className="quote">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="roadmap">
        <div>
          <img src="" alt="" />
          <div>
            <span>Giggle!</span>
          </div>
        </div>
        <div>
          <h4>Roadmap</h4>
          <div>
            <h5>First Stage:</h5>
            <ul>
              <li>PFP</li>
              <li>A Flock Of</li>
              <li>Chicken Carving</li>
              <li>For Good Things</li>
            </ul>
          </div>
          <div>
            <h5>Second Stage:</h5>
            <ul>
              <li>GameFi</li>
              <li>Hungry Chicken</li>
              <li>NFT And Postion</li>
              <li>NFT Synthesis</li>
              <li>Fighting Chicken</li>
              <li>NFT</li>
            </ul>
          </div>
          <div>
            <h5>Third Stage:</h5>
            <ul>
              <li>Airdrop Food NFT</li>
            </ul>
          </div>
          <div>
            <h5>Forth Stage:</h5>
            <ul>
              <li>PFP</li>
              <li>Fighting Chicken</li>
              <li>NFT and food</li>
              <li>NFT synthesis</li>
              <li>Fighting</li>
              <li>Checken</li>
              <li>NFT</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contract">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <h5>Standard:</h5>
            <ul>
              <li>Metaplex</li>
            </ul>
          </div>
          <div>
            <h5>Contract:</h5>
          </div>
          <div>
            <h5>Distribution:</h5>
            <ul>
              <li>5000 For Whitelists, 4000 For Public sale, 1000 for team</li>
            </ul>
          </div>
          <div>
            <h5>Launching Date:</h5>
            <ul>
              <li>TBA</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h5>1. What makes Hungry Chicken so unique?</h5>
            <p>
              Hungry Chicken is the first GameFi NFT on Aptos backed by a passionate community of free-thinking degens.
            </p>
          </div>
          <div>
            <h5>2. What marketplaces are you listed on?</h5>
            <p>Souffl3, Topaz, Bluemove</p>
          </div>
          <div>
            <h5>3. What is the total supply and the mint price?</h5>
            <p>10,000 Hungry Chicken. The price is TBA.</p>
          </div>
          <div>
            <h5>4. How to get the Allowlist?</h5>
            <p> You can participate in our giveaway events. Stay tuned.</p>
          </div>
          <div>
            <h5>5. When does the Game Launch?</h5>
            <p>The game will be released in early November.</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="giggle">
        {GiggleNFTs.map((i, k) => (
          <div>
            <img src="" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
