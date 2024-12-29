import useCourseDetailResponse from "./useCourseDetail.jsx";
import useCatalogDetailResponse from "./useCatalogDetailResponse.jsx";
import Spinner from "../layout/Spinner.jsx";
import Layout from "../layout/Layout.jsx";

const CourseDetail = () => {
  // Get data from both sources without destructuring their contents yet
  const courseResponse = useCourseDetailResponse();
  const catalogResponse = useCatalogDetailResponse();

  // Combine loading states
  const isLoading = courseResponse.isLoading || catalogResponse.isLoading;

  if (isLoading) {
    return <Spinner />;
  }

  // Choose which data source to use, preferring course if it exists
  const details = courseResponse.course || catalogResponse.catalogItem;

  // Now that we know which source we're using, we can safely destructure its properties
  const { id, thumbnail, title, creationDate } = details;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Layout pageTitle={title}>
        <div className="flex items-center px-8">
          <img
            src={thumbnail}
            alt={title}
            className="rounded-md"
            style={{ width: "220px", height: "220px", marginRight: "16px" }}
          />
          <div>
            <p>
              <strong>ID:</strong> {id}
            </p>
            <p>
              <strong>Creation Date:</strong> {creationDate}
            </p>
            <strong>About the course:</strong>
            <textarea
              name="courseDescription"
              rows="5"
              cols="50"
              placeholder="Enter course content here..."
              className="w-full mt-4 p-2 border rounded-md"
              defaultValue="This course is about ..."
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CourseDetail;
