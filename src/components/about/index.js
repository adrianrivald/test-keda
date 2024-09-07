import React from "react";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <div id="about" className="py-8 px-8 lg:px-40 mt-20">
      <h1 className="mb-20 text-4xl">About</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-24">
        <Fade triggerOnce direction="up">
          <div>
            <img src="/images/about.svg" />
          </div>
        </Fade>
        <Fade triggerOnce direction="up">
          <div>
            <h2 className="text-3xl font-bold">Mengapa KedaTech - ERP ?</h2>
            <p className="mt-4">
              Nulla commodo dolor ac mollis gravida. Nullam facilisis nisl nec
              elit vestibulum dignissim. Integer rhoncus, nibh id lacinia
              vehicula, nulla risus sollicitudin velit, euismod fermentum dui
              tellus eget leo. Aenean vitae facilisis tellus. Nullam iaculis
              congue nibh vel vehicula. Mauris nisi mauris, varius vitae mi in,
              hendrerit viverra elit. Cras ac nibh egestas sapien hendrerit
              fermentum non eu lacus. Proin dui urna, placerat ac efficitur ut,
              vestibulum vel lectus
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
