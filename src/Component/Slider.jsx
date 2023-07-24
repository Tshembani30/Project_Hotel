import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Slider.css'

function Slider() {
  return (
    
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="slid"
            src="https://media.istockphoto.com/id/1406990553/photo/fresh-white-bedclothes-and-towels-on-bed.jpg?s=612x612&w=0&k=20&c=IsZzZb4M-gtcEQuAlFQvyxIovzmZIqUTY5qYFirA6zU="
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Get the free PlayStation App from the iOS App Store.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slid"
            src="https://media.istockphoto.com/id/1400834458/photo/suitcase-in-hotel-room.jpg?s=612x612&w=0&k=20&c=jrKKlm4c6G5JNf-C-m9QdV3rWs6W3pp9L_ItYjgeJjQ="
            alt="Second slide "
          />
          <Carousel.Caption>
            <p>LGet the free Wifi App from the iOS App Store.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slid"
            src="https://media.istockphoto.com/id/1452562276/photo/a-farmhouse-bathroom-with-a-wood-cabinet-and-subway-tile-shower.jpg?s=612x612&w=0&k=20&c=Lp_-mxtu1ARc_QvP8RYjf7WZ7c8VueiyFTr-_htU2pM="
            alt="Second slide "
          />
          <Carousel.Caption>
            <p>Get the free Wifi App from the iOS App Store.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slid"
            src="https://media.istockphoto.com/id/1328934427/photo/3d-render-of-luxury-hotel-room.jpg?s=612x612&w=0&k=20&c=JvG7-4N9mTGeGZvX5LXIwo3CGK2rXcFcEq5ymcc9zAk="
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>Get the free Wifi App from the iOS App Store.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slid"
            src="https://media.istockphoto.com/id/1404266465/photo/modern-luxury-bathroom-interior.jpg?s=612x612&w=0&k=20&c=4ZI3-BHT5c4uxX_df_-Fpu-iMKdPAzVaBkd0oYLLT7Q="
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>
              Get the free Wifi App from the iOS App Store.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    

  );
}

export default Slider;