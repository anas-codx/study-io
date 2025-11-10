import Link from "next/link";
import { ArrowRight } from "lucide-react";

const UserInfoCard = () => {
  return (
    <main className="flex flex-col items-center justify-center ">
      <div>
        <h1 className="text-2xl font-semibold capitalize">User Information</h1>
      </div>
      <div>
        <textarea
          className="border rounded-lg p-2 shadow-md border-gray-300 outline-none focus:ring-1 focus:ring-gray-300"
          placeholder="Enter your information here..."
          rows={10}
          cols={50}
        ></textarea>
      </div>
      <div className="text-blue-400 border rounded-lg px-6 py-1 hover:bg-blue-200 hover:text-white transition">
        <Link
          href="/"
          className="text-blue-500 hover:underline flex items-center"
        >
          Next
          <ArrowRight className="inline-block ml-1 h-4 w-4" />
        </Link>
      </div>
    </main>
  );
};

export default UserInfoCard;
