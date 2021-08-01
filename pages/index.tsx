import Meta from "../components/Meta";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const success = () => toast("Successfully changed pfp!");
  return (
    <div className="dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center min-h-screen py-2">
      <Meta />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center space-y-5">
        <img
          className="w-48 h-48 rounded-full border-4 border-blue-300"
          src="https://scrapbook.hackclub.com/ella.png"
          alt="Profile picture"
        />
        <h1 className="text-6xl font-bold">
          I&apos;m{" "}
          <a className="text-blue-400" href="https://ella.cx">
            Ella.
          </a>
        </h1>
        <h4 className="text-lg">And this is my Slack profile picture!</h4>
        <div className="bg-blue-200 rounded-xl py-3 px-5">
          <a
            href={"/api/change-pfp"}
            className="dark:text-black text-black"
            onClick={success}
          >
            Change my pfp to a random cat pic &rarr;
          </a>
        </div>

        <ToastContainer />
      </main>

      <footer className="flex items-center justify-center flex-col w-full h-14 border-t">
        <div className="flex items-center">
          {" "}
          made by &nbsp;
          <img
            src="https://scrapbook.hackclub.com/ella.png"
            alt="Person"
            className="rounded-full w-5 h-5"
          />
          &nbsp; ella.
        </div>
        <a
          className="flex items-center justify-center underline"
          href="https://github.com/eilla1/slack-pfp"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source
        </a>
      </footer>
    </div>
  );
}
