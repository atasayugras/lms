import useCatalogResponse from "./useCatalogResponse.jsx";
import usePagination from "../layout/usePagination.jsx";
import CardContainer from "./CardContainer.jsx";
import Pagination from "../layout/Pagination.jsx";
import Spinner from "../layout/Spinner.jsx";

function Catalog() {
  const { catalog, handleViewCatalogItem, isLoading } = useCatalogResponse();
  const { currentItems, currentPage, totalPages, handlePageChange } =
    usePagination(catalog, 9); // 9 items per page for grid

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="px-8">
      <CardContainer
        catalog={currentItems}
        onViewCatalogItem={handleViewCatalogItem}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Catalog;
