import HackathonComponent from "./HackathonComponent";

export default function PreviousHackathonsSectionComponent({
  previousHackathonsRef,
}) {
  return (
    <div className="mt-32 ml-5" ref={previousHackathonsRef}>
      <p className="text-6xl font-semibold mb-10">Previous Hackathons</p>
      <div>
        <HackathonComponent />
      </div>
    </div>
  );
}
