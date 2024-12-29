import { useNavigate } from "react-router-dom";
import catalog from "../../data/catalog.json";
import useLoading from "../layout/useLoading.jsx";

function useCatalog() {
  const navigate = useNavigate();
  const isLoading = useLoading(true, 1000);

  const handleViewCatalogItem = (catalogItem) => {
    navigate(`/course/${catalogItem.id}`);
  };

  return {
    catalog,
    handleViewCatalogItem,
    isLoading,
  };
}

export default useCatalog;
