import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    { id: 1, name: "Name", position: "Position" },
    { id: 2, name: "Name", position: "Position" },
    { id: 3, name: "Name", position: "Position" },
    { id: 4, name: "Name", position: "Position" },
    { id: 5, name: "Name", position: "Position" },
    { id: 6, name: "Name", position: "Position" },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet the Minds Behind Edusight
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          A passionate team of educators, innovators, and technologists working
          together to shape the future of education through AI.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, _index) => (
          <div key={member.id} className="flex flex-col ">
            <div className={`relative rounded-lg overflow-hidden`}>
              <Image
                src="/images/business_person.png"
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="text-left mt-4">
              <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
