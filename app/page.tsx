import LinkedInIcon from './../components/icons/LinkedInIcon';
import GithubIcon from './../components/icons/GithubIcon';

export default function Home() {
  console.log('Hello from HOME');

  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="py-10 text-center">
        <p className=" text-5xl font-medium text-cyan-600 ">Mahbubur Rahman</p>
        <p className="mt-2 text-2xl">Typescript, C# and Dart Developer </p>
        <p className="text-md mt-5 leading-8 text-gray-800">
          I am a versatile developer with 2+ years of experience in Typescript, C#, Dart, VueJs,
          .Net Core, and Flutter. Strong in both front-end and back-end development, with a proven
          ability to deliver high-quality solutions.
        </p>
      </div>

      <div className="flex justify-center gap-16">
        <div className="h-8 w-8">
          <LinkedInIcon />
        </div>
        <div className="h-8 w-8">
          <GithubIcon />
        </div>
      </div>
    </div>
  );
}
