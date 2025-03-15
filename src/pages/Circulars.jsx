import React from "react";

const Circulars = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        {/* Left Content Area - 70% */}
        <div className="md:w-[70%] w-full md:pr-4">
          <div className="bg-gray-100 shadow rounded p-6">
            <h1 className="text-2xl font-bold mb-4">
              Circulars & Notifications
            </h1>
            <p className="mb-4">Respected Seniors and dear friends,</p>
            <p className="mb-4">
              As per the BOS AGM 2023 resolution, the Constitution Amendment TV
              Committee was formed under the Chairmanship of Dr. Rajkumar
              Iyengar.
            </p>
            <p className="mb-4">
              The committee submitted the Draft of the New Byelaws to the
              Executive Committee. The proposed byelaws were discussed pointwise
              and the draft was approved by the Executive Committee at the
              meeting held on 23rd February 2025.
            </p>
            <p className="mb-4">
              An Extraordinary General Body meeting (EGM) is called on 5th April
              2025 at 5.00 pm-6:00pm at NIMHANS CONVENTION CENTRE, Hall A with
              the agenda of BYELAW amendment.
            </p>
            <p className="mb-4">
              The Draft Byelaw Copy with parawise comparative table (existing
              and proposed) is attached for your perusal. I request all BOS
              members to go through it and send any suggestions by mail to me
              (General Secretary, BOS) before 31st March, 2025. These
              suggestions will be put up for discussion in the EGM.
            </p>
            <p>
              Regards, <br />
              Dr. Ramesh Bun <br />
              General Secretary, BOS <br />
              Ph: 9845574754 <br />
              Email:{" "}
              <a
                href="mailto:drrameshbangaru66@gmail.com"
                className="text-blue-500 underline"
              >
                drrameshbangaru66@gmail.com
              </a>
            </p>
          </div>
        </div>
        {/* Right Links Area - 30% */}
        <div className="md:w-[30%] w-full md:pl-4 mt-4 md:mt-0">
          <div className="bg-gray-100 shadow rounded ">
            <h2 className="text-xl font-bold mb-4 text-left px-4 pt-4">
              Important Links
            </h2>
            <ul className="space-y-4 ">
              <li className="group border-y-[1px] hover:bg-gray-200 border-gray-300  p-3">
                <a
                  href="/bos.pdf"
                  download
                  className="text-gray-700 group-hover:text-gray-900 font-medium"
                >
                  Download AGM Circular
                </a>
              </li>
            </ul>
            <ul className="space-y-4 ">
              <li className="group border-y-[1px] hover:bg-gray-200 border-gray-300  p-3">
                <a
                  href="/egm.pdf"
                  download
                  className="text-gray-700 group-hover:text-gray-900 font-medium"
                >
                  Download EGM Circular
                </a>
              </li>
            </ul>
            <ul className="space-y-4 ">
              <li className="group border-y-[1px] hover:bg-gray-200 border-gray-300  p-3">
                <a
                  href="/bylaws.pdf"
                  download
                  className="text-gray-700 group-hover:text-gray-900 font-medium"
                >
                  Download Bylaws Circular
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circulars;
