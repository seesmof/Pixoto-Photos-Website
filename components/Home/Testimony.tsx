import React from "react";

const TestimonyCard = ({ name, position, comment }: any) => {
  const randomImageId = Math.floor(Math.random() * 1000);
  return (
    <div className="bg-background rounded-md text-slate-200 p-4 flex flex-col">
      <div className="flex flex-row items-start gap-4 pb-3">
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
      </div>
      <p>{comment}</p>
    </div>
  );
};

const Testimonials = () => {
  const TestimonialsData = [
    {
      name: "John Smith",
      position: "Fashion Photographer",
      comment:
        "Working with Pixoto has been an incredible experience. Their attention to detail and creativity truly shine in their work. They captured the essence of my fashion line with precision.",
    },
    {
      name: "Emily Johnson",
      position: "Portrait Photographer",
      comment:
        "I am amazed by the quality of work Pixoto consistently delivers. Their portraits are breathtaking and they know how to make their subjects feel comfortable and confident during the shoot.",
    },
    {
      name: "Michael Lee",
      position: "Wedding Photographer",
      comment:
        "Pixoto's team captured every beautiful moment of our special day. The photos tell a story and bring back the emotions and happiness every time we look at them.",
    },
    {
      name: "Sophia Rodriguez",
      position: "Travel Photographer",
      comment:
        "I've had the pleasure of working with Pixoto on multiple travel projects. Their ability to capture the essence of different cultures and landscapes is truly exceptional.",
    },
    {
      name: "Daniel Brown",
      position: "Food Photographer",
      comment:
        "Pixoto's attention to detail is impeccable. They made my food creations look absolutely stunning. The photos are so captivating that they make people crave the dishes instantly.",
    },
    {
      name: "Aisha Patel",
      position: "Event Photographer",
      comment:
        "Pixoto knows how to capture the energy and atmosphere of an event. Their photos are vibrant and candid, giving life to every moment from corporate gatherings to social celebrations.",
    },
  ];

  return (
    <>
      <div className="flex py-10 flex-col p-4 bg-backgroundLight">
        <h3 className="subheading">Client Testimonials</h3>
        <h2 className="heading">Capturing Moments, Making Memories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
          {TestimonialsData.map((testimonial) => (
            <TestimonyCard {...testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
