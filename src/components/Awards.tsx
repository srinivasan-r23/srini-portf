import { awards } from "../constants";

const Awards = () => {
  return (
    <div className="py-16">
      <h3 className="subhead-text">Honors & Awards</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Throughout my career, I have been fortunate to receive recognition for
          my contributions and achievements at both Accenture and AT&T. These
          awards reflect my commitment to excellence, innovation, and teamwork
          in the tech industry. They serve as a testament to my continuous
          growth and dedication to delivering impactful solutions.
        </p>

        <div className="mt-16 flex flex-wrap gap-12">
          {awards.map((award) => (
            <div
              className="relative group w-20 h-20 transform transition-transform duration-300 hover:scale-125"
              key={award.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={award.imageUrl}
                  alt={award.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>

              {/* Popup Tooltip */}
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <span className="text-xs p-2 font-semibold">
                  {award?.name} - {award?.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
