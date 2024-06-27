import { recommendations } from "./recommendations";
import Card from "./Card";

export default function RecommendedLearning() {
  return (
    <div className="p-10">
      {Object.keys(recommendations).map((topic) => (
        <div key={topic}>
          <h2 className="text-2xl font-bold text-white mb-4 capitalize">
            {topic}
          </h2>
          <div className="flex  mb-5">
            {recommendations[topic].map((item) => (
              <Card
                key={item.url}
                name={item.name}
                url={item.url}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
