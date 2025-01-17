import React from "react";
import Image from "next/image";
import dots from "@/Image/DotsThreeVertical.svg";
function Table() {
  return (
    <>
      <div className="lg:overflow-x-hidden overflow-x-auto overflow-y-auto md:max-w-full max-h-[500px] max-w-[350px]">
        <table className="  table-auto w-full text-left border-collapse border border-t-0 border-[#F1E5D1] text-sm">
          <thead className="bg-[#F9F4EC] text-gray-600 border border-t-0 border-[#F1E5D1]">
            <tr className="flex items-center">
              <th className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </th>
              <th className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                Sr. No
              </th>
              <th className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                Date
              </th>
              <th className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Downline Name
              </th>
              <th className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Parent Category
              </th>
              <th className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                Distributor ID
              </th>
              <th className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                Contact
              </th>
              <th className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                OS Balance
              </th>
              <th className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                Status
              </th>
              <th className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-[#333333] ">
            {/* 1 */}
            <tr className="flex items-center border-t border-[#F1E5D1]">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr>
            {/* <!-- 2 --> */}
            <tr className="flex items-center border-t border-[#F1E5D1]">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr>
            {/* <tr className="hover:bg-gray-50 border-t border-[#F1E5D1] md:flex md:items-center">
              <td className=" pl-2 py-2 text-center">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" px-4 py-2 text-center">02</td>
              <td className=" md:px-5 lg:pl-2 py-2 text-left">01-07-2024</td>
              <td className=" pl-4 py-2 text-left">Amar H. Shah</td>
              <td className=" pl-2 py-2 text-left">Master Distributor</td>
              <td className=" px-6 py-2 text-left">MD25486569</td>
              <td className=" px-2 py-2 text-left">8866464917</td>
              <td className=" pl-2 py-2 text-center">200012.00</td>
              <td className=" px-4 py-2 text-center">
                <span className="bg-pink-500 text-white px-[30px] py-[6px] m-[10px] text-sm rounded">
                  Reversed
                </span>
              </td>
              <td className="border border-[#F1E5D1] border-b-0 border-t-0 px-4 py-2 text-center flex justify-center items-center">
                <div className="cursor-pointer">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr> */}

            {/* 3 */}

            <tr className="flex items-center border-t border-[#F1E5D1]">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr>

            {/* 4 */}
            <tr className="flex items-center border-t border-[#F1E5D1]">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr>

            {/* 5 */}
            <tr className="flex items-center border-t border-[#F1E5D1]">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr>

            {/* 6 */}
            <tr className="flex items-center border-t border-[#F1E5D1]">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr>

            {/* 7 */}
            <tr className="flex items-center border-t border-[#F1E5D1]">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
