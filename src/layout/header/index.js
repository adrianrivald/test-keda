import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

function Header() {
  const [isOpen, setIsOpen] = React.useState(true);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const onClickMenu = (menu) => {
    document
      .getElementById(menu)
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const onSubmit = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-w-[120rem] h-[60px] mx-auto flex justify-between items-center py-16 px-8 lg:px-20 w-full fixed z-50 bg-white shadow">
      <img src="/images/logo/logo.png" width={200} />
      <ol className="hidden lg:flex flex items-center gap-14">
        <li
          onClick={() => onClickMenu("home")}
          className="cursor-pointer border border-white rounded-xl p-4 hover:bg-[#f0f0f0]"
        >
          Home
        </li>
        <li
          onClick={() => onClickMenu("about")}
          className="cursor-pointer border border-white rounded-xl p-4 hover:bg-[#f0f0f0]"
        >
          About
        </li>
        <li
          onClick={() => onClickMenu("pricing")}
          className="cursor-pointer border border-white rounded-xl p-4 hover:bg-[#f0f0f0]"
        >
          Pricing
        </li>
        <li
          onClick={() => onClickMenu("contact")}
          className="cursor-pointer border border-white rounded-xl p-4 hover:bg-[#f0f0f0]"
        >
          Contact
        </li>
        <li>
          <button
            onClick={open}
            className="border border-[#D90600] rounded-xl p-2 px-10 text-[#D90600]"
          >
            Login
          </button>
        </li>
      </ol>

      {/* Mobile menu */}
      <div className="flex lg:hidden items-center gap-8">
        <div className="flex lg:hidden flex-col cursor-pointer gap-2">
          <div className="bg-red-primary w-[30px] h-[3px]"></div>
          <div className="bg-red-primary w-[30px] h-[3px]"></div>
          <div className="bg-red-primary w-[30px] h-[3px]"></div>
        </div>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white border border-red-primary text-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium">
                Login
              </DialogTitle>

              <form onSubmit={onSubmit}>
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
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="border border-red-primary rounded-xl p-3 w-full focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <button className="mt-4 border bg-red-primary text-white rounded-xl p-3 w-full focus:outline-none">
                  Submit
                </button>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Header;
