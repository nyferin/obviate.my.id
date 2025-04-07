export function Interests() {
  const interests = [
    "Cybersecurity",
    "Programming",
    "Computer Network",
    "DevOps",
    "Cloud Computing",
  ];

  return (
    <div className="rounded-sm border border-current/30 text-justify">
      <h2 className="text-current/75 border-b border-current/50 px-5 py-3">
        <span className="font-semibold">Interests</span>
      </h2>
      <div className="flex flex-wrap justify-center px-7 py-5">
        {interests.map((interest, index) => (
          <p key={index} className="w-1/3 text-center py-2">
            <span>{interest}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
