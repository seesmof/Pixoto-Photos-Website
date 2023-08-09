import {
  cardBackgroundClasses,
  imageClasses,
  imageWrapperClasses,
  mainSectionClasses,
  nameSubheadingClasses,
} from "./data/TestimonyCardData";

export const TestimonyCard = ({ name, position, comment }: any) => {
  const randomImageId = Math.floor(Math.random() * 1000);

  return (
    <article className={cardBackgroundClasses}>
      <section className={mainSectionClasses}>
        <div className={imageWrapperClasses}>
          <img
            src={`https://picsum.photos/200/200?random=${randomImageId}`}
            alt="Person's Face"
            className={imageClasses}
          />
        </div>

        <div className="flex flex-col">
          <h3 className={nameSubheadingClasses}>{name}</h3>
          <h3 className="pt-1">{position}</h3>
        </div>
      </section>
      <p>{comment}</p>
    </article>
  );
};
