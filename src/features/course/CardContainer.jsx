/* eslint-disable react/prop-types */
import Card from "./Card";

function CardContainer({ catalog, onViewCatalogItem }) {
  return (
    <div className="flex flex-wrap px-3">
      {catalog.map((catalogItem) => (
        <div key={catalogItem.id} className="w-full sm:w-1/2 lg:w-1/3 p-3">
          <Card
            onViewCatalogItem={onViewCatalogItem}
            catalogItem={catalogItem}
          />
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
