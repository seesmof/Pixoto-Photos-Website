export const TestimonyCard = ({ name, position, comment }: any) => {
  const randomImageId = Math.floor(Math.random() * 1000);
  return (
    <article className="bg-background rounded-md text-slate-200 p-4 flex flex-col">
      <section className="flex flex-row items-start gap-4 pb-3">
        <div className="w-14 h-14 bg-slate-600 rounded-full">
          <img
            src={`https://picsum.photos/200/200?random=${randomImageId}`}
            alt="Person's Face"
            className="w-14 h-14 rounded-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-slate-50 text-xl font-medium">{name}</h3>
          <h3 className="pt-1">{position}</h3>
        </div>
      </section>
      <p>{comment}</p>
    </article>
  );
};
