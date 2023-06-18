import "./Front.css";
import "../App.css";
 
const ImageWithText = () => {
    return (
        <>
      <div className="container">
        <img src="/images/image2.jpg" alt="Root" className="image" />
        <div className="text-container">
         <h3> <a href="/about">About</a></h3>
          {/* <h4>Clement Shobayou
Age: 32 years
Ethnicity: Black African
Height: 175 cm
Hair: Black
Eyes: Brown
Shoe size: 43
Top: /M
Bottom: /M
Waist: 32/32
Clement Shobayou
bayoclement@yahoo.com
</h4> */}
          {/* <h2>I’m a Swedish-Nigerian, living between Uppsala, Sweden, and mostly Manchester, United Kingdom. I’m extremely driven by strong sense of passion, passion for making an impact in bringing people together and to serve.
Over the years I have gained extensive ability to adapt to new responsibilities and surroundings working solo, within diverse teams and even leading to deliver substantial results through effective use of networking, digital and in-person activation.
A while ago, I was an ambitious Civil Engineer, in Uppsala Sweden. I have lived and worked in healthcare in Japan for 3 years in Yokohama where I learnt to show respect whenever possible to oneself, others, and nature. Today I live in a vibrant city of Manchester, as an aspiring charity brand ambassador, and self-taught fashion stylist, since 2 years ago it’s all I do and I love it! I’m extremely image conscious be it health, skincare and wellness. I consider myself naturally creative, self-assured, and hard worker. My friends would describe me as positive, vibrant, caring, food-lover and peacekeeper. 
I believe I have so much potential to unlock in all aspects of work in the creatives industry and I’m really looking forward to gaining experience and exposure. I adore posting pictures of my life, my journey because I want to inspire people to dare to start a new life and follow their heart and chase their dreams, move to a new city, a new country, move careers without fear – regardless of age, ethnicity or societal standards.

Interested In
- Editorial/ Catalogue
- Commercial
- TV/ Film Extras
- Charity Ambassador
- Modelling
</h2> */}
        </div>
      </div>

      </>
    );
  };
  
  export default ImageWithText;