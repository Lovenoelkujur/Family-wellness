import React from 'react';
import "./Body.css"
import img from "../assets/family.jpeg";

const Body = () => {
  return (
    <div>
        <div>
            <img src={img} alt='img'/>
        </div>

        <div className='color-part'>
            <h2>Think Health, Think Massage.</h2>
            <p>
                we are open 9am to 6pm , monday to saturday, if you would like to schedule an apppoinment
                with us , please contact us 987-654-3210 today!
            </p>
            <div className='btn'>
                <button>LEARN MORE ABOUT US</button>
                <button>CONTACT US TODAY</button>
            </div>
        </div>

        <div className='para'>
            <p className='p1'>
                Are you looking for a professional registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.
            </p>
            <p>
                We are committed to your long term health and well-being. Our Multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.
            </p>
            <p>
                We Welcome you to come explore all the benifits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.
            </p>
            <hr />
        </div>

        <div className='contact'>
            <h2 className='contact-title'>
                Family Wellness Massage Therapy
            </h2>
            <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
            <p>Phone: 987 654 3210</p>
        </div>
    </div>
  )
}

export default Body