import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, LayoutGroup } from "framer-motion";
import style from "../styles/abstract/_colors.module.scss";

const routes = [
  { name: "About", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Teaching", path: "/teaching" },
  { name: "contact", path: "/contact" },
];

export default function Nav({ isMobil, location }) {
  const [selected, setSelected] = useState(0);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  return (
    <React.Fragment>
      <div className="top-bar">
        <h6 className="logo">Cristian Huijse Heise</h6>
        <div className="line" />
        <div className="nav">
          <nav className="layout-nav">
            <LayoutGroup>
              {routes.map((r, i) => (
                <ul key={`nav-ul-${i}`}>
                  {i > 0 && !isMobil ? <li> | </li> : null}
                  <li>
                    <ChhLink
                      routeId={i}
                      name={r.name}
                      path={r.path}
                      partialy={r.partialy}
                      location={router.pathname}
                      isSelected={selected === `route-id-${i}`}
                      setSelected={setSelected}
                    />
                  </li>
                </ul>
              ))}
            </LayoutGroup>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

function ChhLink({ path, name, routeId, location, setSelected, isSelected }) {
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  const [active, setActive] = useState();

  useEffect(() => {
    if (path !== "/") {
      if (location.startsWith(path)) {
        setActive(true);
        setSelected(`route-id-${routeId}`);
      } else {
        setActive(false);
      }
    } else if (path === location) {
      setActive(true);
      setSelected(`route-id-${routeId}`);
    } else {
      setActive(false);
    }
  }, [location]);

  return (
    <React.Fragment>
      {isSelected && (
        <motion.div
          layoutId="triangle"
          className="triangle"
          transition={spring}
        />
      )}
      <Link href={path} passHref>
        <motion.a
          className="nav-button"
          animate={{
            color: active ? style.primaryColor : style.backColor,
            //opacity: active ? 1 : 0.5,
          }}
          //transition={{ duration: 1 }}
        >
          {name}
        </motion.a>
      </Link>
    </React.Fragment>
  );
}
