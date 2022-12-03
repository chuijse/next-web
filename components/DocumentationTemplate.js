import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import CourseBodyLinks from "../components/TemplateBodyLinks";
import CourseBodyDescription from "../components/TemplateBodyDescription";
import CourseHeaderInfo from "../components/TemplateHeaderInfo";
import CourseHeaderImage from "../components/TemplateHeaderImage";

export default function DocumentTemplate({
  documentType,
  isTablet,
  title,
  university,
  abstract,
  year,
  semester,
  mainImage,
  colleagues,
  tecnologies,
  portableText,
  imageGallery,
  location,
  slug,
  id,
  courseContent,
  role,
  _rawBody,
  fromUrl,
  history,
}) {
  const [descriptionTitle, setDescriptionTitle] = useState("");
  const [backButton, setBackButton] = useState("");
  const [clientType, setClientType] = useState("");
  //const { p, setPhotoTransition } = useContext(PhotoTransitionContext);
  //const [originPathname, setOriginPathname] = useState("");

  //console.log(_rawBody);

  /*if (location.state?.originPathname) {
    setOriginPathname(location.pathname) 
    console.log(originPathname)
  } else {
    setOriginPathname(location.state?.originPathname)
    console.log(originPathname)
  }*/

  /*window.onpopstate = function(event) {
    if(document.location.pathname === "/teaching" || originPathname === `/teaching` || originPathname === "start"){
      setPhotoTransition(false)
      alert("false: " + document.location.pathname +" "+ originPathname)
    } else {
      setPhotoTransition(true)
      alert("true: " + document.location.pathname +" "+ originPathname) 
    }
    //alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
  }
  //console.log(location.state)*/

  useEffect(() => {
    //
    switch (documentType) {
      case "course":
        setDescriptionTitle("Descripción del curso");
        setBackButton("Docencia");
        setClientType("Universidad");
        break;
    }
  }, []);

  return (
    <motion.article
      className="course-root"
      //exit={{ opacity: 0, backgroundColor: "#000" }}
      transition={{ duration: 0.5 }}
    >
      <section className="course-root-header">
        <CourseHeaderInfo
          isTablet={isTablet}
          title={title}
          universities={university}
          client={clientType}
          abstract={abstract}
          year={year}
          semester={semester}
          contents={courseContent}
          role={role}
        />
        <CourseHeaderImage isTablet={isTablet} mainImage={mainImage} />
      </section>
      <section className="course-root-body">
        <CourseBodyLinks
          colleagues={colleagues}
          tecnologies={tecnologies}
          title={title}
          location={location}
          backButton={backButton}
          id={id}
        />
        {/*<CourseBodyDescription
          portableText={_rawBody}
          imageGallery={imageGallery}
          descriptionTitle={descriptionTitle}
          slug={slug}
          id={id}
          location={location}
  />*/}
      </section>
    </motion.article>
  );
}
