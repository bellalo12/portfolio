import React from 'react';
import bella from './bella.png';
import Tilt from 'react-tilt'
import resume from './resume.pdf';

const About =()=>{
  return(
    <div>
    <article className="mw6 shadow-5 center bg-white br3 pa4 pa4-ns mv3 ba b--black-10">
   <div className="tc">
   <Tilt className="Tilt center" options={{ max : 85 }} style={{ height: 125, width: 125 }} >
   <div className="Tilt-inner center"><img alt='yifang'src={bella} className="br-100 h4 w4 dib" /> </div>
   </Tilt>
   <h1 className="f4">{'YIFANG LO'}</h1>
    <hr className="mw3 bb bw1 b--black-10" />
  </div>
  <p className="lh-copy measure center f6 black-70 animated fadeInRight">
    {'Self-taught web developer with background in foral design, baking and business.  Passionate about applying technology to solve real world problems and to create value.  Learning new things is always excited me.'}
  </p>
  <div className="ph3 center grow dim">
  <a className="f6 link br-pill ph3 pv2 mb2 dib white bg-navy shadow-5 animated fadeInUp" href={resume}>Download Resume</a>
</div>
</article>
    </div>
  );
}




export default About;
