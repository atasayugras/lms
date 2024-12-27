/* eslint-disable react/prop-types */

function Card(props) {
  const { catalogItem, onViewCatalogItem } = props;
  const { title, thumbnail, creationDate } = catalogItem;

  return (
    <div
      onClick={() => onViewCatalogItem(catalogItem)}
      className="rounded-lg bg-white shadow-md cursor-pointer"
    >
      <div className="relative aspect-video w-full">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full rounded-t-lg object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{catalogItem.title}</h3>
        <div className="text-gray-600">
          <span className="text-sm">{creationDate}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
