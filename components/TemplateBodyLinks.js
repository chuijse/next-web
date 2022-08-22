import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackButton from "./BackButton";
import ShareButtons from "./Share";
import Button from "./Button";
import { PhotoTransitionContext } from "../Context/PhotoTransitionContext";

function ButtonArray({ collectionType, data }) {
  return (
    <div className="button-collection">
      <p>{collectionType}</p>
      {data.map((data, index) => (
        <span key={index}>
          <Button name={data.name} link={data.link}></Button>
        </span>
      ))}
    </div>
  );
}

export default function TemplateBodyLinks({
  colleagues,
  tecnologies,
  title,
  location,
  backButton,
  id,
}) {
  const [ref, inView] = useInView();
  const [inScreen, setInScreen] = useState(false);
  const { p, setPhotoTransition } = useContext(PhotoTransitionContext);

  useEffect(() => {
    if (inView) {
      //console.log(`inView: ${inView}`);
      setInScreen(true);
    }
  }, [inView]);

  return (
    <div className="course-body-links" ref={ref}>
      <motion.h3
        initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
        animate={inScreen && { clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        Links de interés
      </motion.h3>
      <motion.span
        className="course-body-links-aniamtion"
        initial={{ clipPath: "inset(100% 0% 0% 0%)", y: "-100%" }}
        animate={inScreen && { clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <div className="course-body-links-buttons">
          <ButtonArray
            data={colleagues}
            collectionType={"Colegas, compañeros y Colaboradores:"}
          />
          <ButtonArray
            data={tecnologies}
            collectionType={"Tecnicas, herramientas y tecnologías:"}
          />
        </div>
        <div onClick={() => setPhotoTransition(false)}>
          <BackButton
            text={`Volver a ${backButton}`}
            path="/teaching"
            id={`card-course${id}`}
            originPathname="/teaching"
          />
        </div>
        <ShareButtons
          title={`${title} | CHH Portafolio`}
          url={location.href}
          twitterHandle={"CHH_Portafolio"}
          tags={["CHH"]}
        />
      </motion.span>
    </div>
  );
}
