import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="flex justify-center py-10">
        <div className="flex flex-col ">
          <div className="flex gap-5 justify-center text-red-600">
            <a href="https://www.facebook.com/harshitshakya123/" target="_blank">
              {" "}
              <i className=" fa fa-facebook "></i>
            </a>
            <a href="https://twitter.com/harshitshakya13" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>

            <a href="https://www.instagram.com/harshitshakya12/" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/harshitshakya12/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <p className="">
            Made with <i className="text-red-600 fa fa-heart-o"></i> by{" "}
            {/* <a className="brand" href="https://harshitshakya123.github.io/" target="_blank"> */}
            Harshit Shakya
            {/* </a> */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
