import Head from "next/head";
import { Helmet } from "react-helmet";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <div className="parallax"></div>
        <h1 className={"mainTitle"}>Wassup, I'm Nithish Pravin</h1>
        <h2 className={"subTitle"}>
          A <span className={"rainbow_text_animated"}>programmer</span> under 15
          and a <span className={"rainbow_text_animated"}>weeb</span>, what
          else?
        </h2>
        <h1 className={"typing"}>
          I like to mess with&nbsp;
          <span
            className="txt-rotate"
            data-period="2000"
            data-rotate='[ "JavaScript", "NodeJs", "Java", "Flutter", "Python", "ReactJs" ]'
          />
        </h1>
        <div className="social-buttons">
          <a
            href="#"
            class="social-buttons__button social-button social-button--github"
            aria-label="Github"
          >
            <span class="social-button__inner">
              <AiFillGithub />
            </span>
          </a>

          <a
            href="#"
            class="social-buttons__button social-button social-button--youtube"
            aria-label="Youtube"
          >
            <span class="social-button__inner">
              <AiFillYoutube />
            </span>
          </a>

          <a
            href="#"
            class="social-buttons__button social-button social-button--instagram"
            aria-label="Instagram"
          >
            <span class="social-button__inner">
              <FiInstagram />
            </span>
          </a>

          <a
            href="#"
            class="social-buttons__button social-button social-button--discord"
            aria-label="Discord"
          >
            <span class="social-button__inner">
              <FaDiscord />
            </span>
          </a>
        </div>
        <div className="window">
          <div className="titlebar">
            <div className="buttons">
              <div className="close">
                <a className="closebutton">
                  <span className="spanterminal">
                    <strong>x</strong>
                  </span>
                </a>
              </div>
              <div className="minimize">
                <a className="minimizebutton">
                  <span className="spanterminal">
                    <strong>&ndash;</strong>
                  </span>
                </a>
              </div>
              <div className="zoom">
                <a className="zoombutton">
                  <span className="spanterminal">
                    <strong>+</strong>
                  </span>
                </a>
              </div>
            </div>
            <div
              style={{
                float: "center",
                color: "#ffffff",
                fontSize: "11px",
                paddingTop: "3px",
                lineHeight: "11px",
                marginRight: "50px",
              }}
            >
              Terminal - About-Me
            </div>
          </div>
          <div className="content">
            <h3 style={{ marginTop: "0px" }}>D://Nithish//About:~ $ node</h3>
            Welcome to Node.js v12.19.0.
            <br />
            Type ".help" for more information.
            <br />
            {">"} var about = require('./about-me.txt');
            <br />
            <span style={{ color: "grey" }}>undefined</span>
            <br />
            {">"} console.log(about);
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </div>
        </div>

        <Helmet>
          <script>{`
              var TxtRotate = function(el, toRotate, period) {
              this.toRotate = toRotate;
              this.el = el;
              this.loopNum = 0;
              this.period = parseInt(period, 10) || 2000;
              this.txt = '';
              this.tick();
              this.isDeleting = false;
          };

              TxtRotate.prototype.tick = function() {
              var i = this.loopNum % this.toRotate.length;
              var fullTxt = this.toRotate[i];

              if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

              this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

              var that = this;
              var delta = 175 - Math.random() * 100;

              if (this.isDeleting) { delta /= 2; }

              if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 500;
          }

              setTimeout(function() {
              that.tick();
          }, delta);
          };

              window.onload = function() {
              var elements = document.getElementsByClassName('txt-rotate');
              for (var i=0; i<elements.length; i++) {
              var toRotate = elements[i].getAttribute('data-rotate');
              var period = elements[i].getAttribute('data-period');
              if (toRotate) {
              new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
          }
              // INJECT CSS
              var css = document.createElement("style");
              css.type = "text/css";
              css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #FFF }";
              document.body.appendChild(css);
          };
                  `}</script>
        </Helmet>
      </div>
    </>
  );
}
