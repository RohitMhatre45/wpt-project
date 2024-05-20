import React from 'react'
import Footer from './Footer'
import 'font-awesome/css/font-awesome.min.css';
import './abou.css'
import rohtiimg from './uploads/Rohit.jpg'
import yashimg from './uploads/yash.jpg'
import akanksha from './uploads/Akanksha.jpg'
import akanksha1 from './uploads/Akanksha1.jpg'
// import k from './uploads/'
const About = () => {
  let k = ``
  let message=`Our Project Team Members`;
  return (
    <div>
        <section className="section-white">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 text-center">
                        <h1 className="section-title"><strong>About Us</strong></h1>
                        <p className="section-subtitle">{message}</p>
                    </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={rohtiimg} className="team-img" alt="pic" />
                                <h3>Rohit Mhatre</h3>
                                <div className="team-info">
                                    <p>Team Member</p>
                                    <p>Graduated with degree in computer engineering and currently pursuing PG-DAC at cdac Kharghar.</p>
                                    <ul className="team-icon">
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={yashimg} className="team-img" alt="pic" />
                                <h3>Yash Chimade</h3>
                                <div className="team-info">
                                    <p>Team Member</p>
                                    <p>Graduated with degree in ENTC engineering and currently pursuing PG-DAC at cdac Kharghar.</p>
                                    <ul className="team-icon">
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={akanksha1} className="team-img" alt="pic" />
                                <h3>Akanksha Kulkarni</h3>
                                <div className="team-info">
                                    <p>Team Member</p>
                                    <p>Graduated with degree in computer engineering and currently pursuing PG-DAC at cdac Juhu.</p>
                                    <ul className="team-icon">
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default About