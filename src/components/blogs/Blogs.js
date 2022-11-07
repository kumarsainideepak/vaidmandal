import React from "react";
import Footer from "../Footer";
import './blogs.css';
export default function Blogs()
{
    return (
        <div>
        <div className="blogs">
            <h3 className="objective--header">Objective</h3>
            <article className="objective--body">
                Ayurveda has been showing us the way to a healthy life for thousands of years. In ancient India, Ayurveda was considered one of the best ways to treat diseases and lead a healthy lifestyle. Due to the importance of maintaining good health, we have not stopped using the principles and concepts of Ayurveda even in the modern world - this is the importance of Ayurveda.
            </article>
            <h3 className="history--header">
                History of Ayurveda
            </h3>
            <article className="history--body">
            Ayurveda is an ancient medical science that has been practiced in India for at least 5,000 years. The word comes from the Sanskrit words ayur (life) and veda (knowledge). Ayurveda, or Ayurvedic medicine, was documented in the Vedas and Puranas many centuries ago. It is another matter that Ayurveda has evolved over the years and is now integrated with other traditional practices including yoga.
            </article>
            <h3 className="dosha--header">Importance of Tridosha Vata-Pitta-Kapha in Ayurveda and their relation to our health:</h3>
            <article className="dosha--body">
            Ayurveda identifies three basic types of energy or functional principles that are present in everyone and everything. This is called the Tridosha principle. When these three doshas Vata, Pitta and Kapha (Vata, Pitta, Kapha) are balanced then the body remains healthy. The principles of Ayurveda may be related to the basic biology of the body. In Ayurveda, the body, mind and consciousness work together in maintaining balance. An unbalanced state of body, mind and consciousness is called vikruti. Ayurveda brings health and keeps the doshas in balance.
            </article>
            <article className="dosha--body">
                Overall, it aims to maintain and improve general health, regardless of age.
                According to Ayurvedic philosophy, our body is made up of five elements (water, earth, sky, fire and air). Matter, Pitta and Kapha are combinations and permutations of these five elements that all manifest as patterns present in creation.
            </article>
            <h4 className="vata--header">Vata</h4>
            <article className="vata--body">
                In the physical body, Vata is the subtle energy of movement, the energy of digestion and metabolism, and the cleansing energy that makes up the structure of the body. Vata is the subtle energy associated with motion – made up of space and air. , It controls breathing, blinking, muscle and tissue movement, heartbeat, and all movements in the cytoplasm and cell membrane. In balance, Vata promotes creativity and flexibility. In the absence of balance, Vata creates fear and anxiety.
            </article>
            <h4 className="pitta--header">Pitta</h4>
            <article className="pitta--body">
                Pitta represents the body's metabolic system as- made up of fire and water. It regulates digestion, absorption, assimilation, nutrition, metabolism and body temperature. In balance, Pitta promotes understanding and intelligence. In the absence of balance, pitta creates anger, hatred and jealousy.
            </article>
            <h4 className="kapha--header">Kapha</h4>
            <article className="kapha--body">
                Kapha is the energy that builds the body's structure - bones, muscles, tendons and provides the 'glue' that holds cells together, which is made up of earth and water. It lubricates the joints, moisturizes the skin, and maintains immunity. In balance, Kapha is expressed as love, peace, and forgiveness. Out of balance, it leads to attachment, greed and jealousy.
            </article>
            </div>
            <Footer/>
        </div>
    )
}