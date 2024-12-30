/* eslint-disable react/prop-types */
import Card from "./Card";

function CardContainer({ catalog, onViewCatalogItem }) {
  return (
    <div className="px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalog.map((catalogItem) => (
          <Card
            key={catalogItem.id}
            onViewCatalogItem={onViewCatalogItem}
            catalogItem={catalogItem}
          />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
