import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function Type() {
  const { t } = useTranslation();
  const strings = Array.isArray(t("home.typeStrings", { returnObjects: true }))
    ? t("home.typeStrings", { returnObjects: true })
    : ["Software Developer", "Freelancer", "Full Stack Developer", "Open Source Contributor"];

  return (
    <Typewriter
      key={strings.join(",")}
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
