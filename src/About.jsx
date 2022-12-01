import React from "react";
import { FaHeart } from "react-icons/fa";
function About() {
  return (
    <div>
       <div className="m-12">
        <div className="text-gray-400"><p>A B O U T  U S</p></div>
        <div className="mt-10">
          <p>WHO AM I?</p>
        </div>
        <div className="mt-10 text-justify">
          <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, 
            that where it came from it would have been rewritten a thousand times and everything that
             was left from its origin would be the word "and" and the Little Blind Text should turn around
              and return to its own, safe country.</p>
        </div>
        <div className="mt-10 text-justify">
          
        <p>
              Even the all-powerful Pointing has no control about the blind texts it is an almost 
              unorthographic life One day however a small line of blind text by the name of Lorem Ipsum 
              decided to leave for the far World of Grammar.
              </p>
        </div>
       </div>
      <div className="m-12 flex ">
        
          
        <div class="h-56 grid grid-cols-4 gap-20 content-center ...">
          <div className="border-2 border-gray-200 p-4">
            <div className="align-center m-4 "> <FaHeart /></div>
              <div> <p>Graphic Design</p></div>
             
          </div>
          <div className="content-center">
          <div className="border-2 border-gray-200 p-4">
            <div className="align-center m-4 "> <FaHeart /></div>
              <div> <p>Web Design</p></div>
             
          </div>
          </div>
          <div>
          <div className="border-2 border-gray-200 p-4">
            <div className="align-center m-4 "> <FaHeart /></div>
              <div> <p>Software</p></div>
             
          </div>
          </div>
          <div>
          <div className="border-2 border-gray-200 p-4">
            <div className="align-center m-4 "> <FaHeart /></div>
              <div> <p>Application</p></div>
             
          </div>
          </div>
          
        </div>
      </div>
    </div>
    );
}
export default About;
