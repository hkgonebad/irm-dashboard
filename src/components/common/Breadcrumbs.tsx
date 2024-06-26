import { FiArrowLeft } from "react-icons/fi";

import { BreadcrumbItemProps, BusinessUnit, SubBusinessUnit } from "@/models/interfaces";
import { useNavigate } from "react-router-dom";

const Breadcrumbs = ({ bc, isActive, backBtn }: BreadcrumbItemProps) => {
  // console.log(bc);
  // Type guard to check if the item is a BusinessUnit
  const isBusinessUnit = (item: BusinessUnit | SubBusinessUnit | null): item is BusinessUnit => {
    return (item as BusinessUnit).subBusinessUnits !== undefined;
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {isActive && (
        <div className="breadcrumbs">
          {/* <Link to="/existing-forms" className="btn">
            <FiArrowLeft />
          </Link> */}
          <button className="btn" onClick={handleGoBack}>
            <FiArrowLeft className="icon" />
            <span>{backBtn && "Back"}</span>
          </button>

          {!backBtn && (
            <>
              {typeof bc !== "string" && (
                <>
                  <span>{bc?.name}</span>
                  <span className="count">{isBusinessUnit(bc) ? bc.subBusinessUnits?.length : ""}</span>
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Breadcrumbs;
