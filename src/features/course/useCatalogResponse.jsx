import catalog from "../../data/catalog.json";
import { useNavigate } from "react-router-dom";

function useCatalogResponse() {
  const navigate = useNavigate();
  const handleViewCatalogItem = (catalog) => {
    navigate(`/${catalog}`);
  };
  return { catalog, handleViewCatalogItem };
}

export default useCatalogResponse;
