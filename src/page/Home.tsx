import React from 'react';
// import Marquee from 'react-fast-marquee';

import '../asset/styles/pages/home.scss';

import BanChicken from '../asset/image/ban-chicken.png';
import IntLeft1 from '../asset/image/int-left-1.png';
import IntLeft2 from '../asset/image/int-left-2.png';
import RmLeft3 from '../asset/image/rm-left-3.png';

import ChickenNFT1 from '../asset/image/chicken-nft-1.png';
import ChickenNFT2 from '../asset/image/chicken-nft-2.png';
import ChickenNFT3 from '../asset/image/chicken-nft-3.png';
import ChickenNFT4 from '../asset/image/chicken-nft-4.png';
import ChickenNFT5 from '../asset/image/chicken-nft-5.png';
import ChickenNFT6 from '../asset/image/chicken-nft-6.png';
import ChickenNFT7 from '../asset/image/chicken-nft-7.png';
import ChickenNFT8 from '../asset/image/chicken-nft-8.png';
import ChickenNFT9 from '../asset/image/chicken-nft-9.png';
import ChickenNFT10 from '../asset/image/chicken-nft-10.png';

const GiggleNFTs = [
  ChickenNFT1,
  ChickenNFT2,
  ChickenNFT3,
  ChickenNFT4,
  ChickenNFT5,
  ChickenNFT6,
  ChickenNFT7,
  ChickenNFT8,
  ChickenNFT9,
  ChickenNFT10,
];

const Home = () => {
  return (
    <div className="container">
      <div className="banner">
        <div>
          <div>
            <img src={BanChicken} alt="" />
          </div>
          <div className="content">
            <span>Stay Hungry,</span>
            <br />
            <span> Stay Foolish.</span>
            <br />
            <button>Wallet connect</button>
          </div>
          <div className="quote">
            <img src="" alt="" />
          </div>
          <div className="curve"></div>
        </div>
      </div>
      <div className="introduction" id="introduction">
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
      <div className="roadmap" id="roadmap">
        <div>
          <div>
            <img src={RmLeft3} alt="RmLeft3" />
          </div>
          <div className="content">
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
      </div>
      <div className="contract" id="contract">
        <div>
          <div></div>
          <div className="content">
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
                <li>5000 For Whitelists, 4000 For Public </li>
                <li>sale, 1000 for team</li>
              </ul>
            </div>
            <div>
              <h5>Launching Date:</h5>
              <ul>
                <li>TBA</li>
              </ul>
            </div>
          </div>
          <>
            {GiggleNFTs.map((i, k) => (
              <img
                key={k}
                src={i}
                alt={`NFT${k}`}
                style={{
                  position: 'absolute',
                  top: ``,
                  left: ``,
                  width: `15%`,
                  transform: `rotate() scale()`,
                  zIndex: `1`,
                }}
              />
            ))}
          </>
        </div>
      </div>
      <div className="faq" id="faq">
        <div>
          <div>
            <div>
              <h5>1. What makes Hungry Chicken so unique?</h5>
              <p>
                Hungry Chicken is the first GameFi NFT on Aptos backed by a passionate community of free-thinking
                degens.
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
        </div>
      </div>
      <div className="giggles">
        {GiggleNFTs.map((i, k) => (
          <div>
            <img src={i} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
