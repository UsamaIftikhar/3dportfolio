import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../HigherOrderComponents";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { Tilt } from "react-tilt";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  link,
  image,
  country
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
      className=" bg-gradient p-5 rounded-3xl xs:w-[340px] w-full"
    >

      <p className="text-white font-black text-[30px]">"</p>

      <div className="mt-1 ">
        <p className="text-white tracking-wider text-[16px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex align-center">
            <img src={image} alt={`feedback by ${name}`} className="w-10 h-10 rounded-full object-cover " />
            <div className="pl-2">
              <p className="text-white font-bold text-[16px]">
                {name}
              </p>
              <p className="text-white font-medium text-[12px]">
                {country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </Tilt>

);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`sm:px-8 px-6 sm:py-16 py-10 bg-tertiary rounded-2xl sm:min-h-[300px] min-h-[230px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
          <p className={styles.sectionSubText}>What my clients says about me?</p>
        </motion.div>
      </div>

      <div className={`sm:px-8 px-6 -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.key} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
