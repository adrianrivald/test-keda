import React from "react";
import { Fade } from "react-awesome-reveal";

function Contact() {
  return (
    <div id="contact" className="py-8 px-8 lg:px-40 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-24">
        <Fade triggerOnce direction="up">
          <div>
            <h2 className="text-4xl font-bold">Contact Us</h2>
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
        <Fade triggerOnce direction="up">
          <form>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  className="border border-red-primary rounded-xl p-3 w-full focus:outline-none"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="firstName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="border border-red-primary rounded-xl p-3 w-full focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full mt-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="border border-red-primary rounded-xl p-3 w-full focus:outline-none"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col gap-1 w-full mt-4">
              <label htmlFor="email">No. Telepon</label>
              <input
                id="telp"
                type="telp"
                className="border border-red-primary rounded-xl p-3 w-full focus:outline-none"
                placeholder="No Telepon"
              />
            </div>
            <button className="mt-4 border bg-red-primary text-white rounded-xl p-3 w-full focus:outline-none">
              Submit
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
}

export default Contact;
