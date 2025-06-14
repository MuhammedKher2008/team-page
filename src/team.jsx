import bgimage from "./assets/portrait-joyful-young-man-white-shirt.jpg";

import secondpartimage1 from "./assets/kadinteam.jpg";
import secondpartimage2 from "./assets/erkekteam.jpg";

import kisi1 from "./assets/kisi1.jpg";
import kisi2 from "./assets/d (1).jpg";
import kisi3 from "./assets/woman7.jpg";
import kisi4 from "./assets/ddddddd.jpg";

import kisi5 from "./assets/kisi5.jpg";
import kisi6 from "./assets/kisi6.jpg";
import kisi7 from "./assets/kisi7.jpg";
import kisi8 from "./assets/woman9.jpg";

import tekadam from "./assets/tekadam.jpg";

function Team() {
  return (
    <div className="team-page">
      <div className="firtpart">
        <h1 className="firtpart-title">Our Team mission, Vision</h1>
        <div className="firstpartCart1">
          <h6 className="firtpartcart1-title">Mission</h6>
          <p className="firtpartcart1-text">
            Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read. Considered use
            dispatched melancholy sympathize discretion led.{" "}
          </p>
        </div>
        <div className="firstpartCart2">
          <h6 className="firtpartcart1-title">vision</h6>
          <p className="firtpartcart1-text">
            Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read. Considered use
            dispatched melancholy sympathize discretion led.{" "}
          </p>
        </div>
      </div>
      <div className="secondpart">
        <h1 className="secontparttitle">
          IT Solution Strategy Development For Your Business
        </h1>
        <div className="secondpartcart1">
          <img className="secondpartwomen1" src={secondpartimage1} alt="" />
          <p className="secondparttext">
            Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read. Considered use
            dispatched melancholy sympathize discretion led.
          </p>
        </div>
        <div className="secondpartcart2">
          <img className="secondpartwomen1" src={secondpartimage2} alt="" />
          <p className="secondparttext">
            Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read. Considered use
            dispatched melancholy sympathize discretion led.
          </p>
        </div>
      </div>
      <div className="MembersPart">
        <h2 className="memebersPartTitle">Team Members</h2>
        <div className="arkaplan"></div>
        <div className="kisi1">
          <img className="kisi1img" src={kisi1} alt="" />
          <h5 className="kisi1Name">Nat Reynolds</h5>
          <p className="kisi1Gorev">Principal/ CEO</p>
        </div>
        <div className="kisi2">
          <img className="kisi1img" src={kisi2} alt="" />
          <h5 className="kisi1Name">Frank Kinney</h5>
          <p className="kisi1Gorev">Director of Technical Services</p>
        </div>
        <div className="kisi3">
          <img className="kisi1img" src={kisi3} alt="" />
          <h5 className="kisi1Name">Celia Almeda</h5>
          <p className="kisi1Gorev">Chief Operations Officer</p>
        </div>
        <div className="kisi4">
          <img className="kisi1img" src={kisi4} alt="" />
          <h5 className="kisi1Name">Mark Smith</h5>
          <p className="kisi1Gorev">Creative Leader</p>
        </div>
        <div className="kisi5">
          <img className="kisi1img" src={kisi5} alt="" />
          <h5 className="kisi1Name">Nat Reynolds</h5>
          <p className="kisi1Gorev">Principal/ CEO</p>
        </div>
        <div className="kisi6">
          <img className="kisi1img" src={kisi6} alt="" />
          <h5 className="kisi1Name">Frank Kinney</h5>
          <p className="kisi1Gorev">Director of Technical Services</p>
        </div>
        <div className="kisi7">
          <img className="kisi1img" src={kisi7} alt="" />
          <h5 className="kisi1Name">Celia Almeda</h5>
          <p className="kisi1Gorev">Chief Operations Officer</p>
        </div>
        <div className="kisi8">
          <img className="kisi1img" src={kisi8} alt="" />
          <h5 className="kisi1Name">Mark Smith</h5>
          <p className="kisi1Gorev">Creative Leader</p>
        </div>
      </div>
      <div className="contactUs">
        <h1 className="ContactUsTitle">
          If You Have More Questions Contact Us
        </h1>
        <p className="ContactUsText">
          We provide a full suite of dental care to cover you and your family’s
          oral health needs.
        </p>
        <button className="btn">
          <i class={`fa-solid fa-phone`}></i>
          <p>123-456-7896</p>
        </button>
      </div>
      <div className="tekadam">
        <img className="tekadamimg" src={tekadam} alt="" />
        <h3 className="TekAdamText">Contact Us</h3>
        <p className="tekadamtext2">
          We are here to meet any business need and to promote your company
          online!
        </p>
        <div className="number">
          <h3>phone</h3>
          <span>:1 (232) 252 55 11</span>
        </div>
        <div className="location">
          <h3>location</h3>
          <span>: 75 Street Sample, WI 63025</span>
        </div>
        <div className="mail">
          <h3>mail</h3>
          <span>: template@sample.com</span>
        </div>
      </div>
      <div className="footer">
        Sample text. Click to select the Text Element.
      </div>
    </div>
  );
}
export default Team;
