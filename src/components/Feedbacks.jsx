import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../HigherOrderComponents";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import Tilt from "react-tilt";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  link,
  image,
}) => (
  // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
  //     <Tilt
  //       options={{
  //         max: 45,
  //         scale: 1,
  //         speed: 450,
  //       }}
  //       className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
  //     ></Tilt>
  <Tilt
  options={{
    max: 45,
    scale: 1,
    speed: 450,
  }}
>
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className=" bg-gradient p-10 rounded-3xl xs:w-[320px] w-full"
  >
   
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1 ">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
          </div>
          <a href={link}><img src={image} alt={`feedback by ${name}`} className="w-10 h-10 rounded-full object-cover " /></a>
        </div>
      </div>
  </motion.div>
  </Tilt>

);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
          <p className={styles.sectionSubText}>What my clients says about me?</p>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.key} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
