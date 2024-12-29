import catalog from "../../data/catalog.json";
import { useParams } from "react-router-dom";
import useLoading from "../layout/useLoading.jsx";

function useCatalogDetailResponse() {
  const isLoading = useLoading(true, 150);
  const params = useParams();
  const courseId = params.courseId;
  const catalogItem = catalog.find((item) => item.id === courseId);

  return { catalogItem, courseId, isLoading };
}

export default useCatalogDetailResponse;
