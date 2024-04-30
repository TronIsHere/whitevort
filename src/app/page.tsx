import { LuArrowDownRightFromCircle } from "react-icons/lu";
import { LuCrown } from "react-icons/lu";
const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto pt-10 text-textPrimary">
      <div className="flex flex-col justify-start">
        <div className="flex justify-between">
          <p className="text-[#636aed] text-xl">Tailwind buffet</p>
          <button className="bg-[#636aed] text-white px-5 py-2 rounded-lg">
            Go Pro
            <LuCrown className="inline-block text-lg ml-2" />
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">
          Grab Pre-cooked Components and Feast Your Projects!
        </h1>
        <h2 className="w-1/2 mt-3 text-gray-500">
          Why reinvent the wheel when you can pick from our smorgasbord of
          ready-to-use Tailwind components? Save time, reduce effort, and
          increase productivity by using our carefully crafted, fully
          customizable components.
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10 text-white">
        <div className="p-10 flex flex-col justify-between rounded-lg h-[300px] bg-gradient-to-br from-purple-500 to-[#636aed] transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer">
          <div>
            {" "}
            <h3 className="text-4xl font-bold">Base Components</h3>
            <p className="mt-3">Explore our basic and free stuff</p>
          </div>
          <div className="flex justify-end">
            <LuArrowDownRightFromCircle className="mt-5 text-5xl" />
          </div>
        </div>
        <div className="bg-[#f5f5f5] p-5 rounded-lg">
          <h3 className="text-xl font-bold">Component 2</h3>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            elementum, felis in pellentesque condimentum, ligula odio tempus
            justo, nec consectetur ex est ac nunc.
          </p>
        </div>
        <div className="bg-[#f5f5f5] p-5 rounded-lg">
          <h3 className="text-xl font-bold">Component 3</h3>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            elementum, felis in pellentesque condimentum, ligula odio tempus
            justo, nec consectetur ex est ac nunc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
