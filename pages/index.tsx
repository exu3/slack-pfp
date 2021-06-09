import Meta from "../components/Meta";

export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center min-h-screen py-2">
      <Meta />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center space-y-5">
        <img
          className="w-48 h-48 rounded-full border-4 border-blue-300"
          src="https://cloud-hvd4ca9hs-hack-club-bot.vercel.app/0image_from_ios.png"
          alt="Profile picture"
        />
        <h1 className="text-6xl font-bold">
          Hey, I&apos;m{" "}
          <a className="text-blue-400" href="https://ella.cx">
            Ella.
          </a>
        </h1>
        <h4 className="text-lg">And this is my Slack profile picture!</h4>
        <div className="flex">
          go to{" "}
          <code className="bg-gray-200 dark:bg-gray-700 rounded-lg px-1">
            /api/set-pfp
          </code>{" "}
          to change my pfp
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/eilla1/slack-pfp"
          target="_blank"
          rel="noopener noreferrer"
        >
          this project is open source!
        </a>
      </footer>
    </div>
  );
}
