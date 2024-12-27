import useCatalogResponse from "./useCatalogResponse.jsx";
import CardContainer from "./CardContainer.jsx";

function Catalog() {
  const { catalog, handleViewCatalogItem } = useCatalogResponse();
  return (
    <CardContainer
      catalog={catalog}
      onViewCatalogItem={handleViewCatalogItem}
    />
  );
}

export default Catalog;
